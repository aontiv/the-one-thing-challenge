import { ADD_USER } from './constants';
import { LOAD_STATE } from '../constants';
import Dispatcher from '../../Dispatcher';
import { setInitialStartDate } from '../tracker/actions';

export const async_addUser = payload => {
    fetch('/add_user', { method: 'POST', credentials: 'same-origin', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
        .then(resp => resp.json())
        .then(data => {
            Dispatcher.dispatch({ type: ADD_USER, payload: { user: data.user } });
            setInitialStartDate({ date: new Date() });
        })
}

export const async_login = payload => {
    fetch('/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
        .then(resp => resp.json())
        .then(data => {
            Dispatcher.dispatch({ type: ADD_USER, payload: { user: data.user } })

            data.tracker.startDate = new Date(data.tracker.startDate);
            Dispatcher.dispatch({ type: LOAD_STATE, payload: data })
        })
}
