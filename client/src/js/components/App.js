import React, { Component, Fragment } from "react";

import AuthForm from "./AuthForm";
import Navbar from "./Navbar";
import Banner from "./Banner";
import TrackerSwitcher from "./TrackerSwitcher";

class App extends Component {
    state = {
        userId: "",
        username: "",
        isLoggedIn: false
    };

    login = user => {
        this.setState({ userId: user.userId, username: user.username, isLoggedIn: true });
    };

    logout = event => {
        event.preventDefault();
        this.setState({ userId: "", username: "", isLoggedIn: false });
    };

    render() {
        const isLoggedIn = this.state.isLoggedIn;

        return (
            <div className="container">
                {
                    isLoggedIn ? (
                        <Fragment>
                            <Navbar
                                username={this.state.username}
                                logout={this.logout}    
                            />
                            <Banner />
                            <TrackerSwitcher
                                userId={this.state.userId}
                            />
                        </Fragment>
                    ) : (
                        <Fragment>
                            <Banner />
                            <AuthForm
                                login={this.login}
                            />
                        </Fragment>
                    )
                }
            </div>
        );
    }
}

export default App;
