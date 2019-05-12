import React, { Component } from 'react';

import NoteInput from './NoteInput';
import DisplayNote from './DisplayNote';

class InputSwitcher extends Component {
    state = {
        noteText: ''
    };

    componentDidMount() {
        this.setState({ noteText: this.props.noteText })
    }

    componentDidUpdate(prevProps) {
        if (prevProps.noteText !== this.props.noteText) {
            this.setState({ noteText: this.props.noteText });
        }
    }

    handleChange = event => {
        this.setState({ noteText: event.target.value });
    };

    render() {
        const { selected, noteText, editNote } = this.props;

        return !noteText || (noteText && editNote)
            ? (
                <NoteInput
                    editNote={editNote}
                    noteText={this.state.noteText}
                    onChange={this.handleChange}
                    onSubmit={this.props.onSubmit}
                    selected={selected}
                />
            )
            : (
                <DisplayNote
                    onEditClick={this.props.onEditClick}
                    onDeleteClick={this.props.onDeleteClick}
                    noteText={noteText}
                />
            );
    }
}

export default InputSwitcher;
