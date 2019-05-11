import React from 'react';
import classNames from 'classnames';

const headerStyles = current => classNames(
    [ 'btn', 'btn-link' ],
    { 'text-secondary': current >= 66 }
);

const CurrentDay = props => (
    <div className='mb-2 d-flex justify-content-center'>
        <a href='' className={headerStyles(props.current)}>
            <h2 onClick={event => props.onClick( event,(props.current))}>
                {props.current >= 66 ? 'Challenge Complete' : (props.current)}
            </h2>
        </a>
    </div>
);

export default CurrentDay;
