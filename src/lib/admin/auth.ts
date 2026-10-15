import { createHmac, timingSafeEqual } from 'node:crypto';
import { cookies } from 'next/headers';

const COOKIE_NAME = 'loreheya_admin';
const SESSION_SECONDS = 60 * 60 * 12;

function secret() {
  return process.env.ADMIN_SESSION_SECRET || '';
}

function signature(payload: string) {
  return createHmac('sha256', secret()).update(payload).digest('hex');
}

export function isAdminConfigured() {
  return Boolean(process.env.ADMIN_USERNAME && process.env.ADMIN_PASSWORD && secret());
}

function safeEquals(actual: string, expected: string) {
  const actualBuffer = Buffer.from(actual);
  const expectedBuffer = Buffer.from(expected);
  return expected.length > 0 && actualBuffer.length === expectedBuffer.length && timingSafeEqual(actualBuffer, expectedBuffer);
}

export function credentialsMatch(username: string, password: string) {
  const usernameMatches = safeEquals(username, process.env.ADMIN_USERNAME || '');
  const passwordMatches = safeEquals(password, process.env.ADMIN_PASSWORD || '');
  return usernameMatches && passwordMatches;
}

export async function createAdminSession() {
  const payload = `${Date.now() + SESSION_SECONDS * 1000}`;
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, `${payload}.${signature(payload)}`, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    maxAge: SESSION_SECONDS,
  });
}

export async function clearAdminSession() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}

export async function isAdminAuthenticated() {
  if (!isAdminConfigured()) return false;
  const cookieStore = await cookies();
  const value = cookieStore.get(COOKIE_NAME)?.value;
  if (!value) return false;
  const [payload, providedSignature] = value.split('.');
  if (!payload || !providedSignature || !/^\d+$/.test(payload) || Number(payload) < Date.now()) return false;
  const expectedSignature = signature(payload);
  const a = Buffer.from(providedSignature);
  const b = Buffer.from(expectedSignature);
  return a.length === b.length && timingSafeEqual(a, b);
}
