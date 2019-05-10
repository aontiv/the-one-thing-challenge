import {
    SET_DAY_LIST,
    DELETE_DAY_LIST
} from '../contstants';

export const setDayList = dayList => ({
    type: SET_DAY_LIST,
    dayList
});

export const deleteDayList = () => ({
    type: DELETE_DAY_LIST
});
