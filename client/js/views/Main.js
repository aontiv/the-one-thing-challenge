import logo from '../../img/logo.png';
import React, { Component } from 'react';
import DayContainer from '../components/day/DayContainer.js';
import HabitContainer from '../components/habit/HabitContainer.js';
import OverviewContainer from '../components/overview/OverviewContainer.js';
import StartOverContainer from '../components/start-over/StartOverContainer';
import CurrentDayContainer from '../components/current-day/CurrentDayContainer';

class Main extends Component {
    render() {
        return  (
            <div className="main">
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

export default Main;
