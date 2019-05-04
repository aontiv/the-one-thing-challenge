import React from 'react';
import PropTypes from 'prop-types';
import { setDatabaseTables } from '../../actions/actions';
import { setInitialDays } from '../../actions/day/actions';
import { calculateCurrentDay } from '../../utils/utilities';
import { setSubmitted } from '../../actions/tracker/actions';
import { setCurrentDay } from '../../actions/tracker/actions';

const SubmitInput = props => {
    const handleClick = event => {
        const { name, category } = props;
        const currentDay = calculateCurrentDay(props.startDate);

        if (name !== "" && category !== "") {
            setSubmitted({ submitted: true });
            setCurrentDay({ currentDay });
            setInitialDays();

            setDatabaseTables();
            return;
        }
    }

    return (
        <div className="submit-input">
            <button
                type="button"
                onClick={handleClick}
                className="btn btn-secondary btn-lg btn-block"
                style={{ backgroundColor: '#b40101', borderColor: '#b40101' }}
            >
            Start Tracking!
            </button>
        </div>
    )
}

export default SubmitInput;

SubmitInput.propTypes = {
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    startDate: PropTypes.object.isRequired,
}