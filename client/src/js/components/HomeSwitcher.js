import { connect } from 'react-redux';
import React, { Component } from 'react';

import HabitSetup from './HabitSetup';
import HomeSwitcherMarkup from './HomeSwitcherMarkup';
import Motivation from './Motivation';
import Tracker from './Tracker';

import { getHabitAsync } from '../redux/actions/habitActions';

class HomeSwitcher extends Component {
    state = { habitPresent: false };

    componentDidUpdate(prevProps) {
        if (prevProps.userId !== this.props.userId) {
            this.props.getHabitAsync(this.props.userId, this.setHabitPresent);
        }
    }

    setHabitPresent = () => {
        this.setState({ habitPresent: true });
    };

    render() {
        const habitPresent = this.state.habitPresent;

        return habitPresent
            ? (
                <HomeSwitcherMarkup>
                    <Tracker />
                </HomeSwitcherMarkup>
            )
            : (
                <HomeSwitcherMarkup>
                    <HabitSetup />
                    <Motivation />
                </HomeSwitcherMarkup>
            );
    }
}

const mapDispatchToProps = dispatch => ({
    getHabitAsync: (id, setHabitPresent) => dispatch(getHabitAsync(id, setHabitPresent))
});

export default connect(null, mapDispatchToProps)(HomeSwitcher);
