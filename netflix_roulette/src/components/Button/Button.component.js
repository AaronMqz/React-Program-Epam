import React from "react";
import PropTypes from "prop-types";
import { Button } from "./Button.styled";
import { ButtonType } from "../../utils/constants";

const ButtonNormal = ({ theme, text, width }) => {
  return (
    <Button.Normal theme={theme} width={width}>
      {text}
    </Button.Normal>
  );
};

const ButtonCustom = ({ theme, text, width }) => {
  return (
    <Button.Custom theme={theme} width={width}>
      {text}
    </Button.Custom>
  );
};

export const ButtonComponent = (props) => {
  return (
    <>
      {props.type === ButtonType.Normal
        ? ButtonNormal(props)
        : ButtonCustom(props)}
    </>
  );
};

ButtonComponent.propTypes = {
  type: PropTypes.string,
  theme: PropTypes.string,
  text: PropTypes.string.isRequired,
  width: PropTypes.string,
};
