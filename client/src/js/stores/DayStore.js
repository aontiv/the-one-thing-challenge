import Dispatcher from '../Dispatcher';
import { ReduceStore } from 'flux/utils';
import TrackerStore from './TrackerStore';
import { RESET } from '../actions/constants';
import { LOAD_STATE } from '../actions/constants';
import { arrayOfDaysInTracker } from '../utils/utilities';
import {
    UPDATE_NOTE,
    UPDATE_MARKED,
    UPDATE_COMPLETE,
    UPDATE_SELECTED,
    SET_INITIAL_DAYS,
    UPDATE_NOTE_SUBMITTED
} from '../actions/day/constants';

class DayStore extends ReduceStore {
    constructor() {
        super(Dispatcher);
    }

    getInitialState() {
        return [];
    }

    loadState(state, days) {
        state = JSON.parse(days.days);
        return [ ...state ];
    }

    reset(state) {
        return [];
    }

    setInitialDays(state) {
        return arrayOfDaysInTracker(state).map((day, index) => {
            return this.createDay(day, index);
        });
    }

    createDay(day, index) {
        return {
            day,
            note: '',
            marked: false,
            id: `D_${day}`,
            completed: false,
            noteSubmitted: false,
            selected: TrackerStore.getState().currentDay === index ? true : false,
        }
    }

    updateSelected(state, id) {
        return state.map(day => {
            if (day.id === id) {
                day.selected = true;
            } else {
                day.selected = false;
            }
            return day;
        });
    }

    updateNote(state, id, note) {
        return state.map(day => {
            if (day.id === id) {
                day.note = note;
            }
            return day;
        })
    }

    updateNoteSubmitted(state, id, value) {
        return state.map(day => {
            if (day.id === id) {
                day.noteSubmitted = value;
            }
            return day;
        })
    }

    updateMarked(state, id, value) {
        return state.map(day => {
            if (day.id === id) {
                day.marked = value;
            }
            return day;
        })
    }

    updateComplete(state, id, value) {
        return state.map(day => {
            if (day.id === id) {
                day.completed = value;
            }
            return day;
        })
    }

    reduce(state, action) {
        let nextState;

        switch(action.type) {
            case LOAD_STATE:
                nextState = this.loadState(state, action.payload.days);
                return nextState;
            case RESET:
                nextState = this.reset(state);
                return nextState;
            case UPDATE_COMPLETE:
                nextState = this.updateComplete(state, action.payload.id, action.payload.value);
                return nextState;
            case UPDATE_MARKED:
                nextState = this.updateMarked(state, action.payload.id, action.payload.value);
                return nextState;
            case UPDATE_NOTE:
                nextState = this.updateNote(state, action.payload.id, action.payload.note);
                return nextState;
            case UPDATE_NOTE_SUBMITTED:
                nextState = this.updateNoteSubmitted(state, action.payload.id, action.payload.value);
                return nextState;
            case SET_INITIAL_DAYS:
                nextState = this.setInitialDays(state);
                return nextState;
            case UPDATE_SELECTED:
                nextState = this.updateSelected(state, action.payload.id);
                return nextState;
            default:
                return state;
        }
    }
}

export default new DayStore();
