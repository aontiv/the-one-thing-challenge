import React, { Component } from "react";

class DisplayNote extends Component {
    render() {
        return (
            <div className="mb-5 d-flex flex-column align-items-center">
              <p className="lead mb-1">I went to the gym!</p>
              <button className="btn btn-link text-secondary">Edit</button>
            </div>
        );
    }
}

export default DisplayNote;
