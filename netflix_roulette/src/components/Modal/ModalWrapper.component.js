import React from "react";
import PropTypes from "prop-types";
import { FormComponent as Form } from "../Form/Form.component";
import { DeleteComponent as Delete } from "../Delete/Delete.component";

export const ModalWrapper = ({ type }) => {
  const modalType = {
    add: (props) => <Form.Add {...props} />,
    edit: (props) => <Form.Edit {...props} />,
    delete: (props) => <Delete {...props} />,
  };
  const Wrapper = modalType[type];
  return <Wrapper />;
};

ModalWrapper.propTypes = {
  type: PropTypes.string.isRequired,
};
