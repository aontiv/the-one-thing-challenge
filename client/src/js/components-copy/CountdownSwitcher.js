import moment from "moment";
import React, { Component, Fragment } from "react";

import Motivation from "./Motivation";
import Countdown from "./Countdown";
import DaysOverview from "./DaysOverview";
import HabitCard from "./HabitCard";

class CountdownSwitcher extends Component {
    state = {
        dayList: [
            {
                dayNumber: "1",
                isComplete: false,
                isIncomplete: false,
                noteText: "",
                editNote: false,
                selectedDay: false
            },
            {
                dayNumber: "2",
                isComplete: false,
                isIncomplete: false,
                noteText: "",
                editNote: false,
                selectedDay: false
            },
            {
                dayNumber: "3",
                isComplete: false,
                isIncomplete: false,
                noteText: "",
                editNote: false,
                selectedDay: false
            },
            {
                dayNumber: "4",
                isComplete: false,
                isIncomplete: false,
                noteText: "",
                editNote: false,
                selectedDay: false
            },
            {
                dayNumber: "5",
                isComplete: false,
                isIncomplete: false,
                noteText: "",
                editNote: false,
                selectedDay: false
            },
            {
                dayNumber: "6",
                isComplete: false,
                isIncomplete: false,
                noteText: "",
                editNote: false,
                selectedDay: false
            },
            {
                dayNumber: "7",
                isComplete: false,
                isIncomplete: false,
                noteText: "",
                editNote: false,
                selectedDay: false
            },
            {
                dayNumber: "8",
                isComplete: false,
                isIncomplete: false,
                noteText: "",
                editNote: false,
                selectedDay: false
            },
            {
                dayNumber: "9",
                isComplete: false,
                isIncomplete: false,
                noteText: "",
                editNote: false,
                selectedDay: false
            },
            {
                dayNumber: "10",
                isComplete: false,
                isIncomplete: false,
                noteText: "",
                editNote: false,
                selectedDay: false
            },
            {
                dayNumber: "11",
                isComplete: false,
                isIncomplete: false,
                noteText: "",
                editNote: false,
                selectedDay: false
            },
            {
                dayNumber: "12",
                isComplete: false,
                isIncomplete: false,
                noteText: "",
                editNote: false,
                selectedDay: false
            },
            {
                dayNumber: "13",
                isComplete: false,
                isIncomplete: false,
                noteText: "",
                editNote: false,
                selectedDay: false
            },
            {
                dayNumber: "14",
                isComplete: false,
                isIncomplete: false,
                noteText: "",
                editNote: false,
                selectedDay: false
            },
            {
                dayNumber: "15",
                isComplete: false,
                isIncomplete: false,
                noteText: "",
                editNote: false,
                selectedDay: false
            },
            {
                dayNumber: "16",
                isComplete: false,
                isIncomplete: false,
                noteText: "",
                editNote: false,
                selectedDay: false
            },
            {
                dayNumber: "17",
                isComplete: false,
                isIncomplete: false,
                noteText: "",
                editNote: false,
                selectedDay: false
            },
            {
                dayNumber: "18",
                isComplete: false,
                isIncomplete: false,
                noteText: "",
                editNote: false,
                selectedDay: false
            },
            {
                dayNumber: "19",
                isComplete: false,
                isIncomplete: false,
                noteText: "",
                editNote: false,
                selectedDay: false
            },
            {
                dayNumber: "20",
                isComplete: false,
                isIncomplete: false,
                noteText: "",
                editNote: false,
                selectedDay: false
            },
            {
                dayNumber: "21",
                isComplete: false,
                isIncomplete: false,
                noteText: "",
                editNote: false,
                selectedDay: false
            },
            {
                dayNumber: "22",
                isComplete: false,
                isIncomplete: false,
                noteText: "",
                editNote: false,
                selectedDay: false
            },
            {
                dayNumber: "23",
                isComplete: false,
                isIncomplete: false,
                noteText: "",
                editNote: false,
                selectedDay: false
            },
            {
                dayNumber: "24",
                isComplete: false,
                isIncomplete: false,
                noteText: "",
                editNote: false,
                selectedDay: false
            },
            {
                dayNumber: "25",
                isComplete: false,
                isIncomplete: false,
                noteText: "",
                editNote: false,
                selectedDay: false
            },
            {
                dayNumber: "26",
                isComplete: false,
                isIncomplete: false,
                noteText: "",
                editNote: false,
                selectedDay: false
            },
            {
                dayNumber: "27",
                isComplete: false,
                isIncomplete: false,
                noteText: "",
                editNote: false,
                selectedDay: false
            },
            {
                dayNumber: "28",
                isComplete: false,
                isIncomplete: false,
                noteText: "",
                editNote: false,
                selectedDay: false
            },
            {
                dayNumber: "29",
                isComplete: false,
                isIncomplete: false,
                noteText: "",
                editNote: false,
                selectedDay: false
            },
            {
                dayNumber: "30",
                isComplete: false,
                isIncomplete: false,
                noteText: "",
                editNote: false,
                selectedDay: false
            },
            {
                dayNumber: "31",
                isComplete: false,
                isIncomplete: false,
                noteText: "",
                editNote: false,
                selectedDay: false
            },
            {
                dayNumber: "32",
                isComplete: false,
                isIncomplete: false,
                noteText: "",
                editNote: false,
                selectedDay: false
            },
            {
                dayNumber: "33",
                isComplete: false,
                isIncomplete: false,
                noteText: "",
                editNote: false,
                selectedDay: false
            },
            {
                dayNumber: "34",
                isComplete: false,
                isIncomplete: false,
                noteText: "",
                editNote: false,
                selectedDay: false
            },
            {
                dayNumber: "35",
                isComplete: false,
                isIncomplete: false,
                noteText: "",
                editNote: false,
                selectedDay: false
            },
            {
                dayNumber: "36",
                isComplete: false,
                isIncomplete: false,
                noteText: "",
                editNote: false,
                selectedDay: false
            },
            {
                dayNumber: "37",
                isComplete: false,
                isIncomplete: false,
                noteText: "",
                editNote: false,
                selectedDay: false
            },
            {
                dayNumber: "38",
                isComplete: false,
                isIncomplete: false,
                noteText: "",
                editNote: false,
                selectedDay: false
            },
            {
                dayNumber: "39",
                isComplete: false,
                isIncomplete: false,
                noteText: "",
                editNote: false,
                selectedDay: false
            },
            {
                dayNumber: "40",
                isComplete: false,
                isIncomplete: false,
                noteText: "",
                editNote: false,
                selectedDay: false
            },
            {
                dayNumber: "41",
                isComplete: false,
                isIncomplete: false,
                noteText: "",
                editNote: false,
                selectedDay: false
            },
            {
                dayNumber: "42",
                isComplete: false,
                isIncomplete: false,
                noteText: "",
                editNote: false,
                selectedDay: false
            },
            {
                dayNumber: "43",
                isComplete: false,
                isIncomplete: false,
                noteText: "",
                editNote: false,
                selectedDay: false
            },
            {
                dayNumber: "44",
                isComplete: false,
                isIncomplete: false,
                noteText: "",
                editNote: false,
                selectedDay: false
            },
            {
                dayNumber: "45",
                isComplete: false,
                isIncomplete: false,
                noteText: "",
                editNote: false,
                selectedDay: false
            },
            {
                dayNumber: "46",
                isComplete: false,
                isIncomplete: false,
                noteText: "",
                editNote: false,
                selectedDay: false
            },
            {
                dayNumber: "47",
                isComplete: false,
                isIncomplete: false,
                noteText: "",
                editNote: false,
                selectedDay: false
            },
            {
                dayNumber: "48",
                isComplete: false,
                isIncomplete: false,
                noteText: "",
                editNote: false,
                selectedDay: false
            },
            {
                dayNumber: "49",
                isComplete: false,
                isIncomplete: false,
                noteText: "",
                editNote: false,
                selectedDay: false
            },
            {
                dayNumber: "50",
                isComplete: false,
                isIncomplete: false,
                noteText: "",
                editNote: false,
                selectedDay: false
            },
            {
                dayNumber: "51",
                isComplete: false,
                isIncomplete: false,
                noteText: "",
                editNote: false,
                selectedDay: false
            },
            {
                dayNumber: "52",
                isComplete: false,
                isIncomplete: false,
                noteText: "",
                editNote: false,
                selectedDay: false
            },
            {
                dayNumber: "53",
                isComplete: false,
                isIncomplete: false,
                noteText: "",
                editNote: false,
                selectedDay: false
            },
            {
                dayNumber: "54",
                isComplete: false,
                isIncomplete: false,
                noteText: "",
                editNote: false,
                selectedDay: false
            },
            {
                dayNumber: "55",
                isComplete: false,
                isIncomplete: false,
                noteText: "",
                editNote: false,
                selectedDay: false
            },
            {
                dayNumber: "56",
                isComplete: false,
                isIncomplete: false,
                noteText: "",
                editNote: false,
                selectedDay: false
            },
            {
                dayNumber: "57",
                isComplete: false,
                isIncomplete: false,
                noteText: "",
                editNote: false,
                selectedDay: false
            },
            {
                dayNumber: "58",
                isComplete: false,
                isIncomplete: false,
                noteText: "",
                editNote: false,
                selectedDay: false
            },
            {
                dayNumber: "59",
                isComplete: false,
                isIncomplete: false,
                noteText: "",
                editNote: false,
                selectedDay: false
            },
            {
                dayNumber: "60",
                isComplete: false,
                isIncomplete: false,
                noteText: "",
                editNote: false,
                selectedDay: false
            },
            {
                dayNumber: "61",
                isComplete: false,
                isIncomplete: false,
                noteText: "",
                editNote: false,
                selectedDay: false
            },
            {
                dayNumber: "62",
                isComplete: false,
                isIncomplete: false,
                noteText: "",
                editNote: false,
                selectedDay: false
            },
            {
                dayNumber: "63",
                isComplete: false,
                isIncomplete: false,
                noteText: "",
                editNote: false,
                selectedDay: false
            },
            {
                dayNumber: "64",
                isComplete: false,
                isIncomplete: false,
                noteText: "",
                editNote: false,
                selectedDay: false
            },
            {
                dayNumber: "65",
                isComplete: false,
                isIncomplete: false,
                noteText: "",
                editNote: false,
                selectedDay: false
            },
            {
                dayNumber: "66",
                isComplete: false,
                isIncomplete: false,
                noteText: "",
                editNote: false,
                selectedDay: false
            }
        ]
    };

