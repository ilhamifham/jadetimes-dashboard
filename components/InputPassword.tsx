"use client";

import { useState } from "react";
import { Hidden, Visible } from "@wix/wix-ui-icons-common";

const InputPassword = ({ validate }: { validate: string | undefined }) => {
  const [isVisible, setIsVisible] = useState(false);

  function toggleVisible() {
    setIsVisible((prev) => !prev);
  }

  return (
    <div className="relative">
      <input
        type={isVisible ? "text" : "password"}
        name="password"
        id="password"
        placeholder="Password"
        className={
          validate
            ? "input pr-6 border-b-red-600 focus:border-b-red-600"
            : "input pr-6"
        }
      />
      <button
        type="button"
        className="absolute py-[0.125rem] bottom-[0.375rem] right-0 text-neutral-500"
        onClick={toggleVisible}
      >
        {isVisible ? <Hidden /> : <Visible />}
      </button>
    </div>
  );
};

export default InputPassword;
