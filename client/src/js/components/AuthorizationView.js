import React, { Component, Fragment } from 'react';

import Banner from './Banner';
import AuthorizationSwitcher from './AuthorizationSwitcher';

class AuthorizationView extends Component {
    render() {
        return (
            <Fragment>
                <Banner />
                <AuthorizationSwitcher login={this.props.login} />
            </Fragment>
        );
    }
}

export default AuthorizationView;