    updateSelectedDay = dayNumber => {
        const newDayList = this.state.dayList.map(day => {
            if (day.dayNumber === dayNumber) {
                day.selectedDay = true;
            }
            else {
                day.selectedDay = false;
            }
            return day;
        });
        this.setState({ dayList: newDayList });
    };

    updateIsIncomplete = (dayNumber, value) => {
        const newDayList = this.state.dayList.map(day => {
            if (day.dayNumber === dayNumber) {
                day.isIncomplete = value;
                day.isComplete = false;
            }
            return day;
        });
        this.setState({ dayList: newDayList });
    };

    updateIsComplete = (dayNumber, value) => {
        const newDayList = this.state.dayList.map(day => {
            if (day.dayNumber === dayNumber) {
                day.isComplete = value;
                day.isIncomplete = false;
            }
            return day;
        });
        this.setState({ dayList: newDayList });
    };

    deleteNoteText = dayNumber => {
        const newDayList = this.state.dayList.map(day => {
            if (day.dayNumber === dayNumber) {
                day.noteText = "";
            }
            return day;
        });
        this.setState({ dayList: newDayList });
    };

    updateEditNote = (dayNumber, value) => {
        const newDayList = this.state.dayList.map(day => {
            if (day.dayNumber === dayNumber) {
                day.editNote = value;
            }
            return day;
        });
        this.setState({ dayList: newDayList });
    };

    updateNoteText = (dayNumber, noteText) => {
        const newDayList = this.state.dayList.map(day => {
            if (day.dayNumber === dayNumber) {
                day.noteText = noteText;
                day.editNote = false;
            }
            return day;
        });
        this.setState({ dayList: newDayList });
    };

    render() {
        const isBeforeStartDate = moment().isBefore(this.props.startDate, "days");

        return (
            isBeforeStartDate ? (
                <Fragment>
                    <Motivation />
                    <Countdown
                        startDate={this.props.startDate}
                    />
                </Fragment>
            ) : (
                <Fragment>
                    <DaysOverview
                        dayList={this.state.dayList}
                    />
                    <HabitCard
                        dayList={this.state.dayList}
                        updateNoteText={this.updateNoteText}
                        updateEditNote={this.updateEditNote}
                        deleteNoteText={this.deleteNoteText}
                        updateIsComplete={this.updateIsComplete}
                        updateIsIncomplete={this.updateIsIncomplete}
                        startDate={this.props.startDate}
                        updateSelectedDay={this.updateSelectedDay}
                    />
                </Fragment>
            )
        );
    }
}

export default CountdownSwitcher;
