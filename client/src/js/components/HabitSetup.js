import moment from "moment";
import React, { Component } from "react";

import HabitCategories from "./HabitCategories";
import StartDateSelect from "./StartDateSelect";
import HabitInput from "./HabitInput";

class HabitSetup extends Component {
    state = {
        hasDate: false,
        category: "",
        dateFields: {
            day: "",
            year: "",
            month: ""
        },
        habitDescription: ""
    };

    updateState = state => {
        this.setState({ ...this.state, ...state });
    };

    handleHabitSubmit = event => {
        event.preventDefault();

        const { category, dateFields, habitDescription } = this.state;
        const habitValues = {
            category,
            habitDescription,
        };
        const startDate = moment(`${dateFields.month}-${dateFields.day}-${dateFields.year}`);


        this.props.init(habitValues, startDate)
    };

    render() {
        return (
            <form className="mb-5" onSubmit={this.handleHabitSubmit}>
                <HabitCategories
                    updateState={this.updateState}
                    category={this.state.category}
                />
                <StartDateSelect
                    hasDate={this.state.hasDate}
                    updateState={this.updateState}
                    fields={this.state.dateFields}
                />
                <HabitInput
                    updateState={this.updateState}
                    habitDescription={this.state.habitDescription}
                />
                <button
                    className="btn btn-block bg-secondary text-white"
                    type="submit"
                    disabled={!this.state.category || !this.state.habitDescription ? true : false}
                >
                    Submit
                </button>
            </form>
        );
    }
}

export default HabitSetup;
