import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';

function toSlug(input: string) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export async function GET(_req: Request, { params }: { params: { id: string[] } }) {
  const joined = params.id.join('/');
  const decoded = decodeURIComponent(joined);
  const base = decoded.replace(/\.(jpg|jpeg|png|webp)$/i, '');
  const candidates = [base, toSlug(base)];

  const rootImagesDir = path.join(process.cwd(), 'images');
  let entries: string[] = [];
  try {
    const files = await fs.readdir(rootImagesDir);
    entries = files.filter((f) => /(jpg|jpeg|png|webp)$/i.test(f));
  } catch {
    return NextResponse.json({ error: 'images folder missing' }, { status: 404 });
  }

  for (const want of candidates) {
    const match = entries.find((f) => {
      const name = f.replace(/\.(jpg|jpeg|png|webp)$/i, '');
      return name === want || toSlug(name) === want;
    });
    if (match) {
      const filePath = path.join(rootImagesDir, match);
      try {
        const data = await fs.readFile(filePath);
        const ext = match.split('.').pop()?.toLowerCase();
        const type =
          ext === 'png' ? 'image/png' :
          ext === 'webp' ? 'image/webp' :
          ext === 'jpeg' ? 'image/jpeg' : 'image/jpeg';
        return new NextResponse(data, {
          status: 200,
          headers: { 'Content-Type': type, 'Cache-Control': 'public, max-age=31536000, immutable' },
        });
      } catch {
        // try next
      }
    }
  }

  return NextResponse.json({ error: 'image not found' }, { status: 404 });
}


