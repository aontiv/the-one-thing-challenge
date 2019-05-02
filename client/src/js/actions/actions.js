import { RESET } from './constants';
import Dispatcher from '../Dispatcher';
import DayStore from '../stores/DayStore';
import UserStore from '../stores/UserStore';
import HabitStore from '../stores/HabitStore';
import TrackerStore from '../stores/TrackerStore';

export const reset = _ => {
    return Dispatcher.dispatch({ type: RESET });
}

export const setDatabaseTables = () => {
    const id = UserStore.getState().id;

    const dayState = DayStore.getState();
    const habitState = HabitStore.getState();
    const trackerState = TrackerStore.getState();

    fetch(
        '/add_tracker',
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id, tracker: trackerState })
        }
    )
    .then(() => {
        fetch(
            '/add_habit',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id, habit: habitState })
            }
        )
        .then(() => {
            fetch(
                '/add_days',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ id, days: dayState })
                }
            )
        })

    })
}

export const resetDatabaseTables = () => {
    const id = UserStore.getState().id;

    fetch(`/delete_habit/${id}`, { method: 'DELETE' })
        .then(() => {
            fetch(`/delete_tracker/${id}`, { method: 'DELETE' })
                .then(() => {
                    fetch(`./delete_days_row/${id}`, { method: 'DELETE' })
                })
        })
}
