import React, { Component } from "react";

class InputNote extends Component {
    render() {
        return (
            <div className="input-group mb-5">
                <input className="form-control" type="text" placeholder="note..." />
                <div className="input-group-append">
                    <button className="btn btn-secondary" type="submit">Add</button>
                </div>
            </div>
        );
    }
}

export default InputNote;
