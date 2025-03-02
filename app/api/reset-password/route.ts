import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type formData = {
  email: string;
};

export async function POST(request: NextRequest) {
  const { email }: formData = await request.json();
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const userDetail = await prisma.user.findUnique({
    where: { email: email },
  });

  if (!email) {
    return NextResponse.json(
      {
        email: "Email required",
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

  if (!userDetail) {
    return NextResponse.json(
      {
        email: "Check your email",
      },
      { status: 401 }
    );
  }

  return NextResponse.json(
    {
      email: "Email sent successfully",
    },
    { status: 200 }
  );
}
