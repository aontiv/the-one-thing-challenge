import uuid from 'uuid';
import moment from 'moment';

const Helpers = () => {
    // Calls generateMonthList with the current month index
    // if the current year is the same as the year of the date
    // paramater
    const monthList = date => {
        if (date.year() === moment().year()) {
            return generateMonthList(moment().month())
        }
        else {
            return generateMonthList();
        }
    };

  // Returns an two-dimensional array whose first index is the month index,
  // and whose second index is either true or false indicating whether or not
  // that particular month should be visually displayed as "disabled"
    const generateMonthList = (monthIndex = undefined) => {
        let monthList = [];

        for (let i = 0; i < 12; i++) {
            if (monthIndex !== undefined && i < monthIndex) {
                monthList.push([i, true]);
            }
            else {
                monthList.push([i, false]);
            }
        }

        return monthList;
    };

    // Calls generateDayList with the date paramater and the current
    // day if the current year and month are the same as the year and month
    // of the date paramater. Otherwise, it callse generateDayList with
    // the date only.
    const dayList = date => {
        if (date.year() === moment().year() && date.month() === moment().month()) {
            return generateDayList(date, moment().date());
        }
        else {
            return generateDayList(date);
        }
    };

    // Returns a two-dimensional array whose first index is the day index,
    // and whose second index is either true or false indicating whether or not
    // that particular day should be visually displayed as "disabled"
    const generateDayList = (date, dayNumber = undefined) => {
        let dayList = [];

        for (let i = 0; i < date.daysInMonth(); i++) {
            if (dayNumber !== undefined && (i + 1) < dayNumber) {
                dayList.push([i + 1, true]);
            }
            else {
                dayList.push([i + 1, false]);
            }
        }

        return dayList;
    };

    // Returns an array with two elements, the current year and
    // the following year.
    const yearList = () => {
        let yearList = [];
        let year = moment().year();

        for (let i = 0; i < 2; i++) {
            yearList.push(String(year));
            year++;
        }

        return yearList;
    };

    // If the date object is an invalid date, returns the same month and year, but the day
    // reverts to the last day of that month.
    // e.g. { month: "4", day: "31", year: "2019" }  -> { month: "4", day: "30", year: "2019" }
    // If the date object is valid but is before the current date, returns the current date.
    // If the date object is valid and is or is after the current date, returns current date.
    const validDate = date => {
        let dateObject = moment(`${date.month}-${date.day}-${date.year}`, 'M-D-YYYY'),
            isValidDate = dateObject.isValid(),
            isBefore = moment(dateObject, 'days').isBefore(moment());

        if (!isValidDate) {
            const daysInMonth = moment(`${date.month}-${date.year}`, 'M-YYYY').daysInMonth();
            isBefore = moment(`${date.month}-${daysInMonth}-${date.year}`, 'M-D-YYYY', 'days').isBefore(moment());

            return isBefore
                ? { month: moment().month() + 1, day: moment().date(), year: moment().year() }
                : { ...date, day: daysInMonth };
        }
        else if(isBefore) {
            return { month: moment().month() + 1, day: moment().date(), year: moment().year() };
        }
        else {
            return date;
        }
    };

    const constructUser = user => ({
        _id: uuid.v4(),
        username: user.username,
        password: user.password
    });

    const constructHabit = (habit, id) => ({
        category: habit.category,
        description: habit.description,
        _id: uuid.v4(),
        userId: id
    });

    const constructTracker = (date, id) => ({
        date,
        _id: uuid.v4(),
        userId: id
    });

    const constructDayList = id => {
        const dayList = [];

        for(let i = 0; i < 66; i++) {
            dayList.push({
                complete: false,
                day: (i + 1),
                incomplete: false,
                note_text: ''
            });
        }

        return { userId: id, dayList };
    };

    return {
        constructDayList,
        constructHabit,
        constructTracker,
        constructUser,
        dayList,
        monthList,
        validDate,
        yearList
    };
};

export default Helpers();
