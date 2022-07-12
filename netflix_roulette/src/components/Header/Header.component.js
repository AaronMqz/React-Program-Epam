import React from "react";
import { Header } from "./Header.styled";
import { TitleComponent as Title } from "../Title/Title.component";
import { LogoComponent as Logo } from "../Logo/Logo.component";
import { InputComponent as Input } from "../Input/Input.component";
import { ButtonComponent as Button } from "../Button/Button.component";
import { ButtonType } from "../../utils/constants";
import { useMovieContextDispatch } from "../../utils/context/context";

export const HeaderComponent = React.memo(() => {
  const { setModalType } = useMovieContextDispatch();

  return (
    <Header.Container>
      <Header.BackgroundImage />
      <Header.Top>
        <Logo />
        <Button
          type={ButtonType.Custom}
          text={"+ ADD MOVIE"}
          width={"125px"}
          onClick={() => setModalType("add")}
        />
      </Header.Top>
      <Header.Content>
        <Title>FIND YOUR MOVIE</Title>
        <Header.FormSearch>
          <Input.Text placeholder={"What do you want to watch?"} />

          <Button
            type={ButtonType.Normal}
            text={"SEARCH"}
            onClick={() => console.log("search")}
          />
        </Header.FormSearch>
      </Header.Content>
    </Header.Container>
  );
});
