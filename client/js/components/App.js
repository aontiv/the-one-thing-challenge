import logo from '../../img/logo.png';
import React, { Component } from 'react';
import HabitContainer from './habit/HabitContainer.js'

class App extends Component {
    render() {
        return  (
            <div className="app">
                {/* Log Section */}
                <section className="logo">
                    <img src={logo} alt="logo" width="100%" />
                </section>

                {/* Main Section */}
                <section className="main">
                    <HabitContainer />
                </section>
            </div>
        )
    }
}

export default App;
