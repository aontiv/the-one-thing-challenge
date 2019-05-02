import React, { Component } from "react";

import AuthSwitcher from "./AuthSwitcher";
import Navbar from "./Navbar";
import Banner from "./Banner";
import TrackerSwitcher from "./TrackerSwitcher";

class App extends Component {
    render() {
        const userId = true;

        return (
            <div className="container">
                { userId ? <Navbar username="testuser" /> : null }
                <Banner />
                {
                    !userId ? (
                        <AuthSwitcher />
                    ) : (
                        <TrackerSwitcher />
                    )
                }
            </div>
        );
    }
}

export default App;
