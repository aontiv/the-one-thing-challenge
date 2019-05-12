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
export const getHabitAsync = id => dispatch => {
    return Client.getHabit(id)
        .then(Client.parseJSON)
        .then(data => {
            if (data.message === undefined) {
                dispatch(setHabit(data));
            }
        })
};

export const loadHabitAsync = habit => dispatch => {
    dispatch(setHabit(habit));

    return Client.addHabit(habit);
};

export const resetHabitAsync = id => dispatch => {
    dispatch(deleteHabit());

    return Client.deleteHabit(id);
};
