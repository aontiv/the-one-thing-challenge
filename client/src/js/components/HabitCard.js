import classNames from "classnames";
import React, { Component } from "react";

import InputSwitcher from "./InputSwitcher";

const btnCompleteStyles = isComplete => classNames(
    [ "btn", "btn-block", "mb-1" ],
    {
        "btn-outline-success": !isComplete ? true : false,
        "btn-success": isComplete ? true : false
    }
);

const btnIncompleteStyles = isIncomplete => classNames(
    [ "btn", "btn-block" ],
    {
        "btn-outline-danger": !isIncomplete ? true : false,
        "btn-danger": isIncomplete ? true : false
    }
);

class HabitCard extends Component {
    handleCompleteClick = dayNumber => {
        this.props.updateIsComplete(dayNumber, true);
    };

    handleIncompleteClick = dayNumber => {
        this.props.updateIsIncomplete(dayNumber, true);
    };

    render() {
        const { selectedDay } = this.props;

        return selectedDay ? (
            <div className="mb-5">
                <div className="card p-0 shadow-sm">
                    <header className="card-header text-white bg-primary rounded mb-5">
                        <h1>{selectedDay.dayNumber}</h1>
                    </header>
                    <div className="card-body d-flex flex-column justify-content-between align-items-center">
                        <InputSwitcher
                            editNote={selectedDay.editNote}
                            dayNumber={selectedDay.dayNumber}
                            noteText={selectedDay.noteText}
                            updateNoteText={this.props.updateNoteText}
                            updateEditNote={this.props.updateEditNote}
                            deleteNoteText={this.props.deleteNoteText}
                        />
                        <div className="btn-group-vertical w-100">
                            <button
                                className={btnCompleteStyles(selectedDay.isComplete)}
                                type="button"
                                onClick={() => this.handleCompleteClick(selectedDay.dayNumber)}
                            >
                                Complete
                            </button>
                            <button
                                className={btnIncompleteStyles(selectedDay.isIncomplete)}
                                type="button"
                                onClick={() => this.handleIncompleteClick(selectedDay.dayNumber)}
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

export default HabitCard;
