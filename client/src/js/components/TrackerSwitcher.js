import uuid from "uuid";
import Client from "../Client";
import Helpers from "../Helpers";
import React, { Component, Fragment } from "react";

import HabitSetup from "./HabitSetup";
import Motivation from "./Motivation";
import HabitInformation from "./HabitInformation";
import CountdownSwitcher from "./CountdownSwitcher";

class TrackerSwitcher extends Component {
    state = {
        habit:  {},
        tracker: {},
        habitReady: false,
        trackerReady: false
    };

    componentDidMount() {
        Client.getHabit(this.props.userId)
            .then(this.parseJSON)
            .then(this.handleHabitResponse)

        Client.getTracker(this.props.userId)
            .then(this.parseJSON)
            .then(this.handleTrackerResponse)
    }

    parseJSON = response => {
        return response.json();
    };

    handleHabitResponse = data => {
        if (!data.message) {
            this.setState({
                habit: {
                    categoryName: data.category_name,
                    habitDescription: data.habit_description,
                    habitId: data.habit_id,
                    userId: data.user_id
                },
                habitReady: true
            });
        }
        else {
            this.setState({ habitReady: true });
        }
    };

    handleTrackerResponse = data => {
        if (!data.message) {
            this.setState({
                tracker: {
                    complete: data.complete,
                    dayList: data.day_list,
                    startDate: data.start_date,
                    trackerId: data.tracker_id,
                    userId: data.user_id
                },
                trackerReady: true
            });
        }
        else {
            this.setState({ trackerReady: true });
        }
    };

    init = (habitValues, startDate) => {
        const habit = this.createHabit(habitValues);
        const tracker = this.createTracker(startDate);

        this.addHabit(habit);
        this.addTracker(tracker);

        Client.addHabit(habit)
            .then(() => Client.addTracker(tracker));
    };
    
    addHabit = habit => {
        this.setState({ habit });
    };

    addTracker = tracker => {
        this.setState({ tracker });
    };

    createHabit = habitValues => {
        return {
            categoryName: habitValues.category,
            habitDescription: habitValues.habitDescription,
            habitId: uuid.v4(),
            userId: this.props.userId
        };
    };

    createTracker = startDate => {
        return {
            complete: false,
            dayList: Helpers.initDayList(),
            startDate: startDate,
            trackerId: uuid.v4(),
            userId: this.props.userId
        };
    };

    updateDayList = dayList => {
        this.setState({ tracker: { ...this.state.tracker, dayList } });
    };

    reset = () => {
        this.deleteHabit();
        this.deleteTracker();

        Client.deleteHabit(this.props.userId)
            .then(() => Client.deleteTracker(this.props.userId))
    };

    deleteHabit = () => {
        this.setState({ habit: {} });
    };

    deleteTracker = () => {
        this.setState({ tracker: {} })
    };

    render() {
        return (
            <div className="row flex-column align-items-center">
                <div className="col-md-8 col-lg-6">
                    {
                        this.state.habitReady && this.state.trackerReady ? (
                            this.state.habit.habitId ? (
                                <Fragment>
                                    <HabitInformation
                                        categoryName={this.state.habit.categoryName}
                                        startDate={this.state.tracker.startDate}
                                        habitDescription={this.state.habit.habitDescription}
                                        reset={this.reset}
                                    />
                                    <CountdownSwitcher
                                        startDate={this.state.tracker.startDate}
                                        dayList={this.state.tracker.dayList}
                                        updateDayList={this.updateDayList}
                                        trackerId={this.state.tracker.trackerId}
                                    />
                                </Fragment>  
                            ) : (
                                <Fragment>
                                    <HabitSetup
                                        init={this.init}
                                    />
                                    <Motivation />
                                </Fragment>
                            )
                        ) : (
                            <div className="d-flex justify-content-center">
                                <div className="spinner-border text-primary">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>

        );
    }
}

export default TrackerSwitcher;
