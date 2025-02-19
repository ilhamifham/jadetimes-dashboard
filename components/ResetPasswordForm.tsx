"use client";

import { useActionState } from "react";
import { resetPasswordAction } from "@/actions/formActions";

const ResetPasswordForm = () => {
  const [state, action, pending] = useActionState(resetPasswordAction, null);

  return (
    <form className="flex flex-col gap-4" action={action}>
      <div>
        <input
          type="email"
          name="email"
          id="email"
          className="input"
          placeholder="Email"
          defaultValue={state?.data as string}
          // required
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
