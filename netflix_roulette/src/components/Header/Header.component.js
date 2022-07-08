import React from "react";
import { Header } from "./Header.styled";
import { TitleComponent as Title } from "../Title/Title.component";
import { LogoComponent as Logo } from "../Logo/Logo.component";
import { InputComponent as Input } from "../Input/Input.component";
import { ButtonComponent as Button } from "../Button/Button.component";

import { ThemeColor, ButtonType } from "../../utils/constants";

export const HeaderComponent = () => {
  return (
    <>
      <Header.Container>
        <Header.BackgroundImage />
        <Header.Top>
          <Logo />
          <Button
            type={ButtonType.Custom}
            theme={ThemeColor.Secondary}
            text={"+ ADD MOVIE"}
            width={"125px"}
          />
        </Header.Top>
        <Header.Content>
          <Title>FIND YOUR MOVIE</Title>
          <Header.FormSearch>
            <Input placeholder={"What do you want to watch?"} />
            <Button
              type={ButtonType.Normal}
              theme={ThemeColor.Primary}
              text={"SEARCH"}
            />
          </Header.FormSearch>
        </Header.Content>
      </Header.Container>
    </>
  );
};
