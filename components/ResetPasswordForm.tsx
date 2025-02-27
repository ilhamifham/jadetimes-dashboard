"use client";

import { useActionState } from "react";
import { resetPassword } from "@/actions/formActions";
import FormInput from "@/components/FormInput";
import FormButton from "@/components/FormButton";

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
      <FormInput
        type="email"
        name="email"
        placeholder="Email"
        error={state?.email as string}
      />
      {state?.email && <p className="text-sm text-red-600">{state.email}</p>}
      <FormButton status={pending}>
        {pending ? "Sending..." : "Send"}
      </FormButton>
    </form>
  );
};

export default ResetPasswordForm;
