import Dispatcher from '../../Dispatcher';
import {
    SET_DATE,
    SET_SUBMITTED,
    SET_CURRENT_DAY,
    SET_INITIAL_STARTDATE
} from './constants';

export const setInitialStartDate = payload => {
    return Dispatcher.dispatch({ type: SET_INITIAL_STARTDATE, payload });
}

export const setDate = payload => {
    return Dispatcher.dispatch({ type: SET_DATE, payload });
}

export const setSubmitted = payload => {
    return Dispatcher.dispatch({ type: SET_SUBMITTED, payload });
}

export const setCurrentDay = payload => {
    return Dispatcher.dispatch({ type: SET_CURRENT_DAY, payload });
}
