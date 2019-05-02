import React, { Component } from "react";

class HabitCategories extends Component {
    render() {
        return (
            <select className="custom-select mb-1">
                <option defaultValue="">Choose A Category</option>
                <option value="Spiritual Life">Spiritual Life</option>
                <option value="Physical Health">Physical Health</option>
                <option value="Personal Life">Personal Life</option>
                <option value="Key Relationships">Key Relationships</option>
                <option value="Jobs">Jobs</option>
                <option value="Business">Business</option>
                <option value="Financial Life">Financial Life</option>
            </select>
        );
    }
}

export default HabitCategories;
