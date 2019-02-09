import React from 'react';
import { format } from 'date-fns';
import PropTypes from 'prop-types';

const HabitList = props => {
    return (
        <div className="habit-list">
            <ul className="list-group">
                <li className="list-group-item border-0 p-1 shadow-sm mb-3 rounded" style={{ color: '#b40101' }}><span style={{ color: 'gray' }}>Category:</span> {props.category}</li>
                <li className="list-group-item border-0 p-1 shadow-sm mb-3 rounded" style={{ color: '#b40101' }}><span style={{ color: 'gray' }}>Start:</span> {format(props.startDate, 'MMMM DD, YYYY')}</li>
                <li className="list-group-item border-0 p-1 shadow-sm rounded" style={{ color: '#b40101' }}><span style={{ color: 'gray' }}>Habit:</span> {props.name}</li>
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
