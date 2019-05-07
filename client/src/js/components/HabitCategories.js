import React, { Component } from "react";

class HabitCategories extends Component {
    state = {
        defaultList: [
            "Spiritual Life",
            "Physical Health",
            "Personal Life",
            "Key Relationships",
            "Jobs",
            "Business",
            "Financial Life"
        ]
    };

    handleChange = event => {
        this.props.updateState({ category: event.target.value });
    };

    render() {
        const habitCategories = this.state.defaultList;
        const categoryElements = habitCategories.map(category => {
            return (<option key={category} value={category}>{category}</option>);
        });

        return (
            <select className="custom-select mb-1" value={this.props.category} onChange={this.handleChange}>
                <option value="" disabled={true}>Choose A Category</option>
                { categoryElements }
            </select>
        );
    }
}

export default HabitCategories;
