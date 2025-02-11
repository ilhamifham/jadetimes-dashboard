"use client";

import { useSearchParams } from "next/navigation";
import LogIn from "@/components/LogIn";
import SignUp from "@/components/SignUp";
import ForgotPassword from "@/components/ForgotPassword";

const Auth = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("view");

  return (
    <section className="p-4 custom-center">
      <div className="w-full">
        {search === "sign-up" ? (
          <SignUp />
        ) : search === "forgot-password" ? (
          <ForgotPassword />
        ) : (
          <LogIn />
        )}
      </div>
    </section>
  );
};

export default Auth;
