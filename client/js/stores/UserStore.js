import React from 'react';
import Dispatcher from '../Dispatcher';
import { ReduceStore } from 'flux/utils';
import { log } from '../utils/utilities';
import { ADD_USER } from '../actions/user/constants';

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

    addUser(state, user) {
        return { ...state, ...user };
    }

    reduce(state, action) {
        let nextState;

        switch(action.type) {
            case ADD_USER:
                nextState = this.addUser(state, action.payload.user);
                log('UserStore', state, action, nextState);
                return nextState;
            default:
                return state;
        }
    }
}

export default new UserStore();