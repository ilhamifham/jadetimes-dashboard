"use client";

import Link from "next/link";
import { useState, useActionState } from "react";
import { logIn } from "@/actions/formActions";
import { Hidden, Visible } from "@wix/wix-ui-icons-common";
import FormInput from "@/components/FormInput";
import FormButton from "./FormButton";

const LogInForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [state, logInAction, pending] = useActionState(logIn, undefined);

  function toggleVisible() {
    setIsVisible((prev) => !prev);
  }

  return (
    <form className="flex flex-col gap-4 max-w-80 mx-auto" action={logInAction}>
      {state?.errorMessage && (
        <div className="text-sm text-red-600 border border-red-200 text-center p-2 rounded-md bg-red-50">
          {state.errorMessage}
        </div>
      )}
      <FormInput
        type="email"
        name="email"
        placeholder="Email"
        error={state?.email as string}
        defaultValue={state?.emailValue as string}
      />
      {state?.email && <p className="text-sm text-red-600">{state.email}</p>}
      <div className="relative">
        <FormInput
          type={isVisible ? "text" : "password"}
          name="password"
          placeholder="Password"
          error={state?.password as string}
        />
        <button
          type="button"
          className="absolute py-[0.125rem] bottom-[0.375rem] right-0 text-neutral-500"
          onClick={toggleVisible}
        >
          {isVisible ? (
            <Hidden className="w-6 h-6" />
          ) : (
            <Visible className="w-6 h-6" />
          )}
        </button>
      </div>
      {state?.password && (
        <p className="text-sm text-red-600">{state.password}</p>
      )}
      <Link
        href="forgot-password"
        className="text-sm underline w-fit mt-6 whitespace-nowrap"
      >
        Forgot Password?
      </Link>
      <FormButton status={pending}>
        {pending ? "Loading..." : "Log In"}
      </FormButton>
    </form>
  );
};

export default LogInForm;
