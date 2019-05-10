import React from 'react';

const Input = props => {
    return (
        <div className={`form-group mb-${props.margin}`}>
            <input
                className='form-control text-center'
                minLength={5}
                name={props.name}
                onChange={props.onChange}
                pattern='^\w{5}(\w|-){0,15}$'
                placeholder={props.placeholder}
                ref={props.reference}
                required={true}
                type={props.type}
                value={props.value}
            />
            <div className='valid-feedback'>Valid format</div>
            <div className='invalid-feedback'>Invalid format</div>
        </div>
    );
}

export default Input;
