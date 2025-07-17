import { NextRequest, NextResponse } from 'next/server'
import type { Middleware } from './BaseMiddleware'

export async function runMiddlewares(
    request: NextRequest,
    middlewares: Middleware[]
): Promise<NextResponse> {
    for (const mw of middlewares) {
        const result = await mw.handle(request)
        if (result instanceof NextResponse) {
            return result // short-circuit if one middleware returns a response
        }
    }

    return NextResponse.next() // no middleware returned a response → continue
}
