import Dispatcher from '../../Dispatcher';
import DayStore from '../../stores/DayStore';
import UserStore from '../../stores/UserStore';
import { UPDATE_COMPLETE, UPDATE_MARKED, SET_INITIAL_DAYS, UPDATE_SELECTED, UPDATE_NOTE, UPDATE_NOTE_SUBMITTED } from './constants';

export const async_updateDays = () => {
    const id = UserStore.getState().id;
    const days = DayStore.getState();

    fetch('/update_days', { method: 'UPDATE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id, days }) })
        .then(resp => resp.json())
        .then(data => console.log(data));
}

export const setInitialDays = _ => {
    return Dispatcher.dispatch({ type: SET_INITIAL_DAYS });
}

export const updateSelected = payload => {
    return Dispatcher.dispatch({ type: UPDATE_SELECTED, payload });
}

export const updateNote = payload => {
    return Dispatcher.dispatch({ type: UPDATE_NOTE, payload });
}

export const updateNoteSubmitted = payload => {
    return Dispatcher.dispatch({ type: UPDATE_NOTE_SUBMITTED, payload });
}

export const updateMarked = payload => {
    return Dispatcher.dispatch({ type: UPDATE_MARKED, payload });
}

export const updateComplete = payload => {
    return Dispatcher.dispatch({ type: UPDATE_COMPLETE, payload });
}

