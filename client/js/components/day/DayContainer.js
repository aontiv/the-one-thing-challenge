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
        return (
            <div className="day-container mt-5">
                {
                    this.state.submitted  && this.state.currentDay >= 0
                        ? <div>HAVE DAYS</div>
                        : <Motivation />
                }
            </div>
        )
    }
}

export default Container.create(DayContainer);
