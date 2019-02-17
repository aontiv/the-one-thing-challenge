import { Container } from 'flux/utils';
import React, { Component } from 'react';
import TrackerStore from '../../stores/TrackerStore';
import { updateSelected } from '../../actions/day/actions';

class CurrentDayContainer extends Component {
    static getStores() {
        return [ TrackerStore ];
    }

    static calculateState() {
        return {
            submitted: TrackerStore.getState().submitted,
            currentDay: TrackerStore.getState().currentDay,
        }
    }

    handleClick() {
        updateSelected({ id: `D_${this.state.currentDay + 1}` });
    }

    render() {
        return this.state.submitted && this.state.currentDay >= 0 && (
                    <div className="current-day-container d-flex justify-content-center mb-2">
                        <h6
                            className="current-day-content"
                            onClick={this.handleClick.bind(this)}
                        >
                        Day: <span style={{ color: 'blue' }}>{this.state.currentDay + 1}</span>
                        </h6>
                    </div>
                )
    }
}

export default Container.create(CurrentDayContainer);
