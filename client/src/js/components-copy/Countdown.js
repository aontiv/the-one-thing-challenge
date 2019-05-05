import moment from "moment";
import React, { Component } from "react";

class Countdown extends Component {
    render() {
        const daysDifference = Math.abs(moment().diff(this.props.startDate, "days")) + 1;
        const dayText = daysDifference > 1 ? "days" : "day";

        return (
            <div className="mb-5">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <h3 className="mb-4">Starts In: <span className="text-secondary">{daysDifference}</span> {dayText}</h3>
                </div>
            </div>
        );
    }
}

export default Countdown;
