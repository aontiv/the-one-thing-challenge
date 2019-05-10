import classNames from 'classnames';
import React, { Fragment } from 'react';

import Input from './Input';

const AuthorizationForm = props => (
    <Fragment>
        <div className='row flex-column align-items-center p-3'>
            <form
                className={formStyles(props.validated)}
                noValidate={true}
                onSubmit={props.onSubmit}
            >
                <header className='bg-primary p-2 mb-4 rounded'>
                    <h1 className='text-center text-white mb-0'>{props.context}</h1>
                </header>
                <Input
                    margin={1}
                    name='username'
                    onChange={props.onChange}
                    placeholder='username'
                    reference={props.usernameReference}
                    type='text'
                    value={props.username}
                />
                <Input
                    margin={0}
                    name='password'
                    onChange={props.onChange}
                    placeholder='password'
                    reference={props.passwordReference}
                    type='password'
                    value={props.password}
                />
                <button
                    className='btn btn-secondary btn-block'
                    disabled={props.disabled}
                    type='submit'
                >
                    Submit
                </button>
            </form>
            <div>
                <a
                    className='px-1'
                    href=""
                    onClick={props.onClick}
                >
                    Login
                </a>
                <span className='text-primary'>|</span>
                <a
                    className='px-1'
                    href=""
                    onClick={props.onClick}
                >
                    Register
                </a>
            </div>
        </div>
        <div className={errorStyles(props.error)}>{props.error}</div>
    </Fragment>
);

const formStyles = validated => classNames(
    [ 'col-md-8', 'col-lg-6', 'col-xl-4', 'shadow', 'p-2', 'mb-4' ],
    { 'was-validated': validated }
);

const errorStyles = error => classNames(
    [ 'alert', 'alert-danger', 'text-center', 'fixed-bottom', 'fade' ],
    { show: error }
);

export default AuthorizationForm;
