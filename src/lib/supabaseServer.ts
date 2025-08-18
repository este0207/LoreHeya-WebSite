import { createClient, SupabaseClient } from '@supabase/supabase-js';

let cachedClient: SupabaseClient | null = null;

export function getSupabaseServerClient(): SupabaseClient {
  if (cachedClient) return cachedClient;

  // Sanitize env values to avoid invalid header errors due to stray whitespace/quotes
  const urlRaw = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const keyRaw = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const url = urlRaw?.trim();
  const anonKey = keyRaw?.replace(/\s+/g, '');

  if (!url || !anonKey) {
    throw new Error('Supabase env vars missing: set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY');
  }

  cachedClient = createClient(url, anonKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  return cachedClient;
}
