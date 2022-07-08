import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { ThemeColor } from "../../utils/constants";
import { Input, Icon, InputWrapper } from "./Input.styled";

const Date = ({ placeholder }) => {
  return (
    <InputWrapper>
      <Input type="date" placeholder={placeholder} />
      <Icon>
        <FontAwesomeIcon icon={faCalendarDays} color={ThemeColor.Primary} />
      </Icon>
    </InputWrapper>
  );
};

const Text = ({ placeholder }) => {
  return <Input type="text" placeholder={placeholder} />;
};

Date.propTypes = {
  placeholder: PropTypes.string,
};

Text.propTypes = {
  placeholder: PropTypes.string,
};

export const InputComponent = {
  Text,
  Date,
};
