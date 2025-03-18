import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { decrypt } from "@/lib/sessions";

const protectedRoutes = "/dashboard";
const publicRoutes = "/auth";

export default async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isProtectedRoute = path.startsWith(protectedRoutes);
  const isPublicRoute = path.startsWith(publicRoutes);
  const cookieStore = await cookies();
  const session = cookieStore.get("session")?.value;
  const payload = await decrypt(session);

  if (isProtectedRoute && !payload?.userId) {
    return NextResponse.redirect(new URL("/auth/login", request.nextUrl));
  }

  if (isPublicRoute && payload?.userId) {
    return NextResponse.redirect(new URL("/dashboard/posts", request.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
