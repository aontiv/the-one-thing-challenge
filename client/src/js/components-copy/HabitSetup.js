import React, { Component } from "react";

import HabitCategories from "./HabitCategories";
import StartDateSelect from "./StartDateSelect";
import HabitNameInput from "./HabitNameInput";

class HabitSetup extends Component {
    render() {
        return (
            <form className="col-md-8 col-lg-10">
                <HabitCategories />
                <StartDateSelect />
                <HabitNameInput />
                <button className="btn btn-block bg-secondary text-white" type="submit">Submit</button>
            </form>
        );
    }
}

export default HabitSetup;
