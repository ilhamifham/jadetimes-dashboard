import { NextRequest, NextResponse } from "next/server";
import { verifySession } from "@/lib/sessions";

const protectedRoutes = "/dashboard";
const publicRoutes = "/auth";

export default async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isProtectedRoute = path.startsWith(protectedRoutes);
  const isPublicRoute = path.startsWith(publicRoutes);
  const payload = await verifySession();

  if (isProtectedRoute && !payload?.userId) {
    return NextResponse.redirect(new URL("/auth/login", request.nextUrl));
  }

  if (isPublicRoute && payload?.userId) {
    return NextResponse.redirect(new URL("/dashboard/posts", request.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico.*\\.png$).*)"],
};
