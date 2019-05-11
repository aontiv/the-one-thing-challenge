import {
    SET_TRACKER,
    DELETE_TRACKER
} from '../constants';
import Client from '../../Client';

export const setTracker = tracker => ({
    type: SET_TRACKER,
    tracker
});

export const deleteTracker = () => ({
    type: DELETE_TRACKER
});

// Async Actions
export const loadTrackerAsync = tracker => dispatch => {
    dispatch(setTracker(tracker));

    return Client.addTracker(tracker);
};

export const resetTrackerAsync = id => dispatch => {
    dispatch(deleteTracker())

    return Client.deleteTracker(id);
};
