import React from 'react';
import { format } from 'date-fns';

const HabitList = props => {
    return (
        <div className="habit-list">
            <span><i className="fa fa-minus-circle" aria-hidden="true"></i></span>
            <ul className="list-group">
                <li className="list-group-item">{props.category}</li>
                <li className="list-group-item">{format(props.startDate, 'MMMM DD, YYYY')}</li>
                <li className="list-group-item">{props.name}</li>
            </ul>
        </div>
    )
}

export default HabitList;
