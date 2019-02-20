import logo from '../../img/logo.png';
import React, { Component } from 'react';
import { async_addUser, async_login } from '../actions/user/actions'

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            type: 'LOGIN',
            usernameErr: false,
            passwordErr: false,
        }
    }

    testInput(input) {
        var pass = /^(?:[\d\w]|\-|\_)+$/.test(input);
        return pass;
    }

    handleInput(type, text) {
        type === 'username'
            ? this.setState({ username: text })
            : this.setState({ password: text });
    }

    handleTypeClick(type) {
        this.setState({ type });
    }

    handleButtonClick(event) {
        event.preventDefault();

        const { username, password, type } = this.state;
        if (type === 'REGISTER') {
            if (this.testInput(username)) {
                if (this.testInput(password)) {
                    async_addUser({ username, password, loggedIn: true });
                } else {
                    this.setState({ password: "", passwordErr: true });
                }
            } else {
                this.setState({ username: "", usernameErr: true });
            }
        } else if (type === 'LOGIN') {
            if (this.testInput(username)) {
                if (this.testInput(password)) {
                    async_login({ username, password });
                } else {
                    this.setState({ password: "", passwordErr: true });
                }
            } else {
                this.setState({ username: "", usernameErr: true });
            }
        }
    }

    render() {
        return (
            <section className="login-container d-flex align-items-center justify-content-center">
                <form className="login-form rounded shadow d-flex flex-column justify-content-center align-items-center">
                    <section className="logo d-flex align-items-start justify-content-center mb-3">
                        <img src={logo} alt="logo" width="85%" />
                    </section>
                    <div className="login-form__inputs form-group w-100 px-3 mb-0">
                        <input
                            type="text"
                            placeholder="username"
                            value={this.state.username}
                            className="form-control text-center mb-1"
                            onChange={event => this.handleInput('username', event.target.value)}
                        />
                        {
                            this.state.usernameErr && (
                                <p className="username__error">* only letters, numbers, dashes, and underscores</p>
                            )
                        }
                        <input
                            type="text"
                            placeholder="password"
                            value={this.state.password}
                            className="form-control text-center"
                            onChange={event => this.handleInput('password', event.target.value)}
                        />
                        {
                            this.state.passwordErr && (
                                <p className="username__error">* only letters, numbers, dashes, and underscores</p>
                            )
                        }
                    </div>
                    <div className="w-100 px-3 mb-3">
                        <button className="login-form__button btn btn-block text-white" onClick={this.handleButtonClick.bind(this)}>{this.state.type}</button>
                    </div>
                    <div className="login-form__links">
                        <span className="login-form__register" onClick={() => this.handleTypeClick('REGISTER')}>register</span> /
                        <span className="login-form__login" onClick={() => this.handleTypeClick('LOGIN')}> login</span>
                    </div>
                </form>
            </section>
        )
    }
}

export default Login;
