"use client";

import { useState, useRef, FormEvent } from "react";
import { resetPassword } from "@/lib/auth";
import FormInput from "@/components/FormInput";
import Button from "@/components/Button";

const ResetPasswordForm = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const [error, setError] = useState<{ email?: string; success?: string; server?: string }>();
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: FormEvent) {
    await resetPassword(event, emailRef, regex, setError, setIsLoading);
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      {error?.server && <div className="text-sm text-red-600 border border-red-200 text-center p-2 rounded-md bg-red-50">{error.server}</div>}
      {error?.success && <div className="text-sm text-green-600 border border-green-200 text-center p-2 rounded-md bg-green-50">{error.success}</div>}
      <FormInput type="email" name="email" placeholder="Email" error={error?.email} ref={emailRef} />
      {error?.email && <p className="text-sm text-red-600">{error.email}</p>}
      <Button type="primary" size="big" className="justify-center mt-6" status={isLoading}>
        {isLoading ? "Sending..." : "Send"}
      </Button>
    </form>
  );
};

export default ResetPasswordForm;
