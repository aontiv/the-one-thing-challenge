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
                <input type="text" className="form-control" value={props.name} placeholder="Read The One Thing" onChange={handleChange} />
            </div>
        </form>
    )
}

export default NameInput;

NameInput.propTypes = {
    name: PropTypes.string.isRequired,
}
