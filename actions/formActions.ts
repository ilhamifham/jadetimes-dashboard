"use server";

import { redirect } from "next/navigation";

const user = {
  email: "ilham@gmail.com",
  password: "12345",
};

const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/;

function validateEmail(email: string) {
  if (!email) return "Email required";
  if (!regEx.test(email)) return "Email is invalid";
  return null;
}

function validatePassword(password: string) {
  if (!password) return "Password required";
  return null;
}

export async function logInAction(prevState: any, formData: FormData) {
  const formvalues = Object.fromEntries(formData);
  const { email, password } = formvalues;
  const emailMessage = validateEmail(email as string);
  const passwordMessage = validatePassword(password as string);

  if (emailMessage || passwordMessage) {
    return { emailMessage, passwordMessage, data: email };
  }

  if (email !== user.email) {
    return {
      message: "User does not exits",
    };
  }

  if (password !== user.password) {
    return { passwordMessage: "Password does not match", data: email };
  }

  redirect("/dashboard/posts");
}

export async function resetPasswordAction(prevState: any, formData: FormData) {
  const formvalues = Object.fromEntries(formData);
  const { email } = formvalues;
  const emailMessage = validateEmail(email as string);

  if (emailMessage) return { emailMessage };

  if (email !== user.email) {
    return {
      message: "Email does not exits",
    };
  }
}
