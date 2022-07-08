import React from "react";
import PropTypes from "prop-types";
import { TextArea } from "./TextArea.styled";

export const TextAreaComponent = ({ placeholder }) => {
  return <TextArea placeholder={placeholder} />;
};

TextAreaComponent.propTypes = {
  placeholder: PropTypes.string,
};
