import {
    SET_HABIT,
    DELETE_HABIT
} from '../constants';
import Client from '../../Client';

export const setHabit = habit => ({
    type: SET_HABIT,
    habit
});

export const deleteHabit = () => ({
    type: DELETE_HABIT
});

// Async Actions
export const getHabitAsync = (id, setHabitPresent) => dispatch => {
    Client.getHabit(id)
        .then(Client.parseJSON)
        .then(data => {
            if (data.message === undefined) {
                dispatch(setHabit(data));
            }
            setHabitPresent();
        })
};