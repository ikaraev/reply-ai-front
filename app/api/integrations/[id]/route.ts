import { NextRequest, NextResponse } from 'next/server';

// This should come from your DB in real use
let integrations: { id: number; platform: string; storeUrl: string }[] = [
    { id: 1, platform: 'shopify', storeUrl: 'store1.myshopify.com' },
    { id: 2, platform: 'woocommerce', storeUrl: 'example.com' },
];

export async function GET(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
console.log(id)
    const apiUrl = process.env.API_URL;

    const cookieHeader = req.headers.get('cookie') || '';

    const backendRes = await fetch(`${apiUrl}/api/v1/integrations/${id}`, {
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

export async function DELETE(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    const id = parseInt(params.id);
    integrations = integrations.filter((i) => i.id !== id);
    return NextResponse.json({ success: true });
}

export async function PUT(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    const id = parseInt(params.id);
    const body = await req.json();

    const index = integrations.findIndex((i) => i.id === id);
    if (index === -1) {
        return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    integrations[index] = { ...integrations[index], ...body };
    return NextResponse.json(integrations[index]);
}
