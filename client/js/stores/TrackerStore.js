import Dispatcher from '../Dispatcher';
import { ReduceStore } from 'flux/utils';
import { log } from '../utils/utilities';
import { RESET } from '../actions/constants';
import { SET_CURRENT_DAY, SET_SUBMITTED, SET_INITIAL_STARTDATE, SET_DATE } from '../actions/tracker/constants';

class TrackerStore extends ReduceStore {
    constructor() {
        super(Dispatcher);
    }

    getInitialState() {
        return {
            length: 66,
            startDate: {},
            currentDay: null,
            submitted: false,
        }
    }

    reset(state) {
        return {
            length: 66,
            startDate: {},
            currentDay: null,
            submitted: false,
        }
    }

    setInitialStartDate(state, date) {
        return { ...state, startDate: date };
    }

    setDate(state, date) {
        return { ...state, startDate: date };
    }

    setSubmitted(state, submitted) {
        return { ...state, submitted };
    }

    setCurrentDay(state, currentDay) {
        return { ...state, currentDay };
    }

    reduce(state, action) {
        let nextState;

        switch(action.type) {
            case RESET:
                nextState = this.reset(state);
                log('TrackerStore', state, action, nextState);
                return nextState;
            case SET_INITIAL_STARTDATE:
                nextState = this.setInitialStartDate(state, action.payload.date);
                log('TrackerStore', state, action, nextState);
                return nextState;
            case SET_DATE:
                nextState = this.setDate(state, action.payload.date);
                log('TrackerStore', state, action, nextState);
                return nextState;
            case SET_SUBMITTED:
                nextState = this.setSubmitted(state, action.payload.submitted);
                log('TrackerStore', state, action, nextState);
                return nextState;
            case SET_CURRENT_DAY:
                nextState = this.setCurrentDay(state, action.payload.currentDay);
                log('TrackerStore', state, action, nextState);
                return nextState;
            default:
                return state;
        }
    }
}

export default new TrackerStore();
