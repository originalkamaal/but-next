import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server";

export default withAuth(
  
  function middleware(req) {
    return null;
  },
  {
    callbacks: {
      authorized: ({ token }) => token?.role === "admin"
    },

  }
)

export const config = { matcher: ['/admin/:path*'] }