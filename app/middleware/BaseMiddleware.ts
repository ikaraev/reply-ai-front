import { NextRequest, NextResponse } from 'next/server'

export interface Middleware {
    handle(request: NextRequest): NextResponse | Promise<NextResponse | void> | void
}
