import logo from '../../img/logo.png';
import React, { Component } from 'react';
import { register } from '../actions/user/actions'

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            type: 'Register',
        }
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
        if (type === 'Register') {
            register({ username, password });
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
                        <input className="form-control text-center mb-1" type="text" placeholder="username" value={this.state.username} onChange={event => this.handleInput('username', event.target.value)} />
                        <input className="form-control text-center" type="text" placeholder="password" value={this.state.password} onChange={event => this.handleInput('password', event.target.value)} />
                    </div>
                    <div className="w-100 px-3 mb-3">
                        <button className="login-form__button btn btn-block text-white" onClick={this.handleButtonClick.bind(this)}>{this.state.type}</button>
                    </div>
                    <div className="login-form__links">
                        <span className="login-form__register" onClick={() => this.handleTypeClick('Register')}>Register</span> /
                        <span className="login-form__login" onClick={() => this.handleTypeClick('Login')}> Login</span>
                    </div>
                </form>  
            </section>
        )
    }
}

export default Login;
