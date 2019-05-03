import React, { Component } from "react";

import InputSwitcher from "./InputSwitcher";

class HabitCard extends Component {
    render() {
        return (
            <div className="card col-md-8 col-lg-10 p-0 shadow-sm">
                <header className="card-header text-white bg-primary rounded mb-5">
                    <h1>1</h1>
                </header>
                <div className="card-body d-flex flex-column justify-content-between align-items-center">
                    <InputSwitcher />
                    <div className="btn-group-vertical w-100">
                        <button className="btn btn-block bg-dark text-white mb-1" type="button">Complete</button>
                        <button className="btn btn-block bg-dark text-white" type="button">Incomplete</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default HabitCard;
