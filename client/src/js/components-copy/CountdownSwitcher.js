import moment from "moment";
import React, { Component, Fragment } from "react";

import Motivation from "./Motivation";
import Countdown from "./Countdown";
import DaysOverview from "./DaysOverview";
import HabitCard from "./HabitCard";

class CountdownSwitcher extends Component {
    render() {
        const isBeforeStartDate = moment().isBefore(this.props.startDate, "days");

        return (
            isBeforeStartDate ? (
                <Fragment>
                    <Motivation />
                    <Countdown
                        startDate={this.props.startDate}
                    />
                </Fragment>
            ) : (
                <Fragment>
                    <DaysOverview
                        dayList={this.props.dayList}
                    />
                    <HabitCard
                        dayList={this.props.dayList}
                    />
                </Fragment>
            )
        );
    }
}

export default CountdownSwitcher;
