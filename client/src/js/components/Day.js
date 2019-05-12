import moment from 'moment';
import { connect } from 'react-redux';
import React, { Component, Fragment } from 'react';

import CurrentDay from './CurrentDay';
import DaysOverview from './DaysOverview';
import DayCard from './DayCard';

import {
    setCompleteAsync,
    setIncompleteAsync,
    setNoteTextAsync,
    deleteNoteTextAsync
} from '../redux/actions/dayActions';

class Day extends Component {
    state = {
        selected: null,
        editNote: false
    };

    componentDidMount() {
        if (!this.state.selected && this.props.dayList.length > 0) {
            this.updateSelected(null, this.initializeCurrent());
        }
    }

    componentDidUpdate() {
        if (!this.state.selected && this.props.dayList.length > 0) {
            this.updateSelected(null, this.initializeCurrent());
        }
    }

    initializeCurrent = () => {
        let current = moment().diff(this.props.date, 'days');
        if (current >= 65) current = 65;
        return (current + 1);
    };

    updateSelected = (event, dayNumber) => {
        if (event) event.preventDefault();
        if (!this.state.editNote) {
            const selected = this.props.dayList.find(day => day.day === dayNumber).day;
            this.setState({ selected });
        }
    };

    updateEditNote = value => {
        this.setState({ editNote: value });
    };

    updateComplete = day => {
        this.props.setCompleteAsync(this.props.userId, day)
    };

    updateIncomplete = day => {
        this.props.setIncompleteAsync(this.props.userId, day)
    };

    updateNoteText = (event, day, noteText) => {
        event.preventDefault();
        this.props.setNoteTextAsync(this.props.userId, day, noteText)
            .then(() => this.updateEditNote(false));
    };

    deleteNoteText = () => {
        this.props.deleteNoteTextAsync(this.props.userId, this.state.selected)
    };

    render() {
        const day = this.props.dayList.find(day => day.day === this.state.selected);

        return (
            <Fragment>
                <CurrentDay
                    current={this.initializeCurrent()}
                    onClick={this.updateSelected}
                />
                <DaysOverview
                    dayList={this.props.dayList}
                    onClick={this.updateSelected}
                />
                <DayCard
                    complete={day ? day.complete : false}
                    editNote={this.state.editNote}
                    incomplete={day ? day.incomplete : false}
                    noteText={day ? day.note_text : ''}
                    onCompleteClick={this.updateComplete}
                    onDeleteClick={this.deleteNoteText}
                    onEditClick={this.updateEditNote}
                    onIncompleteClick={this.updateIncomplete}
                    onSubmit={this.updateNoteText}
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
    setIncompleteAsync: (userId, day) => dispatch(setIncompleteAsync(userId, day)),
    setNoteTextAsync: (userId, day, noteText) => dispatch(setNoteTextAsync(userId, day, noteText)),
    deleteNoteTextAsync: (userId, day) => dispatch(deleteNoteTextAsync(userId, day))
});

export default connect(mapStateToProps, mapDispatchToProps)(Day);
