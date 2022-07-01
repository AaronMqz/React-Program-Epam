import React from "react";
import { Title } from "./Title.styled";

export const TitleComponent = ({ children }) => {
  return (
    <>
      <Title>{children}</Title>
    </>
  );
};
