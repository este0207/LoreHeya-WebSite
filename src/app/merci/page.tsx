'use client';

import NavBar2 from '../components/NavBar2';

export default function MerciPage() {
  return (
    <main>
      <NavBar2 />
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ margin: 0 }}>Merci pour votre message</h1>
          <p style={{ margin: '8px 0 0' }}>
            Votre message a bien été envoyé. Je vous répondrai au plus vite.
          </p>
          <div style={{ marginTop: 16 }}>
            <a href="/" className="btn btn-primary">Retour à l’accueil</a>
          </div>
        </div>
      </section>
    </main>
  );
}
