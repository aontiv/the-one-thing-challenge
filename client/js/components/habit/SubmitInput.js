import React from 'react';
import { setSubmitted } from '../../actions/tracker/actions';

const SubmitInput = props => {
    const handleClick = event => {
        const { name, category } = props;

        if (name !== "" && category !== "") {
            return setSubmitted({ submitted: true });
        }
    }

    return (
        <div className="submit-input">
            <button type="button" className="btn btn-secondary btn-lg btn-block" onClick={handleClick}>Start Tracking!</button>
        </div>
    )
}

export default SubmitInput;
