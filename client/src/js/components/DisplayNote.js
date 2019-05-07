import React, { Component } from "react";

class DisplayNote extends Component {
    handleEditClick = () => {
        this.props.updateEditNote(this.props.dayNumber, true)
    };

    handleDeleteClick = () => {
        this.props.deleteNoteText(this.props.dayNumber);
    };
    
    render() {
        return (
            <div className="mb-5 d-flex flex-column align-items-center">
              <p className="lead mb-1">{this.props.noteText}</p>
              <div className="btn-group">
                <button className="btn btn-link text-secondary p-1" onClick={this.handleEditClick}>Edit</button>
                <button className="btn btn-link text-secondary p-1" onClick={this.handleDeleteClick}>Delete</button>
              </div>
            </div>
        );
    }
}

export default DisplayNote;
