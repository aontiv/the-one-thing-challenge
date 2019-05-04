import React, { Component } from "react";

class HabitCategories extends Component {
    render() {
        const habitCategories = this.props.habitCategories;
        const categoryElements = habitCategories.map(category => {
            return (<option key={category} value={category}>{category}</option>);
        });

        return (
            <select className="custom-select mb-1">
                <option defaultValue="">Choose A Category</option>
                { categoryElements }
            </select>
        );
    }
}

export default HabitCategories;
