import {
    SET_TRACKER,
    DELETE_TRACKER
} from '../contstants';

export const setTracker = tracker => ({
    type: SET_TRACKER,
    tracker
});

export const deleteTracker = () => ({
    type: DELETE_TRACKER
});
