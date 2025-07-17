import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    const body = await req.json();

    const apiUrl = process.env.API_URL;

    const cookieHeader = req.headers.get('cookie') || '';

    const backendRes = await fetch(`${apiUrl}/api/v1/integrations`, {
        headers: {
            'Cookie': cookieHeader,
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(body),
        credentials: 'include'
    });

    const data = await backendRes.text();

    const response = new NextResponse(data, {
        status: backendRes.status,
        headers: {
            'Content-Type': backendRes.headers.get('Content-Type') || 'application/json',
        },
    });

    return response;
}

export async function GET(req: NextRequest) {
    const apiUrl = process.env.API_URL;

    const cookieHeader = req.headers.get('cookie') || '';

    const backendRes = await fetch(`${apiUrl}/api/v1/integrations`, {
        headers: {
            'Cookie': cookieHeader,
            'Content-Type': 'application/json'
        },
        method: 'GET',
        credentials: 'include'
    });

    const data = await backendRes.text();

    const response = new NextResponse(data, {
        status: backendRes.status,
        headers: {
            'Content-Type': backendRes.headers.get('Content-Type') || 'application/json',
        },
    });

    return response;
}
