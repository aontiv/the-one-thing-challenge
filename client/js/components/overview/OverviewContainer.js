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

        return (
            <div className={"overview-container d-flex flex-wrap" + (isReady ? " mt-5" : "")}>
                {
                    isReady && (
                        this.state.days.map(overviewDay => {
                            return <OverviewDay key={overviewDay.id} day={overviewDay} />
                        })
                    )
                }
            </div>
        )
    }
}

export default Container.create(OverviewContainer);
