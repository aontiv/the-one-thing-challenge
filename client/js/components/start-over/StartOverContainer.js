import { Container } from 'flux/utils';
import React, { Component } from 'react';
import TrackerStore from '../../stores/TrackerStore';
import { reset, updateDatabaseTables } from '../../actions/actions';
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

        updateDatabaseTables();
    }

    render() {
        return this.state.submitted && (
            <p className="text-center mb-0" style={{ color: 'red' }} onClick={this.handleClick}>RESET ALL</p>
        )
    }
}

export default Container.create(StartOverContainer);
