import { NextResponse } from 'next/server';
import { isAdminAuthenticated } from '@/lib/admin/auth';
import { contentLabels, readContent, writeContent, type ContentStore } from '@/lib/admin/content';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET() {
  if (!await isAdminAuthenticated()) return NextResponse.json({ error: 'Accès non autorisé.' }, { status: 401 });
  return NextResponse.json({ content: await readContent(), labels: contentLabels });
}

export async function PUT(request: Request) {
  if (!await isAdminAuthenticated()) return NextResponse.json({ error: 'Accès non autorisé.' }, { status: 401 });
  let body: { content?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Données JSON invalides.' }, { status: 400 });
  }

  const content = body.content;
  if (!content || typeof content !== 'object' || Array.isArray(content)) {
    return NextResponse.json({ error: 'Contenu invalide.' }, { status: 400 });
  }
  const allowed = new Set(Object.keys(contentLabels));
  const entries = Object.entries(content as Record<string, unknown>);
  if (entries.some(([key, value]) => !allowed.has(key) || !Array.isArray(value))) {
    return NextResponse.json({ error: 'Une rubrique ou une liste est invalide.' }, { status: 400 });
  }
  const normalized: ContentStore = {};
  for (const [key, value] of entries) {
    if ((value as unknown[]).length > 250) return NextResponse.json({ error: 'Une rubrique contient trop d’éléments.' }, { status: 400 });
    const records: Record<string, string>[] = [];
    for (const item of value as unknown[]) {
      if (!item || typeof item !== 'object' || Array.isArray(item)) return NextResponse.json({ error: 'Un élément est invalide.' }, { status: 400 });
      const fields = Object.entries(item as Record<string, unknown>);
      if (fields.length > 60 || fields.some(([field, fieldValue]) => !/^[a-zA-Z0-9_-]{1,80}$/.test(field) || typeof fieldValue !== 'string' || fieldValue.length > 20000)) {
        return NextResponse.json({ error: 'Un champ est invalide ou trop long.' }, { status: 400 });
      }
      records.push(Object.fromEntries(fields) as Record<string, string>);
    }
    normalized[key] = records;
  }
  for (const key of allowed) normalized[key] ??= [];
  await writeContent(normalized);
  return NextResponse.json({ ok: true, savedAt: new Date().toISOString() });
}
