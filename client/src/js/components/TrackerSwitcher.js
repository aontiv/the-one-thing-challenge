import moment from 'moment';
import React, { Fragment } from 'react';

import Day from './Day';
import Motivation from './Motivation';
import Countdown from './Countdown';

const TrackerSwitcher = props => {
    const beforeDate = moment().isBefore(props.date, 'days');

    return beforeDate
        ? (
            <Fragment>
                <Motivation />
                <Countdown date={props.date} />
            </Fragment>
        )
        : (<Day />)
};

export default TrackerSwitcher;
