import moment from "moment";
import React, { Component } from "react";

class HabitInformation extends Component {
    handleResetClick = () => {
        this.props.resetHabit();
    };
            
    render() {
        const startDate = moment(this.props.startDate).format("MMMM DD, YYYY");

        return (
            <div className="mb-5">
                <header className="p-1 bg-primary flex-fill rounded text-white text-center">
                    <span>Habit</span>
                </header>
                <ul className="list-group">
                    <li className="list-group-item"><span className="text-secondary">Category: </span>{this.props.categoryName}</li>
                    <li className="list-group-item"><span className="text-secondary">Start Date: </span>{startDate}</li>
                    <li className="list-group-item"><span className="text-secondary">Habit: </span>{this.props.habitDescription}</li>
                </ul>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-link text-secondary" type="button" onClick={this.handleResetClick}>Reset</button>
                </div>
            </div>
        );
    }
}

export default HabitInformation;
