import {
    SET_COMPLETE,
    SET_INCOMPLETE,
    SET_NOTE_TEXT,
    DELETE_NOTE_TEXT
} from '../constants';
import Client from '../../Client';

export const setComplete = day => ({
    type: SET_COMPLETE,
    day
});

export const setIncomplete = day => ({
    type: SET_INCOMPLETE,
    day
});

export const setNoteText = (id, noteText) => ({
    type: SET_NOTE_TEXT,
    id,
    noteText
});

export const deleteNoteText = id => ({
    type: DELETE_NOTE_TEXT,
    id
});

// Async Actions
export const setCompleteAsync = (userId, day) => dispatch => {
    dispatch(setComplete(day));
    return Client.updateComplete(userId, day);
};

export const setIncompleteAsync = (userId, day) => dispatch => {
    dispatch(setIncomplete(day));
    return Client.updateIncomplete(userId, day);
};
