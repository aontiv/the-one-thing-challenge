import {
    SET_TRACKER,
    DELETE_TRACKER
} from "../constants";

export const trackerReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_TRACKER:
            return { ...action.tracker };
        case DELETE_TRACKER:
            return {};
        default:
            return state;
    }
};
