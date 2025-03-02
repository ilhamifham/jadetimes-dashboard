"use client";

import Link from "next/link";
import { useState, useRef, FormEvent } from "react";
import { Hidden, Visible } from "@wix/wix-ui-icons-common";
import FormInput from "@/components/FormInput";
import FormButton from "@/components/FormButton";
import { logIn } from "@/lib/auth";

const LogInForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState<{ email?: string; password?: string; server?: string }>();
  const [isLoading, setIsLoading] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  function toggleVisible() {
    setIsVisible((prevVisible) => !prevVisible);
  }

  async function handleSubmit(event: FormEvent) {
    await logIn(event, emailRef, passwordRef, setError, setIsLoading, regex);
  }

  return (
    <form className="flex flex-col gap-4 max-w-80 mx-auto" onSubmit={handleSubmit}>
      {error?.server && <div className="text-sm text-red-600 border border-red-200 text-center p-2 rounded-md bg-red-50">{error.server}</div>}
      <FormInput type="email" name="email" placeholder="Email" error={error?.email} ref={emailRef} />
      {error?.email && <p className="text-sm text-red-600">{error.email}</p>}
      <div className="relative">
        <FormInput type={isVisible ? "text" : "password"} name="password" placeholder="Password" error={error?.password} ref={passwordRef} />
        <button type="button" className="absolute py-[0.125rem] bottom-[0.375rem] right-0 text-neutral-500" onClick={toggleVisible}>
          {isVisible ? <Hidden className="w-6 h-6" /> : <Visible className="w-6 h-6" />}
        </button>
      </div>
      {error?.password && <p className="text-sm text-red-600">{error.password}</p>}
      <Link href="forgot-password" className="text-sm underline w-fit mt-6 whitespace-nowrap">
        Forgot Password?
      </Link>
      <FormButton status={isLoading}>{isLoading ? "Loading..." : "Log In"}</FormButton>
    </form>
  );
};

export default LogInForm;
