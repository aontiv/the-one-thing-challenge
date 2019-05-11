import React from 'react';

const HabitDescription = props => (
    <input
        className='form-control mb-1'
        name='description'
        onChange={props.onChange}
        placeholder='habit description...'
        type='text'
        value={props.description}
    />
);

export default HabitDescription;
