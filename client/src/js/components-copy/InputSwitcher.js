import React, { Component } from "react";

import NoteInput from "./NoteInput";
import DisplayNote from "./DisplayNote";

class InputSwitcher extends Component {
    render() {
        const { editNote, noteText } = this.props;

        return (
            !noteText || (noteText && editNote) ? (
                <NoteInput
                    noteText={this.props.noteText}
                    dayNumber={this.props.dayNumber}
                    updateNoteText={this.props.updateNoteText}
                />
            ) : (
                <DisplayNote
                    dayNumber={this.props.dayNumber}
                    noteText={this.props.noteText}
                    updateEditNote={this.props.updateEditNote}
                    deleteNoteText={this.props.deleteNoteText}
                />
            )
        )
    }
}

export default InputSwitcher;
