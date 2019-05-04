import moment from "moment";

const Seed = () => {
    const createDays = startDate => {
        let dayList = [];
        for (let i = 0; i < 66; i++) {
            dayList.push({
                dayNumber: `${i + 1}`,
                isComplete: false,
                noteId: `${i + 1}`,
                noteText: `Note ${i + 1}`,
                editNote: false,
                selectedDay: (moment().diff(moment(startDate), "days") === i) || (moment().diff(moment(startDate)) > 65 && i === 65) ? true : false
            });
        }
        return dayList;
    };
 
    return {
        userId: "xxxx",
        username: "testuser",
        isLoggedIn: true,
        habitId: "xxxx",
        habitDescription: "Go to the gym",
        categoryName: "Financial Life",
        categoryList: [ "Spiritual Life", "Physical Health", "Personal Life", "Key Relationships", "Jobs", "Business", "Financial Life" ],
        startDate: 1556919148350,
        dayList: createDays(1556919148350)
    }
};

export default Seed();
