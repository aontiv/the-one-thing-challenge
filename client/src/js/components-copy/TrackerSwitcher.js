import React, { Component, Fragment } from "react";

import HabitSetup from "./HabitSetup";
import DefaultHabitCard from "./DefaultHabitCard";
import HabitInformation from "./HabitInformation";
import DaysOverview from "./DaysOverview";
import HabitCard from "./HabitCard";

class TrackerSwitcher extends Component {
    render() {
        const habitId = ""

        return (
            !habitId ? (
                    <div className="row flex-column flex-lg-row">
                        <div className="flex-1 d-flex justify-content-center justify-content-lg-end mb-5 mb-lg-0 p-lg-2">
                            <HabitSetup />
                        </div>
                        <div className="flex-1 d-flex justify-content-center justify-content-lg-start mb-2 mb-lg-0 p-lg-2">
                            <DefaultHabitCard />
                        </div>
                    </div>
                ) : (
                    <Fragment>
                        <HabitInformation />
                        <DaysOverview />
                        <HabitCard />
                    </Fragment>
                )
        );
    }
}

export default TrackerSwitcher;
