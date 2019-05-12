import {
    SET_COMPLETE,
    SET_INCOMPLETE,
    SET_NOTE_TEXT,
    DELETE_NOTE_TEXT
} from '../constants';

export const dayReducer = (state = [], action) => {
    const day = state.find(day => day.day === action.day);
    const index = state.findIndex(day => day.day === action.day);

    switch (action.type) {
        case SET_COMPLETE:
            return recombineState(state, { ...day, complete: true, incomplete: false }, index);
        case SET_INCOMPLETE:
            return recombineState(state, { ...day, incomplete: true, complete: false }, index);
        case SET_NOTE_TEXT:
            return recombineState(state, { ...day, note_text: action.noteText }, index);
        case DELETE_NOTE_TEXT:
            return recombineState(state, { ...day, note_text: "" }, index);
        default:
            return state;
    }
};

// Utility Function:
// Isolate the logic of recombining state, where
// state is an array of objects.
const recombineState = (state, day, index) => {
    return [
        ...state.slice(0, index),
        day,
        ...state.slice(index + 1)
    ];
};
