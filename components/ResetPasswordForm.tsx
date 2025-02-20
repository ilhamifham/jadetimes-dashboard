"use client";

import { useActionState } from "react";
import { resetPasswordAction } from "@/actions/formActions";

const ResetPasswordForm = () => {
  const [state, action, pending] = useActionState(resetPasswordAction, null);

  return (
    <form className="flex flex-col gap-4" action={action}>
      {state?.message && (
        <div className="text-sm text-red-600 border border-red-200 text-center p-2 rounded-md bg-red-50">
          {state.message}
        </div>
      )}
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
        />
      </div>
      {state?.emailMessage && (
        <p className="text-sm text-red-600">{state.emailMessage}</p>
      )}
      <button
        className="btn primary py-2 justify-center mt-6"
        disabled={pending}
      >
        {pending ? "Sending..." : "Send"}
      </button>
    </form>
  );
};

export default ResetPasswordForm;
