import {
    SET_HABIT,
    DELETE_HABIT
} from '../constants';

export const habitReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_HABIT:
            return { ...action.habit };
        case DELETE_HABIT:
            return {};
        default:
            return state;
    }
};
