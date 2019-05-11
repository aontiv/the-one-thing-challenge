import moment from 'moment';
import { connect } from 'react-redux';
import React, { Component, Fragment } from 'react';

import CurrentDay from './CurrentDay';
import DaysOverview from './DaysOverview';
import DayCard from './DayCard';

import { setCompleteAsync, setIncompleteAsync } from '../redux/actions/dayActions';

class Day extends Component {
    state = {
        selected: null,
        editNote: false
    };

    componentDidMount() {
        this.updateSelected(null, this.initializeCurrent());
    }

    initializeCurrent = () => {
        let current = moment().diff(this.props.date, 'days');
        if (current >= 65) current = 65;
        return (current + 1);
    };

    updateSelected = (event, dayNumber) => {
        if (event) event.preventDefault();
        const selected = this.props.dayList.find(day => day.day === dayNumber);
        this.setState({ selected });
    };

    updateComplete = day => {
        this.props.setCompleteAsync(this.props.userId, day)
            .then(() => this.updateSelected(null, day));
    };

    updateIncomplete = day => {
        this.props.setIncompleteAsync(this.props.userId, day)
            .then(() => this.updateSelected(null, day));
    };

    render() {
        return (
            <Fragment>
                <CurrentDay
                    current={this.initializeCurrent()}
                    onClick={this.updateSelected}
                />
                <DaysOverview
                    onClick={this.updateSelected}
                    dayList={this.props.dayList}
                />
                <DayCard
                    onCompleteClick={this.updateComplete}
                    onIncompleteClick={this.updateIncomplete}
                    selected={this.state.selected}
                />
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    date: state.tracker.date,
    dayList: state.dayList,
    userId: state.user._id
});

const mapDispatchToProps = dispatch => ({
    setCompleteAsync: (userId, day) => dispatch(setCompleteAsync(userId, day)),
    setIncompleteAsync: (userId, day) => dispatch(setIncompleteAsync(userId, day))
});

export default connect(mapStateToProps, mapDispatchToProps)(Day);
