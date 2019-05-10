import React from 'react';

const HomeSwitcherMarkup = props => (
    <div className='row flex-column align-items-center'>
        <div className='col-md-8 col-lg-6'>
            { props.children }
        </div>
    </div>
);

export default HomeSwitcherMarkup;
