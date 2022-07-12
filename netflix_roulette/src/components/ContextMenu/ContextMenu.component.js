import React from "react";
import { ContextMenu } from "./ContextMenu.styled";
import { useMovieContextDispatch } from "../../utils/context/context";

export const ContextMenuComponent = () => {
  const { setModalType } = useMovieContextDispatch();

  const handleClick = (e) => {
    setModalType(e.target.textContent.toLowerCase());
  };

  return (
    <ContextMenu.Container>
      <ContextMenu.Label onClick={handleClick}>Edit</ContextMenu.Label>
      <ContextMenu.Label onClick={handleClick}>Delete</ContextMenu.Label>
    </ContextMenu.Container>
  );
};
