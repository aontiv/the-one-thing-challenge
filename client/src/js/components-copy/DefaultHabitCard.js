import React, { Component, Fragment } from "react";

class DefaultHabitCard extends Component {
    render() {
        return (
            <Fragment>
                <p className="text-center">"Accountability is the breakfast of champions"</p>
                <p className="text-center text-secondary">- Gary Keller</p>
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                    <h3 className="mb-4">Track In: <span className="text-secondary">1</span> day</h3>
                </div>
            </Fragment>
        );
    }
}

export default DefaultHabitCard;
