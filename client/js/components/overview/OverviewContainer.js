import { Container } from 'flux/utils';
import OverviewDay from './OverviewDay';
import React, { Component } from 'react';
import DayStore from '../../stores/DayStore';
import TrackerStore from '../../stores/TrackerStore';

class OverviewContainer extends Component {
    static getStores() {
        return [ TrackerStore, DayStore ];
    }

    static calculateState() {
        return {
            days: DayStore.getState(),
            submitted: TrackerStore.getState().submitted,
            currentDay: TrackerStore.getState().currentDay,
        }
    }

    render() {
        const isReady = this.state.submitted && this.state.currentDay >= 0 ? true : false;

        return isReady && (
            <div className="overview-container d-flex flex-wrap mb-4">
                {
                    this.state.days.map(overviewDay => {
                        return <OverviewDay key={overviewDay.id} day={overviewDay} />
                    })
                }
            </div>
        )
    }
}

export default Container.create(OverviewContainer);
