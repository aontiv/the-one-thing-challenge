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

export const setNoteText = (day, noteText) => ({
    type: SET_NOTE_TEXT,
    day,
    noteText
});

export const deleteNoteText = day => ({
    type: DELETE_NOTE_TEXT,
    day
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

export const setNoteTextAsync = (userId, day, noteText) => dispatch => {
    dispatch(setNoteText(day, noteText));
    return Client.updateNoteText(userId, day, noteText);
};

export const deleteNoteTextAsync = (userId, day) => dispatch => {
    dispatch(deleteNoteText(day));
    return Client.deleteNoteText(userId, day);
};
