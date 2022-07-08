import React from "react";
import PropTypes from "prop-types";
import { Header } from "./Header.styled";
import { TitleComponent as Title } from "../Title/Title.component";
import { LogoComponent as Logo } from "../Logo/Logo.component";
import { InputComponent as Input } from "../Input/Input.component";
import { ButtonComponent as Button } from "../Button/Button.component";
import { ButtonType } from "../../utils/constants";

export const HeaderComponent = ({ handleModal }) => {
  return (
    <>
      <Header.Container>
        <Header.BackgroundImage />
        <Header.Top>
          <Logo />
          <Button
            type={ButtonType.Custom}
            text={"+ ADD MOVIE"}
            width={"125px"}
            onClick={() => handleModal("add")}
          />
        </Header.Top>
        <Header.Content>
          <Title>FIND YOUR MOVIE</Title>
          <Header.FormSearch>
            <Input.Text placeholder={"What do you want to watch?"} />
            <Button
              type={ButtonType.Normal}
              text={"SEARCH"}
              onClick={() => console.log("search function")}
            />
          </Header.FormSearch>
        </Header.Content>
      </Header.Container>
    </>
  );
};

HeaderComponent.propTypes = {
  handleModal: PropTypes.func.isRequired,
};
