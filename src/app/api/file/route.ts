import { copy, del, put } from '@vercel/blob';
import { NextResponse } from 'next/server';

export async function POST(request: Request): Promise<NextResponse>
{
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get('filename') || '';

  if (filename && request.body)
  {
    const blob = await put(filename, request.body, {
      access: 'public',
      cacheControlMaxAge: 0 // Disable caching in the browser and edge
    });

    const response = NextResponse.json(blob);
    response.headers.set('Cache-Control', 'no-store');
    return response;
  }
  else
  {
    return NextResponse.json({ error: 'Filename is required' }, { status: 400 });
  }
}

export async function PUT(request: Request)
{
  const { searchParams } = new URL(request.url);
  const fromUrl = searchParams.get('fromUrl') || '';
  const toPathname = searchParams.get('toPathname') || '';

  const blob = await copy(fromUrl, toPathname, { access: 'public' });

  const response = NextResponse.json(blob);
  response.headers.set('Cache-Control', 'no-store');
  return response;
};

export async function DELETE(request: Request)
{
  const { searchParams } = new URL(request.url);
  const urlToDelete = searchParams.get('url') as string;
  await del(urlToDelete);

  const response = new Response();
  response.headers.set('Cache-Control', 'no-store');
  return response;
}
