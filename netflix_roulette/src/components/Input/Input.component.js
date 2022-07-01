import React from "react";
import PropTypes from "prop-types";
import { Input } from "./Input.styled";

export const InputComponent = ({ placeholder }) => {
  return <Input placeholder={placeholder} />;
};

InputComponent.propTypes = {
  placeholder: PropTypes.string,
};
