import React from "react";

import FormInput from "../form-input/form-input.component.jsx";

import CustomButton from "../custom-button/custom-button.component.jsx";

import {
  auth,
  createUserProfileDocument,
} from "../../firebase/firebase.utils.js";

import "./sign-up.styles.scss";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { name, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords don't match! Check that they are both identical.");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log(name, "name");
      await createUserProfileDocument(user, { name });

      this.setState({ name: "", email: "", password: "", confirmPassword: "" });
    } catch (e) {}
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { name, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password:</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            label="Display name"
            required
          ></FormInput>
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          ></FormInput>
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          ></FormInput>
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm the password"
            required
          ></FormInput>
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
