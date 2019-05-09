import moment from "moment";
import Client from "../Client";
import React, { Component, Fragment } from "react";

import Motivation from "./Motivation";
import Countdown from "./Countdown";
import DaysOverview from "./DaysOverview";
import HabitCard from "./HabitCard";
import CurrentDay from "./CurrentDay";

class CountdownSwitcher extends Component {
    componentDidMount() {
        let selectedDay = moment().diff(this.props.startDate, "days");

        if (selectedDay >= 65) {
            selectedDay = 65;
        }

        this.updateSelectedDay(String(selectedDay + 1))
    }

    updateSelectedDay = dayNumber => {
        const newDayList = this.props.dayList.map(day => {
            if (day.dayNumber === dayNumber) {
                day.selectedDay = true;
            }
            else {
                day.selectedDay = false;
            }
            day.editNote = false;
            return day;
        });
        this.props.updateDayList(newDayList);
    };

    updateIsIncomplete = (dayNumber, value) => {
        const newDayList = this.props.dayList.map(day => {
            if (day.dayNumber === dayNumber) {
                day.isIncomplete = value;
                day.isComplete = false;
            }
            return day;
        });
        this.props.updateDayList(newDayList);

        Client.updateIsIncomplete(this.props.trackerId, dayNumber);
    };

    updateIsComplete = (dayNumber, value) => {
        const newDayList = this.props.dayList.map(day => {
            if (day.dayNumber === dayNumber) {
                day.isComplete = value;
                day.isIncomplete = false;
            }
            return day;
        });
        this.props.updateDayList(newDayList);

        Client.updateIsComplete(this.props.trackerId, dayNumber);
    };

    deleteNoteText = dayNumber => {
        const newDayList = this.props.dayList.map(day => {
            if (day.dayNumber === dayNumber) {
                day.noteText = "";
            }
            return day;
        });
        this.props.updateDayList(newDayList);

        Client.deleteNote(this.props.trackerId, dayNumber);
    };

    updateEditNote = (dayNumber, value) => {
        const newDayList = this.props.dayList.map(day => {
            if (day.dayNumber === dayNumber) {
                day.editNote = value;
            }
            return day;
        });
        this.props.updateDayList(newDayList);
    };

    updateNoteText = (dayNumber, noteText) => {
        const newDayList = this.props.dayList.map(day => {
            if (day.dayNumber === dayNumber) {
                day.noteText = noteText;
                day.editNote = false;
            }
            return day;
        });
        this.props.updateDayList(newDayList);

        Client.updateNote(this.props.trackerId, dayNumber, noteText)
    };

    render() {
        const selectedDay = this.props.dayList.find(day => day.selectedDay);
        const isBeforeStartDate = moment().isBefore(this.props.startDate, "days");

        return (
            !isBeforeStartDate ? (
                <Fragment>
                    <CurrentDay
                        startDate={this.props.startDate}
                        updateSelectedDay={this.updateSelectedDay}
                    />
                    <DaysOverview
                        dayList={this.props.dayList}
                        updateSelectedDay={this.updateSelectedDay}
                    />
                    <HabitCard
                        selectedDay={selectedDay}
                        updateNoteText={this.updateNoteText}
                        updateEditNote={this.updateEditNote}
                        deleteNoteText={this.deleteNoteText}
                        updateIsComplete={this.updateIsComplete}
                        updateIsIncomplete={this.updateIsIncomplete}
                    />
                </Fragment>
            ) : (
                <Fragment>
                    <Motivation />
                    <Countdown
                        startDate={this.props.startDate}
                    />
                </Fragment> 
            )
        );
    }
}

export default CountdownSwitcher;
