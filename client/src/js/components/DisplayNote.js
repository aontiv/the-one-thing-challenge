import React, { Component } from 'react';

class DisplayNote extends Component {
    render() {
        return (
            <div className='mb-5 d-flex flex-column align-items-center'>
              <p className='lead mb-1'>{this.props.noteText}</p>
              <div className='btn-group'>
                <button
                    className='btn btn-link text-secondary p-1'
                    onClick={() => this.props.onEditClick(true)}
                >
                    Edit
                </button>
                <button
                    className='btn btn-link text-secondary p-1'
                    onClick={this.props.onDeleteClick}
                >
                    Delete
                </button>
              </div>
            </div>
        );
    }
}

export default DisplayNote;
