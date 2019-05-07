import React, { Component, Fragment } from "react";

import AuthForm from "./AuthForm";
import Navbar from "./Navbar";
import Banner from "./Banner";
import TrackerSwitcher from "./TrackerSwitcher";

class App extends Component {
    state = {};

    componentDidMount() {
        this.setState({
            userId: "xxxx",
            username: "testuser",
            isLoggedIn: true
        });
    }

    loginUser = userSetup => {
        this.setState({
            ...userSetup,
            isLoggedIn: true
        });
    };

    logoutUser = () => {
        this.setState({
            userId: "",
            username: "",
            isLoggedIn: false
        });
    };

    render() {
        const isLoggedIn = this.state.isLoggedIn;

        return (
            <div className="container">
                {
                    isLoggedIn ? (
                        <Fragment>
                            <Navbar username={this.state.username} />
                            <Banner />
                            <TrackerSwitcher />
                        </Fragment>
                    ) : (
                        <Fragment>
                            <Banner />
                            <AuthForm />
                        </Fragment>
                    )
                }
            </div>
        );
    }
}

export default App;
