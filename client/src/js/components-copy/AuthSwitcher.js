import React, { Component } from "react";

import AuthForm from "./AuthForm";

class AuthSwitcher extends Component {
    render() {
        const login = true;

        return (
            login ? (
                <AuthForm
                    context="login"
                />
            ) : (
                <AuthForm
                    context="register"
                />
            )
        );
    }
}

export default AuthSwitcher;
