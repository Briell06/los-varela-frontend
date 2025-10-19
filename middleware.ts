import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/") {
    const url = request.nextUrl.clone();

    url.pathname = "/productos";

    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
