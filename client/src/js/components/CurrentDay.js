import moment from "moment";
import React, { Component } from "react";

class CurrentDay extends Component {
    handleCurrentDayClick = (event, dayNumber) => {
        event.preventDefault();
        this.props.updateSelectedDay(String(dayNumber))
    };

    render() {
        const currentDay = moment().diff(this.props.startDate, "days");

        return (
            <div className="mb-2 d-flex justify-content-center">
                <a href="" className="btn btn-link">
                    <h2 onClick={event => this.handleCurrentDayClick( event,(currentDay + 1))}>
                        {currentDay + 1}
                    </h2>
                </a>
            </div>
        );
    }
}

export default CurrentDay;
