import Joi from 'joi-browser';
import React from 'react';
import { Redirect } from 'react-router-dom';

import auth from '../services/authService';
import Form from './common/form';

class LoginForm extends Form {
  state = {
    data: { username: '', password: '' },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label('Username'),
    password: Joi.string().required().label('Password'),
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await auth.login(data.username, data.password);

      const { state } = this.props.location;
      window.location = state ? state.from.pathname : '/';
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    if (auth.getCurrentUser()) return <Redirect to="/" />;

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-3 d-lg-block d-none"></div>
          <div className="col-lg-6">
            <h1 className="text-center my-3">Login</h1>
            <form onSubmit={this.handleSubmit}>
              {this.renderInput('username', 'Username')}
              {this.renderInput('password', 'Password', 'password')}
              <div class="d-flex justify-content-center">
                {this.renderButton('Login')}
              </div>
            </form>
          </div>
          <div className="col-lg-3 d-lg-block d-none"></div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
