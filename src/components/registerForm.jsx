import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import * as userService from "../services/userService";

class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {},
  };
  //setting outside of state since it is not supposed to change
  schema = {
    username: Joi.string().required().email().label("Username"),
    password: Joi.string().min(5).required().label("Password"),
    name: Joi.string().required().label("Name"),
  };
  doSubmit = async () => {
    //Call the server
    //since this below returns a promise, we need to await it and use async
    try {
      const response = await userService.register(this.state.data);
      const test = localStorage.setItem(
        "token",
        response.headers["x-auth-token"]
      );
      console.log(test);

      //this.props.history.push("/");
      //this will cause the whole application to reload
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };
  doSubmit;
  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
