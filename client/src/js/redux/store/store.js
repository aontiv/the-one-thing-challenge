import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import { dayListReducer } from '../reducers/dayListReducer';
import { habitReducer } from '../reducers/habitReducer';
import { trackerReducer } from '../reducers/trackerReducer';
import { userReducer } from '../reducers/userReducer';

const reducer = combineReducers({
    dayList: dayListReducer,
    habit: habitReducer,
    tracker: trackerReducer,
    user: userReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
