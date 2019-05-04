import React, { Component } from "react";

import AuthForm from "./AuthForm";
import Navbar from "./Navbar";
import Banner from "./Banner";
import TrackerSwitcher from "./TrackerSwitcher";

import Seed from "../Seed";

class App extends Component {
    render() {
        const isLoggedIn = Seed.isLoggedIn;

        return (
            <div className="container">
                { isLoggedIn ? <Navbar username={Seed.username} /> : null }
                <Banner />
                {
                    !isLoggedIn ? (
                        <AuthForm />
                    ) : (
                        <TrackerSwitcher
                            habitId={Seed.habitId}
                            habitCategories={Seed.categoryList}
                            categoryName={Seed.categoryName}
                            startDate={Seed.startDate}
                            habitDescription={Seed.habitDescription}
                            dayList={Seed.dayList}
                        />
                    )
                }
            </div>
        );
    }
}

export default App;
