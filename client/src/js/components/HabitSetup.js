import moment from 'moment';
import React, { Component } from 'react';

import HabitSetupForm from './HabitSetupForm';

class HabitSetup extends Component {
    state = {
        category: '',
        description: '',
        fields: {
            day: null,
            month: null,
            year: null
        }
    };

    formatField(field) {
        return field < 10 ? `0${field}` : field;
    }

    handleFieldChange = fields => {
        fields.day = this.formatField(fields.day);
        fields.month = this.formatField(fields.month);
        this.setState({ fields });
    }

    handleHabitChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        const   { day, month, year } = this.state.fields,
                habit = { category: this.state.category, description: this.state.description },
                date = moment(`${year}-${month}-${day}`);
               
        this.props.initHabitTrackerDayList(habit, date);
    };

    render() {
        const disabled = !this.state.category || !this.state.description;

        return (
            <HabitSetupForm
                category={this.state.category}
                description={this.state.description}
                disabled={disabled}
                fields={this.state.fields}
                handleFieldChange={this.handleFieldChange}
                onChange={this.handleHabitChange}
                onSubmit={this.handleFormSubmit}
            />
        );
    }
}

export default HabitSetup;
