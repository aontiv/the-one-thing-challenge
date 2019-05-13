import React from 'react';

const Navbar = props => (
        <nav className='navbar bg-primary text-white p-2 p-sm-4 rounded my-2'>
            <h1 className='navbar-brand'>{props.username}</h1>
            <a
                href=''
                className='text-white logout'
                onClick={event => {
                    props.logout(event);
                    props.resetState();
                }}
            >
                Logout
            </a>
        </nav>
);

export default Navbar;
