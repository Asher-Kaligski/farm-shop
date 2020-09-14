import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import * as userService from "../services/userService";
import { toast } from 'react-toastify';
import auth from "../services/authService";


class UserProfile extends Form {
  state = {
    data: { firstName: "", lastName: "", email: "", phone: "", password: "" },
    errors: {}
  };

  async componentDidMount() {
    const { firstName, lastName, email, phone } = await userService.getById();
    console.log('firstName', firstName)
    const data = { firstName, lastName, email, phone, password: '' };

    this.setState({ data });
    console.log('this.state', this.state)
  }

  schema = {
    firstName: Joi.string()
      .alphanum()
      .min(2)
      .max(30)
      .required()
      .label("FirstName"),
    lastName: Joi.string()
      .alphanum()
      .min(2)
      .max(30)
      .required()
      .label("LastName"),
    phone: Joi.string()
      .min(5)
      .max(30)
      .required()
      .label("PhoneNumber"),
    email: Joi.string()
      .min(5)
      .max(233)
      .email()
      .required()
      .label("Email"),
    password: Joi.string()
      .required()
      .min(8)
      .max(15)
      .label("Password")
  };

  doSubmit = async () => {
    try {

      await userService.update(this.state.data);

      const { email, password } = this.state.data;

      toast.success('Your profile has been updated successfully');

      await auth.login(email, password);

      if (auth.getCurrentUser()) return window.location = "/";


    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.firstName = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-2 d-lg-block d-none"></div>
          <div className="col-lg-8">
            <h1 className="text-center my-3">Profile</h1>
            <form onSubmit={this.handleSubmit}>
              {this.renderInput("firstName", "FirstName")}
              {this.renderInput("lastName", "LastName")}
              {this.renderInput("email", "Email")}
              {this.renderInput("password", "Password", "password")}
              {this.renderInput("phone", "Phone Number")}
              <div class="d-flex justify-content-center">
                {this.renderButton("Update Profile")}
              </div>
            </form>
          </div>
          <div className="col-lg-2 d-lg-block d-none"></div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
