import { connect } from 'react-redux';
import React, { Component } from 'react';

import HabitSetup from './HabitSetup';
import HomeSwitcherMarkup from './HomeSwitcherMarkup';
import Motivation from './Motivation';
import Tracker from './Tracker';

import Helpers from '../Helpers';
import { getHabitAsync, loadHabitAsync } from '../redux/actions/habitActions';
import { loadTrackerAsync, getTrackerAsync } from '../redux/actions/trackerActions';
import { loadDayListAsync, getDayListAsync } from '../redux/actions/dayListActions';

class HomeSwitcher extends Component {
    state = { ready: false };

    componentDidUpdate(prevProps) {
        if (prevProps.userId !== this.props.userId) {
            this.props.getHabitAsync(this.props.userId)
                .then(() => this.props.getTrackerAsync(this.props.userId))
                .then(() => this.props.getDayListAsync(this.props.userId))
                .then(() => this.setReady(true));
        }
    }

    setReady = value => {
        this.setState({ ready: value });
    };

    initHabitTrackerDayList = (habit, date) => {
        const   newHabit = Helpers.constructHabit(habit, this.props.userId),
                newTracker = Helpers.constructTracker(date, this.props.userId),
                newDayList = Helpers.constructDayList(this.props.userId);
        
        this.props.loadHabitAsync(newHabit)
            .then(() => this.props.loadTrackerAsync(newTracker))
            .then(() => {
                this.props.loadDayListAsync(newDayList)
                this.setReady(true);
            });
    };

    render() {
        const ready = this.state.ready;

        return ready && this.props.habitId
            ? (
                <HomeSwitcherMarkup>
                    <Tracker
                        setReady={this.setReady}
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

const mapStateToProps = state => ({
    habitId: state.habit._id
});

const mapDispatchToProps = dispatch => ({
    getHabitAsync: (id, setHabitPresent) => dispatch(getHabitAsync(id, setHabitPresent)),
    loadHabitAsync: newHabit => dispatch(loadHabitAsync(newHabit)),
    getTrackerAsync: id => dispatch(getTrackerAsync(id)),
    loadTrackerAsync: newTracker => dispatch(loadTrackerAsync(newTracker)),
    getDayListAsync: id => dispatch(getDayListAsync(id)),
    loadDayListAsync: newDayList => dispatch(loadDayListAsync(newDayList))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeSwitcher);
