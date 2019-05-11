import { connect } from 'react-redux';
import React, { Component } from 'react';

import HabitSetup from './HabitSetup';
import HomeSwitcherMarkup from './HomeSwitcherMarkup';
import Motivation from './Motivation';
import Tracker from './Tracker';

import Helpers from '../Helpers';
import { getHabitAsync, loadHabitAsync } from '../redux/actions/habitActions';
import { loadTrackerAsync } from '../redux/actions/trackerActions';
import { loadDayListAsync } from '../redux/actions/dayListActions';

class HomeSwitcher extends Component {
    state = { habitPresent: false };

    componentDidUpdate(prevProps) {
        if (prevProps.userId !== this.props.userId) {
            this.props.getHabitAsync(this.props.userId, this.setHabitPresent);
        }
    }

    setHabitPresent = value => {
        this.setState({ habitPresent: value });
    };

    initHabitTrackerDayList = (habit, date) => {
        const   newHabit = Helpers.constructHabit(habit, this.props.userId),
                newTracker = Helpers.constructTracker(date, this.props.userId),
                newDayList = Helpers.constructDayList(this.props.userId);
        
        this.props.loadHabitAsync(newHabit)
            .then(() => this.props.loadTrackerAsync(newTracker))
            .then(() => {
                this.props.loadDayListAsync(newDayList)
                this.setHabitPresent(true);
            });
    };

    render() {
        const habitPresent = this.state.habitPresent;

        return habitPresent
            ? (
                <HomeSwitcherMarkup>
                    <Tracker
                        setHabitPresent={this.setHabitPresent}
                    />
                </HomeSwitcherMarkup>
            )
            : (
                <HomeSwitcherMarkup>
                    <HabitSetup
                        initHabitTrackerDayList={this.initHabitTrackerDayList}
                    />
                    <Motivation />
                </HomeSwitcherMarkup>
            );
    }
}

const mapDispatchToProps = dispatch => ({
    getHabitAsync: (id, setHabitPresent) => dispatch(getHabitAsync(id, setHabitPresent)),
    loadHabitAsync: newHabit => dispatch(loadHabitAsync(newHabit)),
    loadTrackerAsync: newTracker => dispatch(loadTrackerAsync(newTracker)),
    loadDayListAsync: newDayList => dispatch(loadDayListAsync(newDayList))
});

export default connect(null, mapDispatchToProps)(HomeSwitcher);
