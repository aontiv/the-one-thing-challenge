import React, { Component } from "react";

class HabitInformation extends Component {
    render() {
        return (
            <div className="col-md-8 col-lg-10 mb-4 flex-none">
                <header className="p-1 bg-primary flex-fill rounded text-white text-center">
                    <span>Habit</span>
                </header>
                <ul className="list-group">
                    <li className="list-group-item"><span className="text-secondary">Category:</span> Financial Life</li>
                    <li className="list-group-item"><span className="text-secondary">Start Date:</span> April 01, 2019</li>
                    <li className="list-group-item"><span className="text-secondary">Habit:</span> Save $100 A Month</li>
                </ul>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-link text-secondary">Reset</button>
                </div>
            </div>
        );
    }
}

export default HabitInformation;
