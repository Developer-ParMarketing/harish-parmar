import { NextResponse } from "next/server";

const PUBLIC_ROUTES = ["/admin/login", "/admin/signup"];

export async function middleware(req) {
    const { pathname } = req.nextUrl;

    // Only run on /admin routes
    if (!pathname.startsWith("/admin")) {
        return NextResponse.next();
    }

    // Allow login and signup through without auth
    if (PUBLIC_ROUTES.includes(pathname)) {
        return NextResponse.next();
    }

    // Check for the auth cookie
    const token = req.cookies.get("adminToken")?.value;

    if (!token) {
        const loginUrl = new URL("/admin/login", req.url);
        loginUrl.searchParams.set("from", pathname);
        return NextResponse.redirect(loginUrl);
    }

    // Verify token with backend
    try {
        const res = await fetch("http://localhost:5000/api/auth/me", {
            headers: {
                Cookie: `adminToken=${token}`,
            },
        });

        if (!res.ok) {
            const loginUrl = new URL("/admin/login", req.url);
            return NextResponse.redirect(loginUrl);
        }

        return NextResponse.next();
    } catch {
        // Backend unreachable — redirect to login
        const loginUrl = new URL("/admin/login", req.url);
        return NextResponse.redirect(loginUrl);
    }
}

export const config = {
    matcher: ["/admin/:path*"],
};