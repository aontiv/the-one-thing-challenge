import React, { Component } from "react";

class DefaultHabitCard extends Component {
    render() {
        return (
            <div className="card shadow-sm">
                <header className="card-header bg-primary">
                    <p className="text-right text-white">"Accountability is the breakfast of champions"</p>
                    <p className="text-right text-secondary">- Gary Keller</p>
                </header>
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                    <h3 className="mb-4">starts in: <span className="text-secondary">1</span> day</h3>
                </div>
            </div>
        );
    }
}

export default DefaultHabitCard;
