'use client';

import { useEffect, useMemo, useState } from 'react';
import NavBar2 from '../components/NavBar2';

type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

type CommentItem = {
  id: string;
  name: string;
  message: string;
  rating: number; // 1..5
  createdAt: number;
};

const DEFAULT_FAQ: FaqItem[] = [
  {
    id: 'seances-nombre',
    question: 'Combien de séances faut-il ? ',
    answer:
      "Selon votre besoin: parfois 1 à 3 séances suffisent, d’autres fois un accompagnement sur quelques semaines est recommandé.",
  },
  {
    id: 'frequence',
    question: 'À quelle fréquence ?',
    answer:
      'Comptez 2 à 4 semaines d’intégration entre 2 séances pour laisser le corps et l’esprit assimiler.',
  },
  {
    id: 'enfants',
    question: 'Est-ce adapté aux enfants ?',
    answer: 'Oui à partir de l’adolescence. Pour les plus jeunes, me contacter au préalable.',
  },
];

function useCommentsApi(page: string) {
  const [comments, setComments] = useState<CommentItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchComments = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch(`/api/comments?page=${encodeURIComponent(page)}`, { cache: 'no-store' });
      const raw = await res.text();
      let json: any = null;
      try {
        json = raw ? JSON.parse(raw) : {};
      } catch (_) {
        throw new Error(raw || 'Réponse invalide');
      }
      if (!res.ok) throw new Error(json?.error || 'Erreur chargement');
      const list = Array.isArray(json?.comments) ? (json.comments as CommentItem[]) : [];
      setComments(list);
    } catch (e: any) {
      setError(e?.message || 'Erreur réseau');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const add = async (comment: Omit<CommentItem, 'id' | 'createdAt'>) => {
    const optimistic: CommentItem = {
      ...comment,
      id: `temp-${Date.now()}`,
      createdAt: Date.now(),
    };
    setComments((prev) => (Array.isArray(prev) ? [optimistic, ...prev] : [optimistic]));
    try {
      const res = await fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ page, ...comment }),
      });
      const raw = await res.text();
      let json: any = null;
      try {
        json = raw ? JSON.parse(raw) : {};
      } catch (_) {
        throw new Error(raw || 'Réponse invalide');
      }
      if (!res.ok) throw new Error(json?.error || json?.details || 'Erreur envoi');
      const saved = json.comment as { id: string; created_at: string } & CommentItem;
      setComments((prev) => {
        const rest = Array.isArray(prev) ? prev.filter((c) => c.id !== optimistic.id) : [];
        return [
          { ...saved, createdAt: new Date(saved.created_at).getTime() },
          ...rest,
        ];
      });
    } catch (e) {
      // rollback optimistic
      setComments((prev) => prev.filter((c) => c.id !== optimistic.id));
      const msg = e instanceof Error ? e.message : 'Erreur envoi';
      alert(msg);
      throw e;
    }
  };

  return { comments, add, loading, error, refetch: fetchComments };
}

function StarRating({ value, onChange }: { value: number; onChange: (n: number) => void }) {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="stars" role="radiogroup" aria-label="Note">
      {stars.map((n) => (
        <button
          key={n}
          type="button"
          className={`star ${n <= value ? 'active' : ''}`}
          aria-checked={n === value}
          role="radio"
          onClick={() => onChange(n)}
        >
          ★
        </button>
      ))}
    </div>
  );
}

export default function FAQPage() {
  const faq = useMemo(() => DEFAULT_FAQ, []);
  const { comments, add, loading, error } = useCommentsApi('faq');

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(5);

  const average = useMemo(() => {
    if (!comments.length) return 0;
    return (
      comments.reduce((sum, c) => sum + (Number.isFinite(c.rating) ? c.rating : 0), 0) /
      comments.length
    );
  }, [comments]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedMessage = message.trim();
    const trimmedName = name.trim() || 'Anonyme';
    if (!trimmedMessage) return;
    if (rating < 1 || rating > 5) return;
    add({ name: trimmedName, message: trimmedMessage, rating });
    setMessage('');
    setName('');
    setRating(5);
  };

  return (
    <main>
      <NavBar2 />

      <section className="section">
        <div className="container">
          <h1 style={{ margin: 0 }}>FAQ</h1>
          <p style={{ marginTop: 6, color: '#374151' }}>
            Retrouvez ici les réponses aux questions les plus fréquentes.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="faq">
            {faq.map((item) => (
              <FaqBlock key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 style={{ marginTop: 0 }}>Commentaires & avis</h2>
          {error && <p style={{ color: '#b91c1c' }}>{error}</p>}
          <p style={{ color: '#6b7280', marginTop: 4 }}>
            {comments.length > 0 ? `Moyenne: ★ ${average.toFixed(1)} (${comments.length} avis)` : loading ? 'Chargement…' : 'Aucun avis pour le moment'}
          </p>

          <form className="comment-form" onSubmit={submit}>
            <label htmlFor={`name-global`}>Votre nom (optionnel)</label>
            <input
              id={`name-global`}
              className="input"
              placeholder="Ex: Jeanne"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label>Votre note</label>
            <StarRating value={rating} onChange={setRating} />

            <label htmlFor={`msg-global`}>Votre commentaire</label>
            <textarea
              id={`msg-global`}
              className="textarea"
              rows={4}
              placeholder="Partagez votre expérience."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button className="btn btn-primary" type="submit">Publier</button>
            </div>
          </form>

          {comments.length > 0 && (
            <ul className="comments">
              {comments.map((c) => (
                <li key={c.id} className="comment">
                  <div className="comment-header">
                    <span className="comment-author">{c.name || 'Anonyme'}</span>
                    <span className="comment-rating" aria-label={`Note: ${c.rating}/5`}>
                      {'★'.repeat(c.rating)}{'☆'.repeat(5 - c.rating)}
                    </span>
                  </div>
                  <p className="comment-body">{c.message}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </main>
  );
}

function FaqBlock({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false);
  return (
    <details open={open} onToggle={(e) => setOpen((e.target as HTMLDetailsElement).open)}>
      <summary>{item.question}</summary>
      <div className="flow">
        <p>{item.answer}</p>
      </div>
    </details>
  );
}
