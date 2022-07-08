import React from "react";
import PropTypes from "prop-types";
import { Label } from "../Label/Label.styled";

export const LabelComponent = ({ children }) => {
  return (
    <>
      <Label>{children}</Label>
    </>
  );
};

LabelComponent.propTypes = {
  children: PropTypes.string.isRequired,
};
