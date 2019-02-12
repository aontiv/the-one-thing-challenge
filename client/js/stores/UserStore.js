import React from 'react';
import Dispatcher from '../Dispatcher';
import { ReduceStore } from 'flux/utils';
import { log } from '../utils/utilities';
import { REGISTER } from '../actions/user/constants';

class UserStore extends ReduceStore {
    constructor() {
        super(Dispatcher);
    }

    getInitialState() {
        return {
            username: '',
            password: '',
            loggedIn: false
        }
    }

    register(state) {
        return { ...state, loggedIn: true };
    }

    reduce(state, action) {
        let nextState;

        switch(action.type) {
            case REGISTER:
                nextState = this.register(state);
                log('UserStore', state, action, nextState);
                return nextState;
            default:
                return state;
        }
    }
}

export default new UserStore();
