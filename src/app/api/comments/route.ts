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
    if (page.length > 80 || !/^[a-z0-9/_-]+$/i.test(page)) {
      return NextResponse.json({ error: 'Page invalide.' }, { status: 400 });
    }
    const supabase = getSupabaseServerClient();
    const { data, error } = await supabase
      .from('comments')
      .select('*')
      .eq('page', page)
      .order('created_at', { ascending: false })
      .limit(200);

    if (error) {
      console.error('Comments query failed:', error);
      return NextResponse.json({ error: 'Impossible de charger les avis.' }, { status: 500 });
    }
    return NextResponse.json({ comments: data as CommentRow[] });
  } catch (err: any) {
    console.error('Comments query failed:', err);
    return NextResponse.json({ error: 'Impossible de charger les avis.' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const supabase = getSupabaseServerClient();
    const body: unknown = await request.json();
    if (!body || typeof body !== 'object') {
      return NextResponse.json({ error: 'Données invalides.' }, { status: 400 });
    }

    const input = body as Record<string, unknown>;
    const page = typeof input.page === 'string' ? input.page.trim() : 'faq';
    const nameValue = typeof input.name === 'string' ? input.name.trim() : '';
    const message = typeof input.message === 'string' ? input.message.trim() : '';
    const ratingNum = input.rating === undefined ? 5 : Number(input.rating);
    if (!/^[a-z0-9/_-]{1,80}$/i.test(page)) {
      return NextResponse.json({ error: 'Page invalide.' }, { status: 400 });
    }
    if (!message || message.length > 2000 || nameValue.length > 80) {
      return NextResponse.json({ error: 'Nom ou message invalide.' }, { status: 400 });
    }
    if (!Number.isInteger(ratingNum) || ratingNum < 1 || ratingNum > 5) {
      return NextResponse.json({ error: 'La note doit être comprise entre 1 et 5.' }, { status: 400 });
    }
    const name = nameValue || null;
    const rating = ratingNum;

    const { data, error } = await supabase
      .from('comments')
      .insert([{ page, name, message, rating }])
      .select('*')
      .single();

    if (error) {
      console.error('Comment insert failed:', error);
      return NextResponse.json({ error: 'Impossible d’enregistrer votre avis.' }, { status: 500 });
    }
    return NextResponse.json({ comment: data as CommentRow }, { status: 201 });
  } catch (err: any) {
    console.error('Comment insert failed:', err);
    return NextResponse.json({ error: 'Impossible d’enregistrer votre avis.' }, { status: 500 });
  }
}
