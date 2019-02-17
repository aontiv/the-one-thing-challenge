import React from 'react';
import { format } from 'date-fns';
import PropTypes from 'prop-types';

const HabitList = props => {
    return (
        <div className="habit-list">
            <ul className="list-group">
                <li
                    style={{ color: '#b40101' }}
                    className="list-group-item border-0 p-1 shadow-sm mb-3 rounded"
                >
                <span style={{ color: 'gray' }}>Category:</span> {props.category}
                </li>
                <li
                    style={{ color: '#b40101' }}
                    className="list-group-item border-0 p-1 shadow-sm mb-3 rounded"
                >
                <span style={{ color: 'gray' }}>Start:</span> {format(props.startDate, 'MMMM DD, YYYY')}
                </li>
                <li
                    style={{ color: '#b40101' }}
                    className="list-group-item border-0 p-1 shadow-sm rounded"
                >
                <span style={{ color: 'gray' }}>Habit:</span> {props.name}
                </li>
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
