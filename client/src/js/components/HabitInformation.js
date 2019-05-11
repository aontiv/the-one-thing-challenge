import React  from 'react';

const HabitInformation = props => (
    <div className='mb-5'>
        <header className='p-1 bg-primary flex-fill rounded text-white text-center'>
            <span>Habit</span>
        </header>
        <ul className='list-group'>
            <li className='list-group-item'><span className='text-secondary'>Category: </span>{props.category}</li>
            <li className='list-group-item'><span className='text-secondary'>Start Date: </span>{props.date}</li>
            <li className='list-group-item'><span className='text-secondary'>Habit: </span>{props.description}</li>
        </ul>
        <div className='d-flex justify-content-center'>
            <button className='btn btn-link text-secondary' type='button' onClick={props.onClick}>Reset</button>
        </div>
    </div>
);

export default HabitInformation;
