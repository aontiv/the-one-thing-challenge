import React, { Component } from "react";

import NoteInput from "./NoteInput";
import DisplayNote from "./DisplayNote";

class InputSwitcher extends Component {
    render() {
        const editNote = this.props.editNote;
        const noteId = this.props.noteId;

        return (
            !noteId || (noteId && editNote) ? (
                <NoteInput />
            ) : (
                <DisplayNote
                    noteText={this.props.noteText}
                />
            )
        )
    }
}

export default InputSwitcher;
