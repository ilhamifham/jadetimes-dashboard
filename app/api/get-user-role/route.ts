import { NextResponse } from "next/server";
import { verifySession } from "@/lib/sessions";

export async function GET() {
  const session = await verifySession();

  if (!session?.userRole) {
    return NextResponse.json({
      error: "Unauthorized",
    });
  }

  return NextResponse.json({
    role: session?.userRole,
  });
}
