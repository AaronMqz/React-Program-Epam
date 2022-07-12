import React from "react";
import { Delete } from "./Delete.styled";
import { TitleComponent as Title } from "../Title/Title.component";
import { ButtonComponent as Button } from "../Button/Button.component";
import { ButtonType } from "../../utils/constants";

export const DeleteComponent = () => {
  return (
    <>
      <Delete.Container>
        <Title>DELETE MOVIE</Title>
        <Delete.Content>
          Are you sure you want to delete this movie?
        </Delete.Content>
        <Delete.Footer>
          <Button
            text={"CONFIRM"}
            type={ButtonType.Normal}
            onClick={() => console.log("confirm function")}
          />
        </Delete.Footer>
      </Delete.Container>
    </>
  );
};
