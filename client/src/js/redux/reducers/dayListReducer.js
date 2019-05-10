import {
    SET_DAY_LIST,
    DELETE_DAY_LIST,
    SET_COMPLETE,
    SET_INCOMPLETE,
    SET_NOTE_TEXT,
    DELETE_NOTE_TEXT
} from '../constants';
import { dayReducer } from './dayReducer';

export const dayListReducer = (state = [], action) => {
    switch (action.type) {
        case SET_DAY_LIST:
            return [ ...action.dayList ];
        case DELETE_DAY_LIST:
            return [];
        case SET_COMPLETE:
            return dayReducer(state, action);
        case SET_INCOMPLETE:
            return dayReducer(state, action);
        case SET_NOTE_TEXT:
            return dayReducer(state, action);
        case DELETE_NOTE_TEXT:
            return dayReducer(state, action);
        default:
            return state;
    }
};
