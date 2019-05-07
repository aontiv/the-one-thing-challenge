import React, { Component } from "react";

class HabitInput extends Component {
    handleChange = event => {
        this.props.updateState({ habitDescription: event.target.value });
    };

    render() {
        return (
            <input className="form-control mb-1" type="text" placeholder="habit description..." value={this.props.habitDescription} onChange={this.handleChange} />
        );
    }
}

export default HabitInput;
