import React, { Component } from "react";

class HabitInformation extends Component {
    render() {
        return (
            <div className="row flex-column align-items-center">
                <div className="col-md-6">
                    <header className="p-1 bg-primary flex-fill rounded text-white text-center">
                        <span>Habit</span>
                    </header>
                    <ul className="list-group">
                        <li className="list-group-item"><span className="text-secondary">Category:</span> Financial Life</li>
                        <li className="list-group-item"><span className="text-secondary">Start Date:</span> April 01, 2019</li>
                        <li className="list-group-item"><span className="text-secondary">Habit:</span> Save $100 A Month</li>
                    </ul>
                </div>
          </div>
        );
    }
}

export default HabitInformation;
