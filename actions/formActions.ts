"use server";

import { redirect } from "next/navigation";
import { createSession, deleteSession } from "@/lib/sessions";
import { user } from "@/db/user";

function validateEmail(email: string) {
  if (!email) return "Email required";
}

function validatePassword(password: string) {
  if (!password) return "Password required";
}

// login
export async function logIn(prevState: any, formData: FormData) {
  const formvalues = Object.fromEntries(formData);
  const { email, password } = formvalues;
  const emailValue = email as string;
  const passwordValue = password as string;
  const emailMessage = validateEmail(emailValue);
  const passwordMessage = validatePassword(passwordValue);

  if (emailMessage || passwordMessage) {
    return { emailMessage, passwordMessage, emailValue };
  }

  if (email !== user.email) {
    return { errorMessage: "User does not exits" };
  }

  if (password !== user.password) {
    return { passwordMessage: "Password does not match", emailValue };
  }

  await createSession(user.id, user.role);

  redirect("/dashboard/posts");
}

// logout
export async function logout() {
  await deleteSession();
  redirect("/auth/login");
}

// reset password
export async function resetPassword(prevState: any, formData: FormData) {
  const formvalues = Object.fromEntries(formData);
  const { email } = formvalues;
  const emailValue = email as string;
  const emailMessage = validateEmail(emailValue);

  if (emailMessage) return { emailMessage };

  if (email !== user.email) {
    return {
      errorMessage: "Email does not exits",
    };
  }

  return {
    successMesaage: "Email sent successfully",
  };
}
