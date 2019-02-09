import { Container } from 'flux/utils';
import React, { Component } from 'react';
import { reset } from '../../actions/actions';
import TrackerStore from '../../stores/TrackerStore';
import { setInitialDays } from '../../actions/day/actions';
import { setInitialStartDate } from '../../actions/tracker/actions';

class StartOverContainer extends Component {
    static getStores() {
        return [ TrackerStore ];
    }

    static calculateState() {
        return {
            submitted: TrackerStore.getState().submitted,
        }
    }

    handleClick() {
        reset();
        setInitialStartDate({ date: new Date() });
        setInitialDays();
    }

    render() {
        return this.state.submitted && (
            <p className="text-center mb-0" style={{ color: 'red' }} onClick={this.handleClick}>reset</p>
        )
    }
}

export default Container.create(StartOverContainer);
