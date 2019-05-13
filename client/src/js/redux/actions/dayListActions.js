import {
    SET_DAY_LIST,
    DELETE_DAY_LIST
} from '../constants';
import Client from '../../Client';

export const setDayList = dayList => ({
    type: SET_DAY_LIST,
    dayList
});

export const deleteDayList = () => ({
    type: DELETE_DAY_LIST
});

// Async Actions
export const getDayListAsync = id => dispatch => {
    return Client.getDayList(id)
        .then(Client.parseJSON)
        .then(data => {
            if (data.message === undefined) {
                dispatch(setDayList(data));
            }
        })
};

export const loadDayListAsync = dayList => dispatch => {
    dispatch(setDayList(dayList.dayList));

    return Client.addDayList(dayList);
};

export const resetDayListAsync = id => dispatch => {
    dispatch(deleteDayList());

    return Client.deleteDayList(id);
};
