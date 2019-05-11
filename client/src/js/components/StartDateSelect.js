import React from 'react';

const StartDateSelect = props => (
    <select
        className='custom-select col-4 mb-1'
        name={props.name}
        onChange={props.onChange}
        value={props.value}
    >
        <option value='' disabled={true}>{props.text}</option>
        { props.contentList }
    </select>
);

export default StartDateSelect;
