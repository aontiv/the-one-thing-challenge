import React, { Component } from "react";

class NoteInput extends Component {
    state = {
        noteInput: ""
    };

    componentDidMount() {
        this.setState({ noteInput: this.props.noteText });
    }

    handleInputChange = event => {
        this.setState({ noteInput: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.updateNoteText(this.props.dayNumber, this.state.noteInput);
    };

    render() {
        const disabled = this.state.noteInput === "";

        return (
            <form className="input-group mb-5" onSubmit={this.handleSubmit}>
                <input
                    className="form-control"
                    type="text"
                    placeholder="note..."
                    value={this.state.noteInput}
                    onChange={this.handleInputChange}
                />
                <div className="input-group-append">
                    <button
                        className="btn btn-secondary"
                        type="submit"
                        disabled={disabled}
                    >
                        Submit
                    </button>
                </div>
            </form>
        );
    }
}

export default NoteInput;
