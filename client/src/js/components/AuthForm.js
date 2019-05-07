import React, { Component, Fragment } from "react";

class AuthForm extends Component {
    render() {
        return (
            <Fragment>
                <div className="row flex-column align-items-center p-3">
                    <form className="col-md-8 col-lg-6 col-xl-4 shadow p-2 mb-4" noValidate>
                        <header className="bg-primary p-2 mb-4 rounded">
                            <h1 className="text-center text-white mb-0">Login</h1>
                        </header>
                        <input className="form-control text-center mb-1" type="text" placeholder="username" />
                        <input className="form-control text-center" type="password" placeholder="password" />
                        <button className="btn btn-secondary btn-block">Submit</button>
                    </form>
                    <div>
                        <a href="" className="px-1">Login</a><span className="text-primary">|</span><a href="" className="px-1">Register</a>
                    </div>
                </div>
                <div className="alert alert-danger text-center fixed-bottom fade">Username not found</div>
            </Fragment>
        );
    }
}

export default AuthForm;
