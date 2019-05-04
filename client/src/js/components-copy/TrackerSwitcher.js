import React, { Component, Fragment } from "react";

import HabitSetup from "./HabitSetup";
import Motivation from "./Motivation";
import HabitInformation from "./HabitInformation";
import CountdownSwitcher from "./CountdownSwitcher";

class TrackerSwitcher extends Component {
    render() {
        const habitId = this.props.habitId

        return (
            <div className="row flex-column align-items-center">
                <div className="col-md-8 col-lg-6">
                    {
                        !habitId ? (
                            <Fragment>
                                <HabitSetup
                                    habitCategories={this.props.habitCategories}
                                />
                                <Motivation />
                            </Fragment>
                        ) : (
                            <Fragment>
                                <HabitInformation
                                    categoryName={this.props.categoryName}
                                    startDate={this.props.startDate}
                                    habitDescription={this.props.habitDescription}
                                />
                                <CountdownSwitcher
                                    startDate={this.props.startDate}
                                    dayList={this.props.dayList}
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
