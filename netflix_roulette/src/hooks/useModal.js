import { useState } from "react";

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [modalType, setModalType] = useState("");

  const toggle = (type) => {
    setIsShowing(!isShowing);
    setModalType(type);
    hideBodyScroll(!isShowing);
  };

  const hideBodyScroll = (isShowing) => {
    isShowing
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  };

  return {
    isShowing,
    modalType,
    toggle,
  };
};

export default useModal;
