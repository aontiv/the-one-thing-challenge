import React, { Component } from "react";

import AuthForm from "./AuthForm";
import Navbar from "./Navbar";
import Banner from "./Banner";
import TrackerSwitcher from "./TrackerSwitcher";

class App extends Component {
    state = {
        userId: "xxxx",
        username: "testuser",
        isLoggedIn: true
    };

    render() {
        const isLoggedIn = this.state.isLoggedIn;

        return (
            <div className="container">
                { isLoggedIn ? <Navbar username={this.state.username} /> : null }
                <Banner />
                {
                    !isLoggedIn ? (
                        <AuthForm />
                    ) : (
                        <TrackerSwitcher />
                    )
                }
            </div>
        );
    }
}

export default App;
