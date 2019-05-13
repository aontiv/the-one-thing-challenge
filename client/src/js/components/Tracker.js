import moment from 'moment';
import { connect } from 'react-redux';
import React, { Component, Fragment } from 'react';

import HabitInformation from './HabitInformation';
import TrackerSwitcher from './TrackerSwitcher';

import { resetHabitAsync } from '../redux/actions/habitActions';
import { resetTrackerAsync } from '../redux/actions/trackerActions';
import { resetDayListAsync } from '../redux/actions/dayListActions';

class Tracker extends Component {
    handleResetClick = () => {
        const {
            resetDayListAsync,
            resetHabitAsync,
            resetTrackerAsync,
            userId,
        } = this.props;

        resetHabitAsync(userId)
            .then(() => resetTrackerAsync(userId))
            .then(() => {
                resetDayListAsync(userId);
                this.props.setReady(false);
            });
    };

    render() {
        const date = moment(this.props.date).format('MMMM DD, YYYY');

        return (
            <Fragment>
                <HabitInformation
                    category={this.props.category}
                    date={date}
                    description={this.props.description}
                    onClick={this.handleResetClick}
                />
                <TrackerSwitcher
                    date={date}
                />
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    userId: state.user._id,
    category: state.habit.category,
    date: state.tracker.date,
    description: state.habit.description,
});

const mapDispatchToProps = dispatch => ({
    resetHabitAsync: userId => dispatch(resetHabitAsync(userId)),
    resetTrackerAsync: userId => dispatch(resetTrackerAsync(userId)),
    resetDayListAsync: userId => dispatch(resetDayListAsync(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Tracker);
