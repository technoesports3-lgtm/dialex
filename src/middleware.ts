import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const hasAdminAccess =
    request.cookies.get("admin_access")?.value === "true";

  if (!hasAdminAccess) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
