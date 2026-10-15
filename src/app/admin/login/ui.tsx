'use client';

import { useState } from 'react';

type LoginResponse = { error?: string };

export default function AdminLogin({ configured }: { configured: boolean }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage('');
    setSubmitting(true);
    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const result = await response.json() as LoginResponse;
      if (!response.ok) {
        setMessage(result.error || 'Connexion impossible.');
        setSubmitting(false);
        return;
      }
      window.location.assign('/admin');
    } catch {
      setMessage('Le serveur ne répond pas. Réessayez.');
      setSubmitting(false);
    }
  }

  return (
    <main className="admin-shell">
      <form className="admin-login-card" onSubmit={submit}>
        <span className="admin-kicker">Lore Heya · Espace privé</span>
        <h1>Connexion admin</h1>
        {!configured ? <>
          <p>La connexion n’est pas encore configurée. Ajoutez <code>ADMIN_USERNAME</code>, <code>ADMIN_PASSWORD</code> et <code>ADMIN_SESSION_SECRET</code> aux variables d’environnement du serveur, puis redémarrez le site.</p>
          <p>Choisissez un mot de passe fort et une clé aléatoire d’au moins 32 caractères. Gardez ces valeurs hors du dépôt Git.</p>
        </> : <>
          <p>Identifiez-vous pour gérer les contenus du site.</p>
          <label className="admin-field"><span>Identifiant</span><input autoComplete="username" value={username} onChange={(event) => setUsername(event.target.value)} required /></label>
          <label className="admin-field"><span>Mot de passe</span><input autoComplete="current-password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} required /></label>
          {message && <p className="admin-message admin-message-error" role="alert">{message}</p>}
          <button className="btn btn-primary" type="submit" disabled={submitting}>{submitting ? 'Connexion…' : 'Se connecter'}</button>
        </>}
        <a className="admin-login-home" href="/">← Retour au site</a>
      </form>
    </main>
  );
}
