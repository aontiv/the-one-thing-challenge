import logo from '../../img/logo.png';
import React, { Component } from 'react';
import DayContainer from './day/DayContainer.js';
import HabitContainer from './habit/HabitContainer.js';
import { setInitialDays } from '../actions/day/actions';
import OverviewContainer from './overview/OverviewContainer.js';
import { setInitialStartDate } from '../actions/tracker/actions';

class App extends Component {
    componentDidMount() {
        setInitialStartDate({ date: new Date() });
        setInitialDays();
        return;
    }

    render() {
        return  (
            <div className="app">
                {/* Log Section */}
                <section className="logo">
                    <img src={logo} alt="logo" width="100%" />
                </section>

                {/* Main Section */}
                <section className="select">
                    <HabitContainer />
                </section>

                {/* Day Section */}
                <section className="day">
                    <DayContainer />
                </section>

                {/* Overview Section */}
                <section className="overview">
                    <OverviewContainer />
                </section>

                {/* <div className="start-over">
                    <p className="text-center" style={{ color: 'blue' }}>start over</p>
                </div> */}
            </div>
        )
    }
}

export default App;
