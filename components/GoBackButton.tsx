"use client";

import { useRouter } from "next/navigation";

const GoBackButton = ({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className: string;
}>) => {
  const router = useRouter();

  function handleGoBack() {
    router.back();
  }

  return (
    <button onClick={handleGoBack} className={className}>
      {children}
    </button>
  );
};

export default GoBackButton;
