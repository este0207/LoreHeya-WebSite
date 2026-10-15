import { NextResponse } from 'next/server';
import { randomUUID } from 'node:crypto';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { isAdminAuthenticated } from '@/lib/admin/auth';

export const runtime = 'nodejs';
const acceptedTypes: Record<string, string> = { 'image/jpeg': 'jpg', 'image/png': 'png', 'image/webp': 'webp', 'image/avif': 'avif' };

export async function POST(request: Request) {
  if (!await isAdminAuthenticated()) return NextResponse.json({ error: 'Accès non autorisé.' }, { status: 401 });
  const form = await request.formData();
  const file = form.get('file');
  if (!(file instanceof File)) return NextResponse.json({ error: 'Choisissez une image.' }, { status: 400 });
  const extension = acceptedTypes[file.type];
  if (!extension || file.size > 5 * 1024 * 1024) return NextResponse.json({ error: 'Formats acceptés : JPG, PNG, WebP ou AVIF (5 Mo maximum).' }, { status: 400 });
  const bytes = Buffer.from(await file.arrayBuffer());
  const isValidImage = extension === 'jpg' ? bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff
    : extension === 'png' ? bytes.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))
      : extension === 'webp' ? bytes.toString('ascii', 0, 4) === 'RIFF' && bytes.toString('ascii', 8, 12) === 'WEBP'
        : bytes.toString('ascii', 4, 8) === 'ftyp' && /^(avif|avis)$/.test(bytes.toString('ascii', 8, 12));
  if (!isValidImage) return NextResponse.json({ error: 'Le fichier ne correspond pas à un format d’image valide.' }, { status: 400 });
  const directory = path.join(process.cwd(), 'public/uploads');
  await mkdir(directory, { recursive: true });
  const filename = `${randomUUID()}.${extension}`;
  await writeFile(path.join(directory, filename), bytes, { flag: 'wx' });
  return NextResponse.json({ path: `/uploads/${filename}` }, { status: 201 });
}
