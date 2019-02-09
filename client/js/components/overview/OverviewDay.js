import React from 'react';
import PropTypes from 'prop-types';
import { updateSelected } from '../../actions/day/actions';

const OverviewDay = props => {
    const circleColor =
        props.day.marked
            ? props.day.completed
                ? '#00ff00'
                : 'red'
            : 'none'

    const bgColor = props.day.noteSubmitted ? '#ffdd55' : 'black';
    
    function handleClick() {
        updateSelected({ id: props.day.id });
    }
    
    return (
        <div className="overview-day" style={{ color: 'white', backgroundColor: bgColor }} onClick={handleClick}>
            <div className="circle rounded-circle h-100 d-flex justify-content-center align-items-center" style={{ backgroundColor: circleColor }}>
                <h5 className="content mb-0">{props.day.day}</h5>
            </div>
        </div>
    )
}

export default OverviewDay;

OverviewDay.propTypes = {
    day: PropTypes.object.isRequired,
}
