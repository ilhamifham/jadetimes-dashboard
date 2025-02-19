"use client";

import { useRouter } from "next/navigation";

const GoBackButton = () => {
  const router = useRouter();

  function handleGoBack() {
    router.back();
  }

  return (
    <button
      onClick={handleGoBack}
      className="btn secondary py-[0.4375rem] justify-center border border-wix-300 w-full mt-4"
    >
      Back
    </button>
  );
};

export default GoBackButton;
