import {
    SET_COMPLETE,
    SET_INCOMPLETE,
    SET_NOTE_TEXT,
    DELETE_NOTE_TEXT
} from '../contstants';

export const setComplete = id => ({
    type: SET_COMPLETE,
    id
});

export const setIncomplete = id => ({
    type: SET_INCOMPLETE,
    id
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
