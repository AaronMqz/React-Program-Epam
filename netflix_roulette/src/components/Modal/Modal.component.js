import React, { useEffect } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "./Modal.styled";

export const ModalComponent = ({ isShowing, hide, children }) => {
  return (
    <>
      {isShowing &&
        ReactDOM.createPortal(
          <Modal.Container>
            <Modal.Content>
              <Modal.IconClose onClick={() => hide("close")}>
                <FontAwesomeIcon icon={faXmark} />
              </Modal.IconClose>
              {children}
            </Modal.Content>
          </Modal.Container>,
          document.body
        )}
    </>
  );
};

ModalComponent.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
};
