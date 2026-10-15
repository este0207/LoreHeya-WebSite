import { NextResponse } from 'next/server';
import { createAdminSession, credentialsMatch, isAdminConfigured } from '@/lib/admin/auth';

export const runtime = 'nodejs';
const attempts = new Map<string, { count: number; resetAt: number }>();

export async function POST(request: Request) {
  if (!isAdminConfigured()) {
    return NextResponse.json({ error: 'Configurez ADMIN_USERNAME, ADMIN_PASSWORD et ADMIN_SESSION_SECRET dans les variables d’environnement.' }, { status: 503 });
  }

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  const now = Date.now();
  const current = attempts.get(ip);
  if (current && current.resetAt > now && current.count >= 8) {
    return NextResponse.json({ error: 'Trop de tentatives. Réessayez dans quelques minutes.' }, { status: 429 });
  }

  let username = '';
  let password = '';
  try {
    const body = await request.json();
    username = typeof body.username === 'string' ? body.username : '';
    password = typeof body.password === 'string' ? body.password : '';
  } catch {
    return NextResponse.json({ error: 'Requête invalide.' }, { status: 400 });
  }

  if (!credentialsMatch(username, password)) {
    attempts.set(ip, current && current.resetAt > now
      ? { count: current.count + 1, resetAt: current.resetAt }
      : { count: 1, resetAt: now + 10 * 60 * 1000 });
    return NextResponse.json({ error: 'Identifiant ou mot de passe incorrect.' }, { status: 401 });
  }

  attempts.delete(ip);
  await createAdminSession();
  return NextResponse.json({ ok: true });
}
