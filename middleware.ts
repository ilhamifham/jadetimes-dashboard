import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "@/lib/sessions";
import { cookies } from "next/headers";

const protectedRoutes = "/dashboard";
const publicRoutes = "/auth";

export default async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isProtectedRoute = path.startsWith(protectedRoutes);
  const isPublicRoute = path.startsWith(publicRoutes);
  const cookieStore = await cookies();
  const session = cookieStore.get("session")?.value;
  const payload = await decrypt(session);

  if (isProtectedRoute && !payload) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  if (isPublicRoute && payload) {
    return NextResponse.redirect(new URL("/dashboard", request.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
