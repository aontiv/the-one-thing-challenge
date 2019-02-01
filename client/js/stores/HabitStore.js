import Dispatcher from '../Dispatcher';
import { log } from '../utils/utilities';
import { ReduceStore } from 'flux/utils';
import { SET_NAME, SET_CATEGORY } from '../actions/habit/constants';

class HabitStore extends ReduceStore {
    constructor() {
        super(Dispatcher);
    }

    getInitialState() {
        return {
            name: '',
            category: '',
        }
    }

    setName(state, name) {
        return { ...state, name };
    }

    setCategory(state, category) {
        return { ...state, category };
    }

    reduce(state, action) {
        let nextState;
        
        switch(action.type) {
            case SET_NAME:
                nextState = this.setName(state, action.payload.name);
                log('HabitStore', state, action, nextState);
                return nextState;
            case SET_CATEGORY:
                nextState = this.setCategory(state, action.payload.category);
                log('HabitStore', state, action, nextState);
                return nextState;
            default:
                return state;
        }
    }
}

export default new HabitStore();
