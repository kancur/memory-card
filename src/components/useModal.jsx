import { useState } from "react";

const useModal = (customCloseHandler) => {
  const [isShowing, setIsShowing] = useState(false);

  function show() {
    setIsShowing(true);
  }

  function hide() {
    setIsShowing(false);
    customCloseHandler();
  }

  return [isShowing, show, hide];
};

export default useModal;
