import React, { Component } from "react";

import HabitCategories from "./HabitCategories";
import StartDateSelect from "./StartDateSelect";
import HabitInput from "./HabitInput";

class HabitSetup extends Component {
    render() {
        return (
            <form className="mb-5">
                <HabitCategories
                    habitCategories={this.props.habitCategories}
                />
                <StartDateSelect />
                <HabitInput />
                <button className="btn btn-block bg-secondary text-white" type="submit">Submit</button>
            </form>
        );
    }
}

export default HabitSetup;
