import React from 'react';
import { setName } from '../../actions/habit/actions';

const NameInput = props => {
    const handleChange = event => {
        const value = event.target.value;
        return setName({ name: value });
    }

    return (
        <form className="name-input">
            <div className="form-group">
                <input type="text" className="form-control" value={props.name} placeholder="e.g. Go to the gym at 5:00 am" onChange={handleChange} />
            </div>
        </form>
    )
}

export default NameInput;
