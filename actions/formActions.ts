"use server";

import { redirect } from "next/navigation";

const user = {
  email: "ilham@gmail.com",
  password: "12345",
};

export async function logInAction(prevState: any, formData: FormData) {
  const formvalues = Object.fromEntries(formData);
  const { email, password } = formvalues;

  if (!email && !password) {
    return {
      emailMessage: "Email required",
      passwordMessage: "Password required",
    };
  }

  if (email !== user.email) {
    return {
      emailMessage: "Email does not exits",
      data: email,
    };
  }

  if (password !== user.password) {
    return {
      passwordMessage: "Password does not match",
      data: email,
    };
  }

  redirect("/dashboard/posts");
}

export async function resetPasswordAction(prevState: any, formData: FormData) {
  const formvalues = Object.fromEntries(formData);
  const { email } = formvalues;

  if (!email) {
    return {
      emailMessage: "Email required",
    };
  }

  if (email !== user.email) {
    return {
      emailMessage: "Email does not exits",
      data: email,
    };
  }
}
