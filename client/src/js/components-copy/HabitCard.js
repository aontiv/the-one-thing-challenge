import React, { Component } from "react";

import InputSwitcher from "./InputSwitcher";

class HabitCard extends Component {
    render() {
        const selectedDay = this.props.dayList.find(day => day.selectedDay)

        return (
            <div className="mb-5">
                <div className="card p-0 shadow-sm">
                    <header className="card-header text-white bg-primary rounded mb-5">
                        <h1>{selectedDay.dayNumber}</h1>
                    </header>
                    <div className="card-body d-flex flex-column justify-content-between align-items-center">
                        <InputSwitcher
                            editNote={selectedDay.editNote}
                            noteId={selectedDay.noteId}
                            noteText={selectedDay.noteText}
                        />
                        <div className="btn-group-vertical w-100">
                            <button className="btn btn-block bg-dark text-white mb-1" type="button">Complete</button>
                            <button className="btn btn-block bg-dark text-white" type="button">Incomplete</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HabitCard;
