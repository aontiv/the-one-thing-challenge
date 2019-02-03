import Dispatcher from '../Dispatcher';
import { ReduceStore } from 'flux/utils';
import { SET_INITIAL_DAYS } from '../actions/day/constants';
import { log, arrayOfDaysInTracker } from '../utils/utilities';

class DayStore extends ReduceStore {
    constructor() {
        super(Dispatcher);
    }

    getInitialState() {
        return [];
    }

    setInitialDays(state) {
        return arrayOfDaysInTracker(state).map(day => {
            return this.createDay(day);
        });
    }

    createDay(day) {
        return {
            day,
            note: '',
            marked: false,
            id: `D_${day}`,
            selected: false,
            completed: false,
        }
    }

    reduce(state, action) {
        let nextState;

        switch(action.type) {
            case SET_INITIAL_DAYS:
                nextState = this.setInitialDays(state);
                log('DayStore', state, action, nextState);
                return nextState;
            default:
                return state;
        }
    }
}

export default new DayStore();
