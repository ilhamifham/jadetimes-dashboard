"use server";

import { redirect } from "next/navigation";
import { createSession, deleteSession } from "@/lib/sessions";
import { user } from "@/db/user";

const emailRequired = "Email required";
const passwordRequired = "Password required";
const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// login
export async function logIn(prevState: any, formData: FormData) {
  const formvalues = Object.fromEntries(formData);
  const { email, password } = formvalues;

  if (!email && !password) {
    return {
      email: emailRequired,
      password: passwordRequired,
    };
  }

  if (!email) {
    return {
      email: emailRequired,
      password: passwordRequired,
    };
  }

  if (!regex.test(email as string)) {
    return {
      email: "Invalid email",
      password: passwordRequired,
    };
  }

  if (!password) {
    return {
      emailValue: email,
      password: passwordRequired,
    };
  }

  if (email !== user.email) {
    return { errorMessage: "User does not exits" };
  }

  if (password !== user.password) {
    return {
      emailValue: email,
      password: "Password does not match",
    };
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

  if (!email) {
    return {
      email: emailRequired,
    };
  }

  if (!regex.test(email as string)) {
    return {
      email: "Invalid email",
    };
  }

  if (email !== user.email) {
    return {
      errorMessage: "Email does not exits",
    };
  }

  return {
    successMesaage: "Email sent successfully",
  };
}
