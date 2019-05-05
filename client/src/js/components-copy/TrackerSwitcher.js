import React, { Component, Fragment } from "react";

import HabitSetup from "./HabitSetup";
import Motivation from "./Motivation";
import HabitInformation from "./HabitInformation";
import CountdownSwitcher from "./CountdownSwitcher";

class TrackerSwitcher extends Component {
    state = {
        habitId: "xxxx",
        habitDescription: "Walk the dog at 5AM!",
        categoryName: "Personal Life",
        categoryList: [
            "Spiritual Life",
            "Physical Health",
            "Personal Life",
            "Key Relationships",
            "Jobs",
            "Business",
            "Financial Life"
        ],
        startDate: "May 01, 2019",
        completed: false
    };

    render() {
        return (
            <div className="row flex-column align-items-center">
                <div className="col-md-8 col-lg-6">
                    {
                        !this.state.habitId ? (
                            <Fragment>
                                <HabitSetup
                                    categoryList={this.state.categoryList}
                                />
                                <Motivation />
                            </Fragment>
                        ) : (
                            <Fragment>
                                <HabitInformation
                                    categoryName={this.state.categoryName}
                                    startDate={this.state.startDate}
                                    habitDescription={this.state.habitDescription}
                                />
                                <CountdownSwitcher
                                    startDate={this.state.startDate}
                                />
                            </Fragment>
                        )
                    }
                </div>
            </div>

        );
    }
}

export default TrackerSwitcher;
