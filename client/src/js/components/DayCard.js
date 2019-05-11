import classNames from 'classnames';
import React, { Component } from 'react';

// import InputSwitcher from './InputSwitcher';

const btnCompleteStyles = complete => classNames(
    [ 'btn', 'btn-block', 'mb-1' ],
    {
        'btn-outline-success': !complete ? true : false,
        'btn-success': complete ? true : false
    }
);

const btnIncompleteStyles = incomplete => classNames(
    [ 'btn', 'btn-block' ],
    {
        'btn-outline-danger': !incomplete ? true : false,
        'btn-danger': incomplete ? true : false
    }
);

class DayCard extends Component {
    render() {
        return this.props.selected ? (
            <div className="mb-5">
                <div className="card p-0 shadow-sm">
                    <header className="card-header text-white bg-primary rounded mb-5">
                        <h1>{this.props.selected.day}</h1>
                    </header>
                    <div className="card-body d-flex flex-column justify-content-between align-items-center">
                        {/* <InputSwitcher
                            editNote={selectedDay.editNote}
                            dayNumber={selectedDay.dayNumber}
                            noteText={selectedDay.noteText}
                            updateNoteText={this.props.updateNoteText}
                            updateEditNote={this.props.updateEditNote}
                            deleteNoteText={this.props.deleteNoteText}
                        /> */}
                        <div className="btn-group-vertical w-100">
                            <button
                                className={btnCompleteStyles(this.props.selected.complete)}
                                type="button"
                                onClick={() => this.props.onCompleteClick(this.props.selected.day)}
                            >
                                Complete
                            </button>
                            <button
                                className={btnIncompleteStyles(this.props.selected.incomplete)}
                                type="button"
                                onClick={() => this.props.onIncompleteClick(this.props.selected.day)}
                            >
                                Incomplete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <div className="d-flex justify-content-center">
                <div className="spinner-border text-primary">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }
}

export default DayCard;
