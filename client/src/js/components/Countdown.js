import moment from 'moment';
import React from 'react';

const Countdown = props => {
    const daysDifference = Math.abs(moment().diff(props.date, 'days')) + 1;
    const dayText = daysDifference > 1 ? 'days' : 'day';

    return (
        <div className='mb-5'>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <h3 className='mb-4'>Starts In: <span className='text-secondary'>{daysDifference}</span> {dayText}</h3>
            </div>
        </div>
    );
}
export default Countdown;
