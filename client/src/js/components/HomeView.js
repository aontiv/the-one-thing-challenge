import { connect } from 'react-redux';
import React, { Component, Fragment } from 'react';

import Navbar from './Navbar';
import Banner from './Banner';
import HomeSwitcher from './HomeSwitcher';

import { deleteUser } from '../redux/actions/userActions';

class HomeView extends Component {
    deleteUser = () => {
        this.props.deleteUser();
    };

    render() {
        return (
            <Fragment>
                <Navbar
                    logout={this.props.logout}
                    deleteUser={this.deleteUser}
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
    deleteUser: () => dispatch(deleteUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
