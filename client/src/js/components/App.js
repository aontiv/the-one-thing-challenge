import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

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
                <Route path="/" exact={true} render={() => {
                    return loggedIn
                        ? <HomeView logout={this.logout} />
                        : <Redirect to="/login" />
                }} />
                <Route path="/login" render={() => {
                    return loggedIn
                        ? <Redirect to="/" />
                        : <AuthorizationView login={this.login} />
                }} />
            </div>
        );
    }
}

export default App;
