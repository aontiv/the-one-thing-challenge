import moment from "moment";
import classNames from "classnames";
import React, { Component } from "react";

const headerStyles = currentDay => classNames(
    [ "btn", "btn-link" ],
    { "text-secondary": currentDay >= 65 }
);

class CurrentDay extends Component {
    handleCurrentDayClick = (event, dayNumber) => {
        event.preventDefault();
        this.props.updateSelectedDay(String(dayNumber))
    };

    render() {
        let currentDay = moment().diff(this.props.startDate, "days");

        if (currentDay >= 65) {
            currentDay = 65;
        }

        return (
            <div className="mb-2 d-flex justify-content-center">
                <a href="" className={headerStyles(currentDay)}>
                    <h2 onClick={event => this.handleCurrentDayClick( event,(currentDay + 1))}>
                        {currentDay >= 65 ? "Challenge Complete" : currentDay + 1}
                    </h2>
                </a>
            </div>
        );
    }
}

export default CurrentDay;
