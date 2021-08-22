import styled, { css } from "styled-components";

const buttonStyles = css`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 48px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in;
  justify-content: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    border-radius: 30px;
    transition: 0.1s ease-in;
  }
`;

const InvertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;
  border-radius: 30px;
  transition: 0.1s ease-in;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const GoogleSignInStyles = css`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #1b66ca;
    border: none;
    border-radius: 30px;
    transition: 0.1s ease-in;
    color: black;
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) return GoogleSignInStyles;

  return props.inverted ? InvertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 48px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: none;
  cursor: pointer;
  transition: 0.1s ease-in;
  justify-content: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    border-radius: 30px;
    transition: 0.1s ease-in;
  }

  ${getButtonStyles}
`;
