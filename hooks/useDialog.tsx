import { useState, useEffect } from "react";

const useDialog = (): [boolean, () => void, () => void] => {
  const [dialog, setDialog] = useState(false);

  function openDialog() {
    setDialog(true);
  }

  function closeDialog() {
    setDialog(false);
  }

  useEffect(() => {
    if (dialog) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.removeAttribute("style");
    }

    return () => {
      document.body.removeAttribute("style");
    };
  }, [dialog]);

  return [dialog, openDialog, closeDialog];
};

export default useDialog;
