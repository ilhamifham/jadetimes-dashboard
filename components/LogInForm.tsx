"use client";

import Link from "next/link";
import { useActionState } from "react";
import { logIn } from "@/actions/formActions";
import InputPassword from "@/components/InputPassword";

const LogInForm = () => {
  const [state, logInAction, pending] = useActionState(logIn, undefined);

  return (
    <form className="flex flex-col gap-4 max-w-80 mx-auto" action={logInAction}>
      {state?.errorMessage && (
        <div className="text-sm text-red-600 border border-red-200 text-center p-2 rounded-md bg-red-50">
          {state.errorMessage}
        </div>
      )}
      <div>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className={
            state?.email
              ? "input border-b-red-600 focus:border-b-red-600"
              : "input"
          }
          defaultValue={state?.emailValue as string}
        />
      </div>
      {state?.email && <p className="text-sm text-red-600">{state.email}</p>}
      <InputPassword validate={state?.password} />
      {state?.password && (
        <p className="text-sm text-red-600">{state.password}</p>
      )}
      <Link
        href="forgot-password"
        className="text-sm underline w-fit my-6 whitespace-nowrap"
      >
        Forgot Password?
      </Link>
      <button className="btn primary py-2 justify-center" disabled={pending}>
        {pending ? "Loading..." : "Log In"}
      </button>
    </form>
  );
};

export default LogInForm;
