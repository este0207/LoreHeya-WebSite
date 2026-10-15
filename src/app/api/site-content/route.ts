import { NextResponse } from 'next/server';
import { readContent } from '@/lib/admin/content';

export const dynamic = 'force-dynamic';

export async function GET() {
  const content = await readContent();
  return NextResponse.json({ faq: content.faq || [] }, { headers: { 'Cache-Control': 'no-store' } });
}
