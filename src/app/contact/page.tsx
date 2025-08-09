'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import NavBar2 from '../components/NavBar2';

interface ContactFormState {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const router = useRouter();
  const [formState, setFormState] = useState<ContactFormState>({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const mailtoLink = (() => {
    const subject = formState.subject && formState.subject.trim().length > 0 ? formState.subject : 'Contact';
    const body = `Nom: ${formState.fullName}\nEmail: ${formState.email}\n\n${formState.message}`;
    return `mailto:esteban.h0207@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  })();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ type: null, message: '' });

    if (!formState.fullName || !formState.email || !formState.message) {
      setStatus({ type: 'error', message: 'Merci de remplir les champs obligatoires.' });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });
      const data = await response.json();
      if (!response.ok) {
        const detail = typeof data?.details === 'string' ? ` — ${data.details}` : '';
        throw new Error((data?.error || 'Une erreur est survenue.') + detail);
      }
      setStatus({ type: 'success', message: 'Message envoyé. Redirection…' });
      setPreviewUrl(data?.previewUrl || null);
      setFormState({ fullName: '', email: '', subject: '', message: '' });
      router.push('/merci');
    } catch (error: any) {
      setStatus({ type: 'error', message: error?.message || 'Envoi impossible pour le moment.' });
      setPreviewUrl(null);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main>
      <NavBar2 />

      {/* Hero */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ margin: 0 }}>Contact</h1>
          <p style={{ margin: '8px 0 0' }}>Une question, une inscription, un besoin spécifique ? Écrivez-moi.</p>
        </div>
      </section>

      {/* Form + Map */}
      <section className="section">
        <div className="container grid-2">
          <div className="form-card">
            <form className="form" onSubmit={handleSubmit} noValidate>
              <div className="field">
                <label htmlFor="fullName">Nom complet *</label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  className="input"
                  placeholder="Votre nom"
                  value={formState.fullName}
                  onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="email">Email *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="input"
                  placeholder="vous@exemple.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="subject">Objet</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  className="input"
                  placeholder="Sujet de votre demande"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                />
              </div>

              <div className="field">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  className="textarea"
                  placeholder="Votre message"
                  rows={6}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  required
                />
              </div>

              {status.type && (
                <div className={`form-status ${status.type}`}>
                  {status.message}
                  {previewUrl && (
                    <>
                      {' '}
                      <a href={previewUrl} target="_blank" rel="noreferrer">Voir l’aperçu de l’email (test)</a>
                    </>
                  )}
                </div>
              )}

              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Envoi…' : 'Envoyer'}
                </button>
                <a className="btn btn-ghost" href={mailtoLink}>
                  Envoyer via votre messagerie
                </a>
              </div>
            </form>
          </div>

          <div className="map-card">
            <div className="map-embed">
              <iframe
                title="Localisation"
                src="https://www.google.com/maps?q=Roquebrune-sur-Argens%2C%20France&output=embed"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="map-info">
              <p>Basée à Roquebrune‑sur‑Argens (83). Rendez-vous sur demande.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
