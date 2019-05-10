import moment from "moment";
import React, { Component } from "react";

import HabitCategories from "./HabitCategories";
import StartDateSelect from "./StartDateSelect";
import HabitInput from "./HabitInput";

class HabitSetup extends Component {
    state = {
        category: "",
        date: false,
        description: "",
        fields: {
            day: "",
            month: "",
            year: ""
        }
    };

    updateState = state => {
        this.setState({ ...this.state, ...state });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        const   { day, month, year } = this.state.fields,
                habit = { category: this.state.category, description: this.state.description },
                date = moment(`${month}-${day}-${year}`);
                
        this.props.init(habit, date)
    };

    render() {
        return (
            <form className="mb-5" onSubmit={this.handleFormSubmit}>
                <HabitCategories
                    updateState={this.updateState}
                    category={this.state.category}
                />
                <StartDateSelect
                    date={this.state.date}
                    updateState={this.updateState}
                    fields={this.state.fields}
                />
                <HabitInput
                    updateState={this.updateState}
                    description={this.state.description}
                />
                <button
                    className="btn btn-block bg-secondary text-white"
                    type="submit"
                    disabled={!this.state.category || !this.state.description ? true : false}
                >
                    Submit
                </button>
            </form>
        );
    }
}

export default HabitSetup;
