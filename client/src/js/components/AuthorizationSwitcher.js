import { connect } from 'react-redux';
import React, { Component } from 'react';

import Helpers from '../Helpers';
import AuthorizationForm from './AuthorizationForm';
import { loginAsync, registerAsync } from '../redux/actions/userActions';

class AuthorizationSwitcher extends Component {
    state = {
        context: 'Login',
        error: '',
        fields: {
            username: '',
            password: ''
        },
        validated: false
    };

    // References for Bootstrap form validation purposes
    usernameInput = React.createRef();
    passwordInput = React.createRef();

    inputsValid = () => {
        const   usernameValid = this.usernameInput.current.checkValidity(),
                passwordValid = this.passwordInput.current.checkValidity();
        
        return usernameValid && passwordValid;
    };

    handleContextClick = event => {
        event.preventDefault();
        this.setState({ context: event.target.textContent });
    };

    handleFieldChange = event => {
        var fields = { ...this.state.fields, [event.target.name]: event.target.value };
        this.setState({ fields });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.inputsValid()) {
            this.state.context === 'Login'
                ? this.props.loginAsync(this.state.fields, this.success, this.failure)
                : this.props.registerAsync(Helpers.constructUser(this.state.fields), this.success, this.failure);
        }
        this.setState({ validated: true });
    };

    success = () => {
        this.props.login();
    };

    failure = data => {
        console.log(data) // eslint-disable-line
        this.setState({ error: data.message });
    };

    render() {
        const   { username, password } = this.state.fields,
                disabled = username === '' || password === '';

        return (
            <AuthorizationForm
                context={this.state.context}
                disabled={disabled}
                error={this.state.error}
                onChange={this.handleFieldChange}
                onClick={this.handleContextClick}
                onSubmit={this.handleFormSubmit}
                password={this.state.fields.password}
                passwordReference={this.passwordInput}
                username={this.state.fields.username}
                usernameReference={this.usernameInput}
                validated={this.state.validated}
            />
        );
    }
}

const mapDispatchToProps = dispatch => ({
    loginAsync: (user, success, failure) => dispatch(loginAsync(user, success, failure)),
    registerAsync: (user, success, failure) => dispatch(registerAsync(user, success, failure))
});

export default connect(null, mapDispatchToProps)(AuthorizationSwitcher);
