import React, { Component } from "react";

class HabitInput extends Component {
    render() {
        return (
            <input className="form-control mb-1" type="text" placeholder="habit description..." />
        );
    }
}

export default HabitInput;
