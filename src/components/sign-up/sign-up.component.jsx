import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component.jsx";

import CustomButton from "../custom-button/custom-button.component.jsx";

import { signUpStart } from "../../redux/user/user.actions.js";

import { SignUpContainer, TitleH2, Span } from "./sign-up.styles.jsx";

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match! Check that they are both identical.");
      return;
    }

    signUpStart(name, email, password);

    alert("Signed up succesfully!");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignUpContainer>
      <TitleH2>I do not have an account</TitleH2>
      <Span>
        Sign up with your email and password{" "}
        <Span style={{ color: "green" }}>⇩</Span>
      </Span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          label="Display name"
          required
        ></FormInput>
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        ></FormInput>
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        ></FormInput>
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm the password"
          required
        ></FormInput>
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </SignUpContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (name, email, password, confirmPassword) =>
    dispatch(signUpStart({ name, email, password, confirmPassword })),
});

export default connect(null, mapDispatchToProps)(SignUp);
