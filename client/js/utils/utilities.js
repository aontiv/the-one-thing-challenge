import { getYear, getDate, getMonth, getDaysInMonth, isThisMonth } from 'date-fns';

export const log = (store, prevState, action, nextState) => {
    console.group(store)
        console.group('Prev. State');
            console.log(prevState);
        console.groupEnd();

        console.group('Action');
            console.log(action.type);
            console.log(action.payload);
        console.groupEnd();

        console.group('Next State');
            console.log(nextState);
        console.groupEnd();
    console.groupEnd();
    return;
}

export const arrayOfMonthsInYear = _ => {
    let months = [];
    for (let i = 0; i < 12; i++) {
        months.push(i);
    }
    return months;
}

export const arrayOfYears = _ => {
    let years = [];
    let year = getYear(new Date());
    for (let i = 0; i < 10; i++) {
        years.push(year);
        year += 1;
    }
    return years;
}

export const arrayOfDaysInMonth = startDate => {
    let days = [];
    const year = getYear(startDate);
    const month = getMonth(startDate);
    const daysInMonth = getDaysInMonth(new Date(year, month));

    for (let i = 0; i < daysInMonth; i++) {
        if (isThisMonth(startDate)) {
            if (i + 1 >= getDate(startDate)) {
                days.push(i + 1);
            } 
        } else {
            days.push(i + 1);
        }
    } 
    return days;
}

export const checkDayVsNextMonthDays = (event, startDate) => {
    const year = getYear(startDate);
    const value = parseInt(event.target.value);
    const day = getDate(startDate) > getDaysInMonth(new Date(year, value)) ? 1 : getDate(new Date());
    return [ year, value, day ];
}