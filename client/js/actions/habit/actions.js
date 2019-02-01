import Dispatcher from '../../Dispatcher';
import { SET_CATEGORY, SET_NAME } from './constants';

export const setCategory = payload => {
    return Dispatcher.dispatch({ type: SET_CATEGORY, payload });
}

export const setName = payload => {
    return Dispatcher.dispatch({ type: SET_NAME, payload });
}
