import Main from '../views/Main';
import Login from '../views/Login';
import { Container } from 'flux/utils';
import React, { Component } from 'react';
import UserStore from '../stores/UserStore';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

class App extends Component {
    static getStores() {
        return [ UserStore ];
    }

    static calculateState() {
        return {
            loggedIn: UserStore.getState().loggedIn,
        }
    }

    render() {
        return  (
            <Router>
                <div className="app">
                    <Route path='/' exact render={() => (
                        this.state.loggedIn
                            ? <Main />
                            : <Redirect to='/login' />
                    )} />
                    <Route path='/login' exact render={() => (
                        this.state.loggedIn
                            ? <Redirect to='/' />
                            : <Login />
                    )} />
                </div>
            </Router>
        )
    }
}

export default Container.create(App);
