"use client";

import { useActionState } from "react";
import { resetPassword } from "@/actions/formActions";

const ResetPasswordForm = () => {
  const [state, resetPasswordAction, pending] = useActionState(
    resetPassword,
    undefined
  );

  return (
    <form className="flex flex-col gap-4" action={resetPasswordAction}>
      {state?.errorMessage && (
        <div className="text-sm text-red-600 border border-red-200 text-center p-2 rounded-md bg-red-50">
          {state.errorMessage}
        </div>
      )}
      {state?.successMesaage && (
        <div className="text-sm text-green-600 border border-green-200 text-center p-2 rounded-md bg-green-50">
          {state.successMesaage}
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
