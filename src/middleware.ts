import {NextResponse} from "next/server";

import type {NextRequest} from "next/server";

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get("accessToken");

  if (
    (!accessToken?.value || accessToken?.value === undefined) &&
    request.nextUrl.pathname !== "/login"
  ) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (!!accessToken?.value && request.nextUrl.pathname === "/login") {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

// Limit the middleware to paths starting with `/`
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
