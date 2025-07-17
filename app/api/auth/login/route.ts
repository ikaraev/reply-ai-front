import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    const { email, password } = await req.json();

    const apiUrl = process.env.API_URL;

    const backendRes = await fetch(`${apiUrl}/api/v1/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
        credentials: 'include'
    });

    const body = await backendRes.text();

    console.log(body)
    const response = new NextResponse(body, {
        status: backendRes.status,
        headers: {
            'Content-Type': backendRes.headers.get('Content-Type') || 'application/json',
        },
    });

    // 👇 Copy Set-Cookie headers if present
    const setCookie = backendRes.headers.get('set-cookie');
    if (setCookie) {
        response.headers.set('set-cookie', setCookie);
    }

    return response;
}
