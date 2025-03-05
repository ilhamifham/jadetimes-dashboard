import { NextRequest, NextResponse } from "next/server";
import { createSession } from "@/lib/sessions";
import { prisma } from "@/lib/prisma";

type formData = {
  email: string;
  password: string;
};

export async function POST(request: NextRequest) {
  const { email, password }: formData = await request.json();
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const userDetail = await prisma.user.findUnique({
    where: { email: email },
  });

  if (!email && !password) {
    return NextResponse.json(
      {
        email: "Email required",
        password: "Password required",
      },
      { status: 400 }
    );
  }

  if (!email) {
    return NextResponse.json(
      {
        email: "Email required",
      },
      { status: 400 }
    );
  }

  if (!regex.test(email) && !password) {
    return NextResponse.json(
      {
        email: "Invalid email",
        password: "Password required",
      },
      { status: 400 }
    );
  }

  if (!regex.test(email)) {
    return NextResponse.json(
      {
        email: "Invalid email",
      },
      { status: 400 }
    );
  }

  if (!password) {
    return NextResponse.json(
      {
        password: "Password required",
      },
      { status: 400 }
    );
  }

  if (!userDetail || userDetail.password !== password) {
    return NextResponse.json(
      {
        email: "Check your email",
        password: "Check your password",
      },
      { status: 401 }
    );
  }

  await createSession(userDetail.id);

  return NextResponse.redirect(new URL("/dashboard/posts", request.nextUrl), 302);
}
