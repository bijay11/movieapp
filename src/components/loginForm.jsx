import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import auth from "../services/authService";
class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };
  //setting outside of state since it is not supposed to change
  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = async () => {
    //Call the server
    try {
      const { data } = this.state;
      //getting the data property and remaning it to JWT - Json web token
      await auth.login(data.username, data.password);

      // this.props.history.push("/");
      //this will cause the full relload of the application.
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
