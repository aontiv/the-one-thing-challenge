import moment from 'moment';
import React, { Component, Fragment } from 'react';

import Helpers from '../Helpers';

import StartDateSelect from './StartDateSelect';

class StartDate extends Component {
    componentDidMount() {
        const date = moment();
        this.props.handleFieldChange({ day: date.date(), month: date.month() + 1, year: date.year() });
    }

    handleChange = event => {
        const   name = event.target.name,
                value = Number(event.target.value),
                fields = Helpers.validDate({
                    ...this.props.fields,
                    [name]: name === 'month' ? (value + 1) : value
                });
        
        this.props.handleFieldChange(fields);
    };

    getMonthList = date => {
        const monthList = Helpers.monthList(date).map(array => {
            return (
                <option
                    disabled={array[1]}
                    key={`m:${array[0]}`}
                    value={array[0]}
                >
                    {array[0] + 1}
                </option>
            )
        });
        return monthList;
    };

    getDayList = date => {
        const dayList = Helpers.dayList(date).map(array => {
            return (
                <option
                    disabled={array[1]}
                    key={`d:${array[0]}`}
                    value={array[0]}
                >
                    {array[0]}
                </option>
            )
        });
        return dayList;
    };

    getYearList = date => {
        const yearList = Helpers.yearList(date).map(year => {
            return (
                <option
                    key={`y:${year}`}
                    value={year}
                >
                    {year}
                </option>
            )
        });
        return yearList; 
    }

    render() {
        const { day, month, year } = this.props.fields;
        
        return (
            <Fragment>
                <StartDateSelect
                    contentList={this.getMonthList(moment(`${month}-${year}`, 'MM-YYYY'))}
                    name='month'
                    onChange={this.handleChange}
                    text='Month'
                    value={month ? month - 1 : ''}
                />
                <StartDateSelect
                    contentList={this.getDayList(moment(`${month}-${year}`, 'MM-YYYY'))}
                    name='day'
                    onChange={this.handleChange}
                    text='Day'
                    value={day ? day : ''}
                />
                <StartDateSelect
                    contentList={this.getYearList(moment(`${month}-${year}`, 'MM-YYYY'))}
                    name='year'
                    onChange={this.handleChange}
                    text='Year'
                    value={year ? year : ''}
                />
            </Fragment>
        );
    }
}

export default StartDate;
