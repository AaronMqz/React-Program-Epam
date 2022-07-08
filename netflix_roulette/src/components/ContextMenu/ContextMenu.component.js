import React from "react";
import PropTypes from "prop-types";
import { ContextMenu } from "./ContextMenu.styled";

export const ContextMenuComponent = ({ handleClick }) => {
  return (
    <ContextMenu.Container>
      <ContextMenu.Label onClick={() => handleClick("edit")}>
        Edit
      </ContextMenu.Label>
      <ContextMenu.Label onClick={() => handleClick("delete")}>
        Delete
      </ContextMenu.Label>
    </ContextMenu.Container>
  );
};

ContextMenuComponent.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
