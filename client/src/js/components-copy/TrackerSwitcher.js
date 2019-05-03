import React, { Component, Fragment } from "react";

import HabitSetup from "./HabitSetup";
import DefaultHabitCard from "./DefaultHabitCard";
import HabitInformation from "./HabitInformation";
import DaysOverview from "./DaysOverview";
import HabitCard from "./HabitCard";

class TrackerSwitcher extends Component {
    render() {
        const habitId = "xxxx"

        return (
            !habitId ? (
                    <div className="row flex-column flex-lg-row">
                        <div className="flex-1 d-flex justify-content-center mb-5 mb-lg-0 p-lg-2">
                            <HabitSetup />
                        </div>
                        <div className="flex-1 d-flex flex-column align-items-center mb-2 mb-lg-0 p-lg-2">
                            <DefaultHabitCard />
                        </div>
                    </div>
                ) : (
                    <Fragment>
                        <div className="row flex-column flex-lg-row mb-2">
                            <div className="flex-1 d-flex flex-column align-items-center mb-5 mb-lg-0 p-lg-2">
                                <HabitInformation />
                                <DaysOverview />
                            </div>
                            <div className="flex-1 d-flex justify-content-center mb-2 mb-lg-0 p-2">
                                <HabitCard />
                            </div>
                        </div>
                    </Fragment>
                )
        );
    }
}

export default TrackerSwitcher;
