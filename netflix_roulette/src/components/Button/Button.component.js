import React from "react";
import PropTypes from "prop-types";
import { Button } from "./Button.styled";

const typedButton = {
  Normal: (props) => <Button.Normal {...props} />,
  Custom: (props) => <Button.Custom {...props} />,
  Secondary: (props) => <Button.Secondary {...props} />,
  Icon: (props) => <Button.Icon {...props} />,
};

export const ButtonComponent = ({ type, text, width, onClick, icon }) => {
  const Wrapper = typedButton[type];

  return (
    <>
      {
        <Wrapper width={width} onClick={onClick}>
          {text}
          {icon}
        </Wrapper>
      }
    </>
  );
};

ButtonComponent.defaultProps = {
  width: "120px",
};

ButtonComponent.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string,
  width: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.object,
};
