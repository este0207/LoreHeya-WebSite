import { NextResponse } from 'next/server';
import { getSupabaseServerClient } from '../../../lib/supabaseServer';

type CommentRow = {
  id: string;
  page: string;
  name: string | null;
  message: string;
  rating: number;
  created_at: string;
};

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page') || 'faq';
    const supabase = getSupabaseServerClient();
    const { data, error } = await supabase
      .from('comments')
      .select('*')
      .eq('page', page)
      .order('created_at', { ascending: false })
      .limit(200);

    if (error) {
      return NextResponse.json({ error: error.message, details: (error as any).details, code: (error as any).code }, { status: 500 });
    }
    return NextResponse.json({ comments: data as CommentRow[] });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message ?? 'Unexpected error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const supabase = getSupabaseServerClient();
    const body = await request.json();
    const page: string = typeof body?.page === 'string' ? body.page : 'faq';
    const name: string | null = body?.name ? String(body.name).slice(0, 80) : null;
    const message: string = String(body?.message ?? '').trim().slice(0, 2000);
    const ratingNum = Number(body?.rating);
    const rating = Number.isFinite(ratingNum) ? Math.min(5, Math.max(1, Math.round(ratingNum))) : 5;

    if (!message) {
      return NextResponse.json({ error: 'Message requis' }, { status: 400 });
    }

    const { data, error } = await supabase
      .from('comments')
      .insert([{ page, name, message, rating }])
      .select('*')
      .single();

    if (error) {
      return NextResponse.json({ error: error.message, details: (error as any).details, code: (error as any).code }, { status: 400 });
    }
    return NextResponse.json({ comment: data as CommentRow }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message ?? 'Unexpected error' }, { status: 500 });
  }
}
