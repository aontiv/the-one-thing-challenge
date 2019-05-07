import moment from "moment";
import Helpers from "../Helpers";
import React, { Component, Fragment } from "react";

class StartDateSelect extends Component {
    componentDidMount() {
        const date = moment();
        this.props.updateState({ hasDate: true, dateFields: { month: String(date.month() + 1), day: String(date.date()), year: String(date.year()) } });
    }

    handleChange = event => {
        const name = event.target.name;
        const value = Number(event.target.value);
        const fields = Helpers.validDate({ ...this.props.fields, [name]: name === "month" ? String(value + 1) : String(value) });

        this.props.updateState({ dateFields: fields });
    };

    getMonthList = date => {
        const monthList = Helpers.monthList(date).map(array => {
            return (
                <option key={`m:${array[0]}`} value={array[0]} disabled={array[1]}>{array[0] + 1}</option>
            )
        });
        return monthList;
    };

    getDayList = date => {
        const dayList = Helpers.dayList(date).map(array => {
            return (
                <option key={`d:${array[0]}`} value={array[0]} disabled={array[1]}>{array[0]}</option>
            )
        });
        return dayList;
    };

    getYearList = date => {
        const yearList = Helpers.yearList(date).map(year => {
            return (
                <option key={`y:${year}`} value={year}>{year}</option>
            )
        });
        return yearList; 
    }

    render() {
        if (this.props.hasDate) {

            const { month, year } = this.props.fields;

            const monthList = this.getMonthList(moment(`${month}-${year}`, "MM-YYYY"));
            const dayList = this.getDayList(moment(`${month}-${year}`, "MM-YYYY"));
            const yearList = this.getYearList(moment(`${month}-${year}`, "MM-YYYY"));

            return (
                <Fragment>
                    <select className="custom-select col-4 mb-1" value={this.props.fields.month - 1} name="month" onChange={this.handleChange}>
                        <option value="" disabled={true}>Month</option>
                        { monthList }
                    </select>
                    <select className="custom-select col-4 mb-1" value={this.props.fields.day} name="day" onChange={this.handleChange}>
                        <option value="" disabled={true}>Day</option>
                        { dayList }
                    </select>
                    <select className="custom-select col-4 mb-1" value={this.props.fields.year} name="year" onChange={this.handleChange}>
                        <option value="" disabled={true}>Year</option>
                        { yearList }
                    </select>
                </Fragment>
            );
        }

        return (
            <div className="spinner-border text-primary">
                <span className="sr-only">Loading...</span>
            </div>
        );
    }
}

export default StartDateSelect;
