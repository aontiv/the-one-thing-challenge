import uuid from "uuid";
import Helpers from "../Helpers";
import React, { Component, Fragment } from "react";

import HabitSetup from "./HabitSetup";
import Motivation from "./Motivation";
import HabitInformation from "./HabitInformation";
import CountdownSwitcher from "./CountdownSwitcher";

class TrackerSwitcher extends Component {
    state = {};

    componentDidMount() {
        this.setState({ ...this.initState() });
    }

    initState = () => {
        return {
            habit:  {
                categoryName: "",
                habitDescription: "",
                habitId: "",
            },
            tracker: {
                completed: false,
                dayList: Helpers.initDayList(),
                startDate: ""
            }
        }
    };

    setHabit = habitValues => {
        const habit = this.createHabit(habitValues);
        this.setState({ habit: { ...this.state.habit, ...habit } });
    };

    setTracker = startDate => {
        this.setState({ tracker: { ...this.state.tracker, startDate, dayList: Helpers.initDayList() }});
    };

    createHabit = habitValues => {
        return {
            categoryName: habitValues.category,
            habitDescription: habitValues.habitDescription,
            habitId: uuid.v4(),
        };
    };

    updateDayList = dayList => {
        this.setState({
            ...this.state,
            tracker: {
                ...this.state.tracker,
                dayList
            }
        });
    };

    resetHabit = () => {
        this.setState({
            habit: {
                categoryName: "",
                habitDescription: "",
                habitId: "",
            },
            tracker: {
                completed: false,
                dayList: [],
                startDate: ""
            }
        });
    };

    render() {
        return (
            <div className="row flex-column align-items-center">
                <div className="col-md-8 col-lg-6">
                    {
                        this.state.habit ? (
                            this.state.habit.habitId ? (
                                <Fragment>
                                    <HabitInformation
                                        categoryName={this.state.habit.categoryName}
                                        startDate={this.state.tracker.startDate}
                                        habitDescription={this.state.habit.habitDescription}
                                        resetHabit={this.resetHabit}
                                    />
                                    <CountdownSwitcher
                                        startDate={this.state.tracker.startDate}
                                        dayList={this.state.tracker.dayList}
                                        updateDayList={this.updateDayList}
                                    />
                                </Fragment>  
                            ) : (
                                <Fragment>
                                    <HabitSetup
                                        setHabit={this.setHabit}
                                        setTracker={this.setTracker}
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
