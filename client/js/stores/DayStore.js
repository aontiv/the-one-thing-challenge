import Dispatcher from '../Dispatcher';
import { ReduceStore } from 'flux/utils';

class DayStore extends ReduceStore {
    constructor() {
        super(Dispatcher);
    }

    getInitialState() {
        return [];
    }

    reduce(state, action) {
        switch(action.type) {
            default:
                return state;
        }
    }
}

export default new DayStore();
