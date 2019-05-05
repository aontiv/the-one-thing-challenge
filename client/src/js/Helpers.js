import moment from "moment";

const Helpers = () => {
    // Calls generateMonthList with the current month index
    // if the current year is the same as the year of the date
    // paramater
    const monthList = date => {
        if (date.year() === moment().year()) {
            return generateMonthList(date.month())
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
            return generateDayList(date, date.date());
        }
        else {
            return generateDayList(date);
        }
    };
  
    // Returns an two-dimensional array whose first index is the day index,
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

    return {
        dayList,
        monthList
    };
};

export default Helpers();
