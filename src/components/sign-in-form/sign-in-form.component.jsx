import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";

class SignInForm extends Component {
  state = { email: "", password: "" };

  handleSummit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an acount</h2>
        <span>Sign up for new account</span>
        <form action="" onSubmit={this.handleSummit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
            required
          />

          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />

          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default SignInForm;
