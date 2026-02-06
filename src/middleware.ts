import { NextResponse, type NextRequest } from "next/server";

function hasAuthCookie(req: NextRequest): boolean {
  return Boolean(
    req.cookies.get("authjs.session-token") ??
      req.cookies.get("__Secure-authjs.session-token"),
  );
}

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const isLoggedIn = hasAuthCookie(req);

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
