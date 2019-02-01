import Dispatcher from '../../Dispatcher';
import { SET_INITIAL_STARTDATE, SET_DATE, SET_SUBMITTED } from './constants';

export const setInitialStartDate = payload => {
    return Dispatcher.dispatch({ type: SET_INITIAL_STARTDATE, payload });
}

export const setDate = payload => {
    return Dispatcher.dispatch({ type: SET_DATE, payload });
}

export const setSubmitted = payload => {
    return Dispatcher.dispatch({ type: SET_SUBMITTED, payload });
}
