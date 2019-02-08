import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Motivation = props => {
    const currentDay = props.currentDay ? Math.abs(props.currentDay) : props.currentDay;

    return (
        <div className='motivation'>
            <div className="card shadow text-center position-relative" style={{ height: '24.588rem', width: '100%' }}>
                <svg className="position-absolute rounded-top" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 30">
                    <polygon stroke="black" points="0,0 100,0 0,29" />
                </svg>
                <div className="card-body d-flex flex-column justify-content-center align-items-center pb-0">
                    <h5 className="card-text">"Accountability is the breakfast of champions."</h5>
                    <h5 className="card-text" style={{ color: '#b40101' }}>- Gary Keller</h5>
                </div>
                {
                    currentDay && (
                        <div className="card-footer pt-0" style={{ backgroundColor: 'unset' }}>
                            <h2 style={{ color: 'blue' }}>{ currentDay }</h2>
                            <h5>{(currentDay === 1 ? 'day' : 'days') + ' until start day!'}</h5>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Motivation;


Motivation.propTypes = {
    currentDay: PropTypes.number
}
