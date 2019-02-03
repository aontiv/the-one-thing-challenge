import Dispatcher from '../../Dispatcher';
import { SET_INITIAL_DAYS } from './constants';

export const setInitialDays = _ => {
    return Dispatcher.dispatch({ type: SET_INITIAL_DAYS });
}