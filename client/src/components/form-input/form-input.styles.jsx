import styled, { css } from "styled-components";

const subColor = "grey";
const mainColor = "black";

const shrinkLabelStyles = css`
  top: -15px;
  left: 4px;
  font-size: 15px;
  color: ${mainColor};
  font-weight: bold;
`;

export const GroupContainer = styled.div`
  position: relative;
  margin: 45px 0;

  input[type="password"] {
    letter-spacing: 0.3em;
  }
`;

export const FormInputContainer = styled.input`
  font-family: "Open Sans Condensed", sans-serif;
  background: none;
  background-color: white;
  color: rgb(95, 95, 95);
  font-size: 25px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ label {
    ${shrinkLabelStyles}
    .form-input-label-colon {
      display: inline;
      font-size: 15px;
      color: ${mainColor};
    }
  }
`;

export const FormInputLabel = styled.label`
  color: $sub-color;
  font-size: 22px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 18px;
  transition: 300ms ease all;

  .form-input-label-colon {
    font-size: 15px;
    display: none;
  }

  &.shrink {
    ${shrinkLabelStyles}
    .form-input-label-colon {
      display: inline;
      color: ${mainColor};
      font-size: 15px;
    }
  }
`;
