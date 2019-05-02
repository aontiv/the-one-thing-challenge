import React from 'react';
import Dispatcher from '../Dispatcher';
import { ReduceStore } from 'flux/utils';
import { ADD_USER, LOGOUT } from '../actions/user/constants';

class UserStore extends ReduceStore {
    constructor() {
        super(Dispatcher);
    }

    getInitialState() {
        return {
            id: 1,
            username: '',
            loggedIn: false
        }
    }

    logout(state) {
        return { ...state, loggedIn: false };
    }

    addUser(state, user) {
        return { ...state, ...user, loggedIn: true };
    }

    reduce(state, action) {
        let nextState;

        switch(action.type) {
            case LOGOUT:
                nextState = this.logout(state);
                return nextState;
            case ADD_USER:
                nextState = this.addUser(state, action.payload.user);
                return nextState;
            default:
                return state;
        }
    }
}

export default new UserStore();
