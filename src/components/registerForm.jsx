import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import * as userService from "../services/userService";
import auth from "../services/authService";
import { toast } from 'react-toastify';

class RegisterForm extends Form {
  state = {
    data: { firstName: "", lastName: "", email: "", phone: "", password: "" },
    errors: {}
  };

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
      
      await userService.register(this.state.data);

      toast.success('The account has been created successfully');

      const { email, password } = this.state.data;

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
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("firstName", "FirstName")}
          {this.renderInput("lastName", "LastName")}
          {this.renderInput("email", "Email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("phone", "Phone Number")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
