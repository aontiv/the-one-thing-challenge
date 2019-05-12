import { connect } from 'react-redux';
import React, { Component, Fragment } from 'react';

import Navbar from './Navbar';
import Banner from './Banner';
import HomeSwitcher from './HomeSwitcher';

import { deleteUser } from '../redux/actions/userActions';
import { deleteHabit } from '../redux/actions/habitActions';
import { deleteTracker } from '../redux/actions/trackerActions';
import { deleteDayList } from '../redux/actions/dayListActions';

class HomeView extends Component {
    resetState = () => {
        this.props.deleteUser();
        this.props.deleteHabit();
        this.props.deleteTracker();
        this.props.deleteDayList();
    };

    render() {
        return (
            <Fragment>
                <Navbar
                    logout={this.props.logout}
                    resetState={this.resetState}
                    username={this.props.username}
                />
                <Banner />
                <HomeSwitcher userId={this.props._id} />
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    _id: state.user._id,
    username: state.user.username
});

const mapDispatchToProps = dispatch => ({
    deleteUser: () => dispatch(deleteUser()),
    deleteHabit: () => dispatch(deleteHabit()),
    deleteTracker: () => dispatch(deleteTracker()),
    deleteDayList: () => dispatch(deleteDayList())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
