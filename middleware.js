import { NextResponse } from "next/server";
import Cookies from "js-cookie";

export function middleware(request) {
  const isThankyouPage = request.url.includes("/thankyou");
  const hasCookie = request.cookies.get("myCookieName");
  console.log(hasCookie, "jojo");
  if (isThankyouPage && hasCookie) {
    return NextResponse.next();
  }

  // Redirect to home page if it's the thank you page but the cookie is not set
  if (isThankyouPage && !hasCookie) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  console.log("Allowing the request to proceed on the thank you page");
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api/auth).*)(.+)"],
};
