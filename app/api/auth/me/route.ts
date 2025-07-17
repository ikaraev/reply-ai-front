import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    const apiUrl = process.env.API_URL;
    const cookieHeader = req.headers.get('cookie') || '';

    const backendRes = await fetch(`${apiUrl}/api/v1/auth/me`, {
        method: 'GET',
        headers: {
            'Cookie': cookieHeader,
            'Accept': 'application/json',
        },
        credentials: 'include',
    });

    const data = await backendRes.json();

    if (!backendRes.ok) {
        return NextResponse.json({ message: data.message }, { status: backendRes.status });
    }

    return NextResponse.json(data);
}
