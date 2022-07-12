import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "./Modal.styled";
import { useMovieContextDispatch } from "../../utils/context/context";

export const ModalComponent = ({ children }) => {
  const { setModalType } = useMovieContextDispatch();

  return (
    <>
      {ReactDOM.createPortal(
        <Modal.Container>
          <Modal.Content>
            <Modal.IconClose onClick={() => setModalType("close")}>
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
  children: PropTypes.object.isRequired,
};
