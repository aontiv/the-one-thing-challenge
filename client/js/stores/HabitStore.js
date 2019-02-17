import Dispatcher from '../Dispatcher';
import { ReduceStore } from 'flux/utils';
import { RESET } from '../actions/constants';
import { LOAD_STATE } from '../actions/constants';
import { SET_NAME, SET_CATEGORY } from '../actions/habit/constants';

class HabitStore extends ReduceStore {
    constructor() {
        super(Dispatcher);
    }

    getInitialState() {
        return {
            name: '',
            category: 'Personal Life',
        }
    }

    loadState(state, habit) {
        return { ...state, ...habit };
    }

    reset() {
        return {
            name: '',
            category: 'Personal Life',
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
            case LOAD_STATE:
                nextState = this.loadState(state, action.payload.habit);
                return nextState;
            case RESET:
                nextState = this.reset();
                return nextState;
            case SET_NAME:
                nextState = this.setName(state, action.payload.name);
                return nextState;
            case SET_CATEGORY:
                nextState = this.setCategory(state, action.payload.category);
                return nextState;
            default:
                return state;
        }
    }
}

export default new HabitStore();
