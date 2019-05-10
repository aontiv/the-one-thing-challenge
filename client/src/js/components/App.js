import React, { Component, Fragment } from "react";

import Banner from "./Banner";
import Navbar from "./Navbar";
import TrackerSwitcher from "./TrackerSwitcher";
import AuthorizationView from './AuthorizationView';

import HomeView from './HomeView';

class App extends Component {
    state = { loggedIn: false };

    login = () => {
        this.setState({ loggedIn: true });
    };

    logout = event => {
        event.preventDefault();
        this.setState({ loggedIn: false });
    };

    render() {
        const loggedIn = this.state.loggedIn;

        return (
            <div className="container">
                {
                    loggedIn ? (
                        <HomeView logout={this.logout} />
                        // <Fragment>
                        //     <Navbar
                        //         username={this.props.username}
                        //         logout={this.logout}    
                        //     />
                        //     <Banner />
                        //     <TrackerSwitcher
                        //         userId={this.state.userId}
                        //     />
                        // </Fragment>
                    ) : <AuthorizationView login={this.login} />
                }
            </div>
        );
    }
}

export default App;
