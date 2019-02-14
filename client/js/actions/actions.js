import { RESET } from './constants';
import Dispatcher from '../Dispatcher';
import DayStore from '../stores/DayStore';
import UserStore from '../stores/UserStore';
import HabitStore from '../stores/HabitStore';
import TrackerStore from '../stores/TrackerStore';

export const reset = _ => {
    return Dispatcher.dispatch({ type: RESET });
}

// Nested Fetch statement to initialize the database tables
// TODO: Catch Errors
export const setDatabaseTables = () => {
    const id = UserStore.getState().id;
    
    const dayState = DayStore.getState();
    const habitState = HabitStore.getState();
    const trackerState = TrackerStore.getState();

    fetch('/add_tracker', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id, tracker: trackerState }) })
        .then(resp => resp.json())
        .then(() => {
            fetch('/add_habit', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id, habit: habitState }) })
                .then(resp => resp.json())
                .then(() => {
                    fetch('/add_days', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id, days: dayState }) })
                    .then(resp => resp.json())
                    // .then(data => console.log(data))
                })

        })
}

export const updateDatabaseTables = () => {
    const id = UserStore.getState().id;

    const dayState = DayStore.getState();
    const habitState = HabitStore.getState();
    const trackerState = TrackerStore.getState();

    fetch('/update_habit', { method: 'UPDATE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id, habit: habitState }) })
        .then(resp => resp.json())
        .then(() => {
            fetch('/update_tracker', { method: 'UPDATE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id, tracker: trackerState }) })
                .then(resp => resp.json())
                .then(() => {
                    fetch('./update_days', { method: 'UPDATE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id, days: dayState }) })
                        .then(resp => resp.json())
                        .then(data => console.log(data))
                })
        })
}
