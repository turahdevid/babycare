import { NextResponse, type NextRequest } from "next/server";
import { auth } from "~/server/auth/edge";

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const session = await auth();
  const isLoggedIn = Boolean(session?.user);

  if (pathname === "/" && isLoggedIn) {
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
  }

  const requiresAuth =
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/reservation") ||
    pathname.startsWith("/customer") ||
    pathname.startsWith("/treatment") ||
    pathname.startsWith("/report") ||
    pathname.startsWith("/user") ||
    pathname.startsWith("/account");

  if (requiresAuth && !isLoggedIn) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/dashboard/:path*",
    "/reservation/:path*",
    "/customer/:path*",
    "/treatment/:path*",
    "/report",
    "/user/:path*",
    "/account/:path*",
  ],
};
