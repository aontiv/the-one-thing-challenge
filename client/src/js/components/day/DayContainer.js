import Day from './Day';
import Motivation from './Motivation';
import { Container } from 'flux/utils';
import React, { Component } from 'react';
import DayStore from '../../stores/DayStore';
import TrackerStore from '../../stores/TrackerStore';

class DayContainer extends Component {
    static getStores() {
        return [ TrackerStore, DayStore ];
    }

    static calculateState() {
        return {
            days: DayStore.getState(),
            startDate: TrackerStore.getState().startDate,
            submitted: TrackerStore.getState().submitted,
            currentDay: TrackerStore.getState().currentDay,
        }
    }

    render() {
        const day = this.state.days.filter(day => day.selected)[0];

        return (
            <div className="day-container mb-4">
                {
                    day && this.state.submitted && this.state.currentDay >= 0
                        ? <Day days={this.state.days} day={day} />
                        : <Motivation currentDay={this.state.currentDay} />
                }
            </div>
        )
    }
}

export default Container.create(DayContainer);
