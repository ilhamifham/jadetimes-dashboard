"use client";

import Link from "next/link";
import { useActionState } from "react";
import { logInAction } from "@/actions/formActions";
import InputPassword from "@/components/InputPassword";

const LogInForm = () => {
  const [state, action, pending] = useActionState(logInAction, null);

  return (
    <form className="flex flex-col gap-4 max-w-80 mx-auto" action={action}>
      <div>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className={
            state?.emailMessage
              ? "input border-b-red-600 focus:border-b-red-600"
              : "input"
          }
          required
          defaultValue={state?.data}
        />
      </div>
      {state?.emailMessage && (
        <p className="text-sm text-red-600">{state.emailMessage}</p>
      )}
      <InputPassword validate={state?.passwordMessage} />
      {state?.passwordMessage && (
        <p className="text-sm text-red-600">{state.passwordMessage}</p>
      )}
      <Link
        href="forgot-password"
        className="text-sm underline w-fit my-6 whitespace-nowrap"
      >
        Forgot Password?
      </Link>
      <button className="btn primary py-2 justify-center" disabled={pending}>
        {pending ? "Submitting..." : "Log In"}
      </button>
    </form>
  );
};

export default LogInForm;
