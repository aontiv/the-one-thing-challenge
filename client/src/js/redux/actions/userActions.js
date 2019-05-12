import {
    SET_USER,
    DELETE_USER
} from '../constants';
import Client from '../../Client';

// 'user' shape: { id, username }
export const setUser = user => ({
    type: SET_USER,
    user
});

export const deleteUser = () => ({
    type: DELETE_USER
});

// Async Actions
export const loginAsync = (user, success, failure) => dispatch => {
    Client.login(user)
        .then(Client.handleResponse)
        .then(data => {
            success(data);
            dispatch(setUser(data));
        })
        .catch(failure)
};

export const registerAsync = (user, success, failure) => dispatch => {
    Client.register(user)
        .then(Client.handleResponse)
        .then(data => {
            success(data);
            dispatch(setUser(data));
        })
        .catch(failure)
};
