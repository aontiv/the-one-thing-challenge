import React, { Component } from 'react';

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
                    loggedIn
                    ? (<HomeView logout={this.logout} />)
                    : (<AuthorizationView login={this.login} />)
                }
            </div>
        );
    }
}

export default App;
