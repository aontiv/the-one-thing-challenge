import React from 'react';
import { format } from 'date-fns';
import PropTypes from 'prop-types';

const HabitList = props => {
    return (
        <div className="habit-list">
            <ul className="list-group text-white">
                <li className="list-group-item">{props.category}</li>
                <li className="list-group-item">{format(props.startDate, 'MMMM DD, YYYY')}</li>
                <li className="list-group-item">{props.name}</li>
            </ul>
        </div>
    )
}

export default HabitList;

HabitList.propTypes = {
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    startDate: PropTypes.object.isRequired,
}
