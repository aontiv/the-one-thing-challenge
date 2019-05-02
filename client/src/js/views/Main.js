import logo from '../../img/logo.png';
import React, { Component } from 'react';
import { reset } from '../actions/actions';
import { logout } from '../actions/user/actions';
import DayContainer from '../components/day/DayContainer.js';
import HabitContainer from '../components/habit/HabitContainer.js';
import OverviewContainer from '../components/overview/OverviewContainer.js';
import StartOverContainer from '../components/start-over/StartOverContainer';
import CurrentDayContainer from '../components/current-day/CurrentDayContainer';

class Main extends Component {
    render() {
        return  (
            <div className="main">
                <section className="logo">
                    <img src={logo} alt="logo" width="100%" />
                </section>

                <section className="logout text-right">
                    <span className="logout__span" onClick={() => {
                        logout();
                        reset();
                    }}>logout</span>
                </section>

                <section className="select">
                    <HabitContainer />
                </section>

                <section className="overview">
                    <OverviewContainer />
                </section>

                <section className="current-day">
                    <CurrentDayContainer />
                </section>

                <section className="day">
                    <DayContainer />
                </section>

                <div className="start-over">
                    <StartOverContainer />
                </div>
            </div>
        )
    }
}

export default Main;
