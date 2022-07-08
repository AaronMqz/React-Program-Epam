import React from "react";
import PropTypes from "prop-types";
import { Title } from "./Title.styled";

export const TitleComponent = ({ children }) => {
  return (
    <>
      <Title>{children}</Title>
    </>
  );
};

TitleComponent.propTypes = {
  children: PropTypes.string,
};
