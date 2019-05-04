import Dispatcher from '../../Dispatcher';
import { LOAD_STATE,  } from '../constants';
import { ADD_USER, LOGOUT } from './constants';
import { updateSelected } from '../day/actions';
import TrackerStore from '../../stores/TrackerStore';
import { setInitialStartDate } from '../tracker/actions';

export const async_addUser = payload => {
    fetch(
        '/add_user',
        {
            method: 'POST',
            credentials: 'same-origin',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        }
    )
    .then(resp => resp.json())
    .then(data => {
        if (data.status !== 400) {
            Dispatcher.dispatch({ type: ADD_USER, payload: { user: data.user } });
            setInitialStartDate({ date: new Date() });
        }
    })
}

export const async_login = payload => {
    fetch(
        '/login',
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        }
    )
    .then(resp => resp.json())
    .then(data => {
        if (data.status === 200) {
            Dispatcher.dispatch({ type: ADD_USER, payload: { user: data.user } });
            
            if (data.tracker.startDate) {
                data.tracker.startDate = new Date(data.tracker.startDate);
                Dispatcher.dispatch({ type: LOAD_STATE, payload: data });
                updateSelected({ id: `D_${TrackerStore.getState().currentDay + 1}` });
            }
            else {
                setInitialStartDate({ date: new Date() });
            }
        }
    })
}

export const logout = () => {
    Dispatcher.dispatch({ type: LOGOUT });
}