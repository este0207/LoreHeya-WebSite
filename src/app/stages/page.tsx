'use client';

import NavBar2 from '../components/NavBar2';
import Card from '../components/Card';

export default function StagesPage() {
  return (
    <main>
      <NavBar2 />

      {/* Hero */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ margin: 0 }}>Stages et retraites</h1>
          <p style={{ margin: '8px 0 0' }}>
            Rencontres en présentiel dans le 06 pour vivre des transmissions, des rituels et des pratiques
            en nature, au cœur d'un cadre sécurisé et bienveillant.
          </p>
        </div>
      </section>

      {/* Carte du stage spécial uniquement */}
      <section className="section">
        <div className="container">
          <div className="CardContainer">
            <Card
              title="Spécial Entités / Énergies sombres"
              description="Nouveau stage en collaboration avec Céline: protections, désenvoûtements, repérer les faux guides, cérémonies."
              buttonText="Voir le programme"
              buttonLink="#stage-entities"
              isDark
              backgroundImage="/bg6.jpg"
            />
          </div>
        </div>
      </section>

      {/* Détails du stage spécial */}
      <section className="section">
        <div className="container flow">
          <h2 id="stage-entities">Stage spécial Entités / Énergies sombres</h2>
          <p>
            Nouveau stage en collaboration avec mon amie Céline, énergéticienne spécialisée dans le nettoyage des énergies négatives
            le week‑end des <strong>22/23/24 août</strong> à Saint‑Vallier‑de‑Thiey (06).
          </p>
          <p><strong>Ouvert à tous</strong> — du vendredi 22 août 17h au dimanche 24 août. <strong>440€</strong> logement compris (2 nuits).</p>
          <h3>Au programme</h3>
          <ul className="list">
            <li>Qu'est‑ce qu'une entité / rôle</li>
            <li>Entre entité et âme errante</li>
            <li>Travailler sur ses peurs lorsqu'on retire le sombre</li>
            <li>Repérer les faux guides</li>
            <li>Découvrir ses protections</li>
            <li>L'emprise des pervers narcissiques</li>
            <li>Le désenvoûtement et le retrait des entités</li>
            <li>L'auto‑envoûtement</li>
            <li>Malédictions / magie noire</li>
            <li>Les entités sur les lignées familiales</li>
            <li>Les pactes dans d'autres vies</li>
            <li>Exercices pratiques / voyages chamaniques</li>
            <li>Cérémonie d'engagement envers la lumière</li>
          </ul>
          <h3>Pourquoi ce stage ?</h3>
          <p>
            Avez‑vous remarqué que de plus en plus de personnes vont mal ? Il y a un lien avec les énergies négatives qui ont
            un impact considérable sur notre quotidien. Le fait d'en être conscient, de connaître leur mécanisme et surtout d'apprendre
            à se vérifier et se nettoyer est vital pour garder une stabilité pérenne.
          </p>
        </div>
      </section>

      {/* Infos pratiques */}
      <section className="section">
        <div className="container grid-2">
          <div className="flow">
            <h2>Infos pratiques</h2>
            <ul className="list">
              <li>Lieu: Alpes-Maritimes (06). Adresse communiquée après inscription</li>
              <li>Groupe: 8 à 14 personnes selon le lieu</li>
              <li>Matériel: tambour non obligatoire pour l'initiation</li>
            </ul>
          </div>
          <div className="flow">
            <h2>Tarifs & inscription</h2>
            <ul className="list">
              <li>Initiation: à partir de 180€ / jour</li>
              <li>Approfondissement: à partir de 220€ / jour</li>
              <li>Voyage/rituels: selon programme</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container cta-banner">
          <div className="cta-banner-content">
            <h3>Intéressé·e par un stage ?</h3>
            <p>Écrivez-moi pour recevoir les prochaines dates et réserver votre place.</p>
          </div>
          <a href="/contact" className="btn btn-primary">Demander les dates</a>
        </div>
      </section>
    </main>
  );
}
