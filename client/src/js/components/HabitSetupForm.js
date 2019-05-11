import React from 'react';

import HabitCategories from './HabitCategories';
import HabitDescription from './HabitDescription';
import StartDate from './StartDate';

const HabitSetupForm = props => (
    <form className='mb-5' onSubmit={props.onSubmit}>
        <HabitCategories
            category={props.category}
            onChange={props.onChange}
        />
        <StartDate
            fields={props.fields}
            handleFieldChange={props.handleFieldChange}
            onChange={props.onChange}
        />
        <HabitDescription
            description={props.description}
            onChange={props.onChange}
        />
        <button
            className='btn btn-block bg-secondary text-white'
            disabled={props.disabled}
            type='submit'
        >
            Submit
        </button>
    </form>
);

export default HabitSetupForm;
