// import {NextResponse} from "next/server";

// import type {NextRequest} from "next/server";

// export function middleware(request: NextRequest) {
//   if (request.nextUrl.pathname.startsWith("/")) {
//     const accessToken = request.cookies.get("accessToken");

//     if (!accessToken && request.nextUrl.pathname !== "/auth/login") {
//       return NextResponse.redirect(new URL("/auth/login", request.url));
//     }

//     // if (accessToken && request.nextUrl.pathname !== "/workspace") {
//     //   return NextResponse.redirect(new URL("/workspace", request.url));
//     // }
//   }
//   // if (request.nextUrl.pathname.startsWith("/auth")) {
//   //   const accessToken = request.cookies.get("accessToken");

//   //   if (!accessToken && request.nextUrl.pathname !== "/auth/login") {
//   //     return NextResponse.redirect(new URL("/auth/login", request.url));
//   //   }
//   // }
// }

// // Limit the middleware to paths starting with `/`
// export const config = {
//   matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
// };
