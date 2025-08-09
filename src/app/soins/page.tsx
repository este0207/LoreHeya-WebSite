'use client';

import Card from "../components/Card";
import Link from "next/link";
import NavBar2 from "../components/NavBar2";

export default function SoinsPage() {
  return (
    <main>
      <NavBar2></NavBar2>
      {/* Hero */}
      <section className="soins-hero">
        <h1>Soins chamaniques & énergétiques</h1>
        <p>
          Des accompagnements pour réharmoniser le corps et l'esprit, libérer les blocages
          et retrouver un ancrage profond. Séances en cabinet ou à distance.
        </p>
        <div className="soins-hero-actions">
          <a href="/contact" className="btn btn-primary">Prendre rendez-vous</a>
          <Link href="/faq" className="btn btn-ghost">Questions fréquentes</Link>
        </div>
        <div className="badges">
          <span className="pill">En cabinet</span>
          <span className="pill">À distance</span>
          <span className="pill">Adultes & ados</span>
        </div>
      </section>

      {/* Types de soins */}
      <section className="section">
        <div className="container">
          <div className="CardContainer">
            <Card
              title="Séance Chamanique a Distance"
              description="Rééquilibrage des centres énergétiques, libération des tensions et apaisement du système nerveux. Idéal pour retrouver vitalité et clarté."
              buttonText="Réserver"
              buttonLink="/contact"
              isDark={true}
              backgroundImage="/bg2.jpg"
            />
            <Card
              title="Soin Chamanique en Présence"
              description="Travail en profondeur avec le souffle, les éléments et le tambour. Un espace sacré pour transformer ce qui doit l’être."
              buttonText="Réserver"
              buttonLink="/contact"
              isDark={false}
            />
            <Card
              title="Soin Chamanique a Distance"
              description="Un accompagnement puissant sans déplacement, pour relâcher les charges émotionnelles et favoriser l’auto-guérison."
              buttonText="Réserver"
              buttonLink="/contact"
              isDark={true}
              backgroundImage="/bg5.jpg"
            />
          </div>
        </div>
      </section>

      {/* Déroulement d’une séance */}
      <section className="section">
        <div className="container flow">
          <h2>Déroulement d’une séance</h2>
          <ol className="steps">
            <li>
              <strong>Échange</strong> — nous posons l’intention et vos besoins du moment.
            </li>
            <li>
              <strong>Soin</strong> — travail énergétique/chamanique (respiration, tambour, imposition légère, sons).
            </li>
            <li>
              <strong>Intégration</strong> — temps d’accueil, hydratation, recommandations personnalisées.
            </li>
            <li>
              <strong>Suivi</strong> — si besoin, proposition d’un accompagnement ou d’exercices.
            </li>
          </ol>
        </div>
      </section>

      {/* Tarifs & durée */}
      <section className="section">
        <div className="container">
          <h2>Tarifs & durée</h2>
          <div className="price-grid">
            <div className="price-card">
              <h3>Séance Chamanique a Distance</h3>
              <p className="price">70€ · 1h30</p>
            </div>
            <div className="price-card">
              <h3>Soin Chamanique a Distance</h3>
              <p className="price">100€ · 1h</p>
            </div>
            <div className="price-card">
              <h3>Soin Chamanique en Présence</h3>
              <p className="price">120€ · 1h</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recommandations & contre-indications */}
      <section className="section">
        <div className="container grid-2">
          <div>
            <h2>Avant / après la séance</h2>
            <ul className="list">
              <li>Venez si possible avec des vêtements confortables.</li>
              <li>Hydratez-vous bien le jour J et le lendemain.</li>
              <li>Prévoyez un temps calme après la séance pour intégrer.</li>
            </ul>
          </div>
          <div>
            <h2>Contre-indications</h2>
            <ul className="list">
              <li>Ne remplace pas un suivi médical. En cas d’urgence, appelez le 15.</li>
              <li>Grossesse à risque: demandez un avis médical préalable.</li>
              <li>Pathologies lourdes: travail en complémentarité uniquement.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ simple */}
      <section className="section">
        <div className="container">
          <h2>Questions fréquentes</h2>
          <div className="faq">
            <details>
              <summary>Combien de séances faut-il ?</summary>
              <p>Selon votre besoin: parfois 1 à 3 séances suffisent, d’autres fois un accompagnement sur quelques semaines est recommandé.</p>
            </details>
            <details>
              <summary>À quelle fréquence ?</summary>
              <p>Comptez 2 à 4 semaines d’intégration entre 2 séances pour laisser le corps et l’esprit assimiler.</p>
            </details>
            <details>
              <summary>Est-ce adapté aux enfants ?</summary>
              <p>Oui à partir de l’adolescence. Pour les plus jeunes, me contacter au préalable.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Bandeau prise de rendez-vous */}
      <section className="section">
        <div className="container cta-banner">
          <div className="cta-banner-content">
            <h3>Prêt·e à faire ce pas pour vous ?</h3>
            <p>Je vous accueille avec douceur et clarté. Parlons de votre besoin.</p>
          </div>
          <a href="/contact" className="btn btn-primary">Prendre rendez-vous</a>
        </div>
      </section>
    </main>
  );
}
