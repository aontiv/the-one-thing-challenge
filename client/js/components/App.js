import logo from '../../img/logo.png';
import React, { Component } from 'react';
import DayContainer from './day/DayContainer.js';
import TrackerStore from '../stores/TrackerStore';
import HabitContainer from './habit/HabitContainer.js';
import { setInitialDays } from '../actions/day/actions';
import OverviewContainer from './overview/OverviewContainer.js';
import { setInitialStartDate } from '../actions/tracker/actions';
import StartOverContainer from './start-over/StartOverContainer';
import CurrentDayContainer from './current-day/CurrentDayContainer';

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
                <section className="logo mb-5">
                    <img src={logo} alt="logo" width="100%" />
                </section>

                {/* Main Section */}
                <section className="select">
                    <HabitContainer />
                </section>

                <section className="current-day">
                    <CurrentDayContainer />
                </section>

                {/* Day Section */}
                <section className="day">
                    <DayContainer />
                </section>

                {/* Overview Section */}
                <section className="overview">
                    <OverviewContainer />
                </section>

                {/* Start Over Section */}
                <div className="start-over">
                    <StartOverContainer />
                </div>
            </div>
        )
    }
}

export default App;
