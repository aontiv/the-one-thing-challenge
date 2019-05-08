import uuid from "uuid";
import Client from "../Client";
import classNames from "classnames";
import React, { Component, Fragment } from "react";

import Input from "./Input";

const formStyles = validated => classNames(
    [ "col-md-8", "col-lg-6", "col-xl-4", "shadow", "p-2", "mb-4" ],
    { "was-validated": validated }
);

const errorStyles = error => classNames(
    [ "alert", "alert-danger", "text-center", "fixed-bottom", "fade" ],
    { show: error }
);

class AuthForm extends Component {
    state = {
        fields: {
            username: "",
            password: ""
        },
        context: "Login",
        validated: false,
        error: ""
    };

    // References for client-side form validation purposes
    usernameInput = React.createRef();
    passwordInput = React.createRef();

    handleFieldChange = evt => {
        var fields = { ...this.state.fields, [evt.target.name]: evt.target.value };
        this.setState({ fields });
    };

    handleContextChange = evt => {
        evt.preventDefault();
        this.setState({ context: evt.target.textContent });
    };

    handleFormSubmit = evt => {
        evt.preventDefault();

        const usernameValid = this.usernameInput.current.checkValidity();
        const passwordValid = this.passwordInput.current.checkValidity();

        if (usernameValid && passwordValid) {
            if (this.state.context === "Login") {
                this.login();
            }
            else {
                this.register();
            }
        }

        this.setState({ validated: true });
    };

    login = () => {
        Client.login(this.state.fields)
            .then(Client.handleResponse)
            .then(this.loginSuccess)
            .catch(this.loginFailure)
    };

    loginSuccess = data => {
        this.props.login(data)
    };

    loginFailure = data => {
        console.log(data) // eslint-disable-line
        this.setState({ error: data.message });
    };

    register = () => {
        Client.register(this.createUser())
            .then(Client.handleResponse)
            .then(this.loginSuccess)
            .catch(this.loginFailure)
    };

    createUser = () => {
        return {
            user_id: uuid.v4(),
            username: this.state.fields.username,
            password: this.state.fields.password
        };
    };

    render() {
        const disabled = this.state.fields.username === "" || this.state.fields.password === "";

        return (
            <Fragment>
                <div className="row flex-column align-items-center p-3">
                    <form className={formStyles(this.state.validated)} noValidate={true} onSubmit={this.handleFormSubmit}>
                        <header className="bg-primary p-2 mb-4 rounded">
                            <h1 className="text-center text-white mb-0">{this.state.context}</h1>
                        </header>
                        <Input
                            className="form-control text-center"
                            type="text"
                            placeholder="username"
                            value={this.state.fields.username}
                            onChange={this.handleFieldChange}
                            name="username"
                            required={true}
                            minLength={5}
                            pattern="^\w{5}(\w|-){0,15}$"
                            reference={this.usernameInput}
                            margin={1}
                        />
                        <Input
                            className="form-control text-center"
                            type="password"
                            placeholder="password"
                            value={this.state.fields.password}
                            onChange={this.handleFieldChange}
                            name="password"
                            required={true}
                            minLength={5}
                            pattern="^\w{5}(\w|-){0,15}$"
                            reference={this.passwordInput}
                            margin={0}
                        />
                        <button
                            className="btn btn-secondary btn-block"
                            type="submit"
                            disabled={disabled}
                        >
                            Submit
                        </button>
                    </form>
                    <div>
                        <a
                            href=""
                            className="px-1"
                            onClick={this.handleContextChange}
                        >
                            Login
                        </a>
                        <span className="text-primary">|</span>
                        <a
                            href=""
                            className="px-1"
                            onClick={this.handleContextChange}
                        >
                            Register
                        </a>
                    </div>
                </div>
                <div className={errorStyles(this.state.error)}>{this.state.error}</div>
            </Fragment>
        );
    }
}

export default AuthForm;