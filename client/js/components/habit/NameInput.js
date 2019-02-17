import React from 'react';
import PropTypes from 'prop-types';
import { setName } from '../../actions/habit/actions';

const NameInput = props => {
    const handleChange = event => {
        const value = event.target.value;
        return setName({ name: value });
    }

    return (
        <form className="name-input">
            <div className="form-group mb-1">
                <input
                    type="text"
                    value={props.name}
                    onChange={handleChange}
                    placeholder="habit description"
                    className="form-control text-center"
                />
            </div>
        </form>
    )
}

export default NameInput;

NameInput.propTypes = {
    name: PropTypes.string.isRequired,
}
