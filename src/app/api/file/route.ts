import { copy, del, put } from '@vercel/blob';
import { NextResponse } from 'next/server';

export async function POST(request: Request): Promise<NextResponse>
{
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get('filename') || '';

  if (filename && request.body)
  {
    const blob = await put(filename, request.body,
      {
        access: 'public'
        // multipart: true => Heavy upload
      }
    );

    return NextResponse.json(blob);
  }
  else
  {
    return NextResponse.json({ error: 'Filename is required' }, { status: 400 });
  }
}

export async function PUT(request: Request)
{
  const { searchParams } = new URL(request.url);
  const  fromUrl = searchParams.get('fromUrl') || '';
  const  toPathname = searchParams.get('toPathname') || '';

  const blob = await copy(fromUrl, toPathname, { access: 'public' });

  return Response.json(blob);
};

export async function DELETE(request: Request)
{
  const { searchParams } = new URL(request.url);
  const urlToDelete = searchParams.get('url') as string;
  await del(urlToDelete);

  return new Response();
}
