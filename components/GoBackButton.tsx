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
      className="rounded-full whitespace-nowrap font-medium flex items-center gap-[0.375rem] border border-wix-200 py-[0.3125rem] px-6 bg-white text-wix-300 duration-300 hover:bg-wix-300 hover:text-white hover:border-wix-300 w-full justify-center mt-3"
    >
      Back
    </button>
  );
};

export default GoBackButton;
