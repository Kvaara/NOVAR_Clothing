import React from "react";

// import "./form-input.styles.scss";
import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel,
} from "./form-input.styles.jsx";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <GroupContainer>
    <FormInputContainer
      onChange={handleChange}
      {...otherProps}
    ></FormInputContainer>
    {label ? (
      <FormInputLabel className={otherProps.value.length ? "shrink" : ""}>
        {label}
        <span className="form-input-label-colon">:</span>
      </FormInputLabel>
    ) : null}
  </GroupContainer>
);

export default FormInput;
