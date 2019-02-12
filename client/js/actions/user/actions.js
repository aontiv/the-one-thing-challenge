import { REGISTER } from './constants';
import Dispatcher from '../../Dispatcher';
import { setInitialDays } from '../day/actions';
import { setInitialStartDate } from '../tracker/actions';

export const register = payload => {
    fetch('/add_user', { method: 'POST', credentials: 'same-origin', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
        .then(resp => resp.json())
        .then(data => {
            Dispatcher.dispatch({ type: REGISTER });
            setInitialStartDate({ date: new Date() });
            setInitialDays();
        })
}
