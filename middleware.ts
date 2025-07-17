import { NextRequest, NextResponse } from 'next/server'
import { runMiddlewares } from '@/app/middleware/runner'
import { AuthMiddleware } from '@/app/middleware/AuthMiddleware'
// import { LoggerMiddleware } from './middleware/LoggerMiddleware'

export async function middleware(request: NextRequest): Promise<NextResponse> {
    const middlewareChain = [
        // new LoggerMiddleware(),
        new AuthMiddleware()
    ]

    return await runMiddlewares(request, middlewareChain)
}

export const config = {
    matcher: ['/((?!api|_next|static|favicon.ico).*)']
}
