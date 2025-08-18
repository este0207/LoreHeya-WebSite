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
  rating: number; 
  createdAt: number;
};

const DEFAULT_FAQ: FaqItem[] = [
  {
    id: 'etre-chaman',
    question: 'Qu est ce que réellement un chaman ?',
    answer:
      `C est quelqu'un qui est désigné et "marqué" a la naissance par ses ancêtres (qu'on appellent des Oracles).\nLa personne est choisi pour continuer a pratiquer le chamanisme de sa lignée a travers elle.`,
  },
  {
    id: 'qui',
    question: 'Est-ce que tout le monde peut être Chaman? ',
    answer:
      'Non, uniquement ceux qui portent cette marque de naissance dans leur âme et qui sont reconnaissables par les autres Chamans.',
  },
  {
    id: 'apprendre',
    question: 'Est ce que sans être Chaman de naissance je peux apprendre le chamanisme?',
    answer: `Totalement.\nJe peux devenir praticien en Chamanisme, c'est à dire que je n'ai pas été désigné par mes ancêtres mais j'ai appris les même enseignements et j'ai le droit de pratiquer le chamanisme sous ce nom et non en tant que Chaman.\nLe praticien en Chamanisme peut avoir autant de capacités qu'un Chaman dans un soin et son accompagnement, simplement il ne pourra pas incorporer.`,
  },
  {
    id: 'Mongolie',
    question: `Comment être sûr d'avoir affaire à un Chaman sérieux en Mongolie ou en France? `,
    answer: `Même en Mongolie il peut y avoir du Chamanisme de tourisme, pour y échapper voici des conditions cumulatives:\nIl a été reconnu Chaman par plusieurs Chamans traditionnels,\nIl a reçu un enseignement de chamanisme ancestral pendant plusieurs années,\nIl connaît des Chamans traditionnels,\nSa tenue est unique et personnelle,\nIl fait partie de l'association "Maison de lumière" en Mongolie (ou son Maître en fait partie),\nC'est un Chaman blanc,\nJe paie ma consultation,`,
  },
  {
    id: 'incorporation',
    question: `Qu'est-ce que l'incorporation?`,
    answer: `En Mongolie le Chaman prête son corps à son oracle (ancêtre) afin qu'il parle et soigne à travers son "relayeur".\nUn esprit entre donc dans son corps le temps d'une cérémonie du feu.`,
  },
  {
    id: 'fausses-formations',
    question: `Est-ce qu'il existe de fausses formations, fausses transes... faux voyages initiatiques?`,
    answer: `Totalement, servez vous des conseils plus haut afin de les repérer.\nCe qui est très important c'est de demander au Chaman par qui a t-il été formé et reconnu.\nS'il n'est ni reconnu ni formé par un Chaman traditionnel il s'est simplement proclamé Chaman lui-même.\nL'association "maison de lumière" est un gage de garantie également car elle ressence tous les vrais Chamans de Mongolie en se préservant des pratiques pour les touristes.`,
  },
  {
    id: 'type-chamanisme',
    question: `Quelle sorte de Chamanisme vous enseignez?`,
    answer: `Le néo Chamanisme Sibérien crée par les Chamans eux même dans les années 1950.\nLe Chamanisme Mongol traditionnel.\nLe Chamanisme Amérindien.`,
  },
  {
    id: 'contenu-formations',
    question: `En quoi consiste vos formations?`,
    answer: `Une partie du programme est consacré à l'apprentissage de la sagesse spirituelle du chamanisme afin d'être plus stable émotionnellement.\nPuis la majorité de l'enseignement porte sur la guérison des blessures, traumatismes, libération du transgénérationnel, connaissance de son chemin de vie.. avec des outils spécifiques au Chamanisme comme les recouvrements d'âme par exemple.`,
  },
  {
    id: 'pour-qui-formations',
    question: `Pour qui sont vos formations?`,
    answer: `Toutes personnes qui souhaitent apprendre à guérir leurs propres blessures ou en faire un métier afin d'aider les autres à guérir les leurs.\nDébutants comme thérapeutes sont bienvenus.`,
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
        <p style={{ whiteSpace: 'pre-line' }}>{item.answer}</p>
      </div>
    </details>
  );
}
