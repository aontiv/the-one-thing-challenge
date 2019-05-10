import {
    SET_USER,
    DELETE_USER
} from "../constants";

export const userReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_USER:
            return { ...action.user };
        case DELETE_USER:
            return {};
        default:
            return state;
    }
};
