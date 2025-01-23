import { useRef, useState, useEffect } from "react";

const usePopover = (): [
  boolean,
  React.RefObject<HTMLElement | null>,
  () => void
] => {
  const [popover, setPopover] = useState(false);
  const popoverRef = useRef<HTMLElement>(null);

  function togglePopover() {
    setPopover((prevValue) => !prevValue);
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!popoverRef.current?.contains(event.target as Node)) {
        setPopover(false);
      }
    }

    if (popover) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [popover]);

  return [popover, popoverRef, togglePopover];
};

export default usePopover;
