import React from 'react';
import PropTypes from 'prop-types';
import { getDate, getMonth, getYear } from 'date-fns';
import { setDate } from '../../actions/tracker/actions';
import {
    arrayOfYears,
    arrayOfDaysInMonth,
    arrayOfMonthsInYear,
    checkDayVsNextMonthDays
} from '../../utils/utilities';

const DateInput = props => {
    const isDate = props.startDate instanceof Date;

    const handleMonthChange = event => {
        const [ year, value, day ] = checkDayVsNextMonthDays(event, props.startDate);
        return setDate({ date: new Date(year, value, day) });
    }

    const handleDayChange = event => {
        const value = event.target.value;
        const year = getYear(props.startDate);
        const month = getMonth(props.startDate);
        return setDate({ date: new Date(year, month, value) });
    }

    const handleYearChange = event => {
        const value = event.target.value;
        const day = getDate(props.startDate);
        const month = getMonth(props.startDate);
        return setDate({ date: new Date(value, month, day) });
    }

    return (
        <form className="date-input">
            <div className="form-group d-flex mb-1">
                <select
                    className="form-control"
                    onChange={handleMonthChange}
                    value={isDate ? getMonth(props.startDate) : ""}
                >
                    {
                        arrayOfMonthsInYear().map(month => {
                            return <option key={`M_${month}`} value={month}>{month + 1}</option>
                        })
                    }
                </select>
                <select
                    className="form-control"
                    onChange={handleDayChange}
                    value={isDate ? getDate(props.startDate) : ""}
                >
                    {
                        arrayOfDaysInMonth(props.startDate).map(day => {
                            return <option key={`D_${day}`} value={day}>{day}</option>
                        })
                    }
                </select>
                <select
                    className="form-control"
                    onChange={handleYearChange}
                    value={isDate ? getYear(props.startDate) : ""}
                >
                    {
                        arrayOfYears().map(year => {
                            return <option key={`Y_${year}`} value={year}>{year}</option>
                        })
                    }
                </select>
            </div>
        </form>
    );
}

export default DateInput;

DateInput.protoTypes = {
    startDate: PropTypes.object.isRequired,
}
