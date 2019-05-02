import React, { Component } from "react";

class Navbar extends Component {
    render() {
        const loggedIn = true;
        const logout = loggedIn ? "Logout"  : "";

        return (
            <nav className="navbar bg-primary text-white p-2 p-sm-4 rounded my-2">
                <h1 className="navbar-brand">{this.props.username}</h1>
                <a href="" className="text-white logout">{logout}</a>
            </nav>
        );
    }
}

export default Navbar;
