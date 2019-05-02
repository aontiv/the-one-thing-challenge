import Dispatcher from '../Dispatcher';
import { ReduceStore } from 'flux/utils';
import { RESET } from '../actions/constants';
import { LOAD_STATE } from '../actions/constants';
import { calculateCurrentDay } from '../utils/utilities';
import {
    SET_DATE,
    SET_SUBMITTED,
    SET_CURRENT_DAY,
    SET_INITIAL_STARTDATE
} from '../actions/tracker/constants';

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

    loadState(state, tracker) {
        const currentDay = calculateCurrentDay(tracker.startDate);
        return { ...state, ...tracker, currentDay };
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
            case LOAD_STATE:
                nextState = this.loadState(state, action.payload.tracker)
                return nextState;
            case RESET:
                nextState = this.reset(state);
                return nextState;
            case SET_INITIAL_STARTDATE:
                nextState = this.setInitialStartDate(state, action.payload.date);
                return nextState;
            case SET_DATE:
                nextState = this.setDate(state, action.payload.date);
                return nextState;
            case SET_SUBMITTED:
                nextState = this.setSubmitted(state, action.payload.submitted);
                return nextState;
            case SET_CURRENT_DAY:
                nextState = this.setCurrentDay(state, action.payload.currentDay);
                return nextState;
            default:
                return state;
        }
    }
}

export default new TrackerStore();
