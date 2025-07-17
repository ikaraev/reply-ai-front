import { Middleware } from './BaseMiddleware'
import { NextRequest, NextResponse } from 'next/server'

export class AuthMiddleware implements Middleware {
    async handle(request: NextRequest): Promise<NextResponse> {
        // const { pathname } = request.nextUrl;

        // const publicPaths = [
        //     '/signin',
        //     '/register',
        //     '/api/auth/login',
        //     '/api/auth/register',
        //     '/_next',
        //     '/favicon.ico',
        // ];
        //
        // // Skip auth for public paths
        // if (publicPaths.some(path => pathname.startsWith(path))) {
        //     return NextResponse.next();
        // }

        const token = request.cookies.get('token')?.value;
        const pathname = request.nextUrl.pathname;

        const publicRoutes = ['/login', '/register', '/', '/api/auth/login', '/api/auth/register'];
        const isPublic = publicRoutes.some(route => pathname === route);

        if (!isPublic && !token) {
            const loginUrl = new URL('/login', request.url);
            return NextResponse.redirect(loginUrl);
        }
        //
        if (!token && isPublic) {
            return NextResponse.next();
        }
        const cookieHeader = request.headers.get('cookie') || '';

        // Call backend to validate token
        try {
            const res = await fetch(`${process.env.API_URL}/api/v1/auth/me`, {
                method: 'GET',
                headers: {
                    'Cookie': cookieHeader,
                    'Accept': 'application/json',
                },
                credentials: 'include',
            });

            if (!res.ok) {
                return this.redirectToLogin(request);
            }

            const data = await res.json();

            if (!data) {
                return this.redirectToLogin(request);
            }

            const isAuth = ['/login', '/register'].some(route => pathname === route);

            if (isAuth) {
                const loginUrl = new URL('/dashboard', request.url);
                return NextResponse.redirect(loginUrl);
            }

            // User is authenticated
            return NextResponse.next();
        } catch (error) {
            console.error('Auth check failed:', error);
            return this.redirectToLogin(request);
        }
    }

    private redirectToLogin(request: NextRequest): NextResponse
    {
        const loginUrl = new URL('/login', request.url);
        const response = NextResponse.redirect(loginUrl);

        response.cookies.set('token', '', {
            path: '/',
            maxAge: 0, // Forces deletion
        });

        return response;
    }
}
