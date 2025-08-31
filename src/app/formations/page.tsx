'use client';

import Link from 'next/link';
import NavBar2 from '../components/NavBar2';
import Card from '../components/Card';

export default function FormationsPage() {
  return (
    <main>
      <NavBar2 />

      {/* Hero */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ margin: 0 }}>Formations en chamanisme</h1>
          <p style={{ margin: '8px 0 0' }}>
            Des parcours structurés pour apprendre, pratiquer et intégrer le chamanisme dans votre vie
            ou votre accompagnement professionnel. En présence et à distance.
          </p>
          <div className="soins-hero-actions" style={{ justifyContent: 'center', marginTop: 12 }}>
            <a href="/contact" className="btn btn-primary">Demander le programme</a>
            <Link href="/stages" className="btn btn-ghost">Voir les stages</Link>
          </div>
          <div className="badges" style={{ marginTop: 10 }}>
            <span className="pill">Présentiel</span>
            <span className="pill">Distanciel</span>
            <span className="pill">Débutant à avancé</span>
          </div>
        </div>
      </section>

      {/* 3 façons de suivre l'enseignement */}
      <section className="section">
        <div className="container flow">
          <h2>Trois façons de suivre mon enseignement</h2>
          <ul className="list">
            <li>En stages en présentiel dans le 06.</li>
            <li>
              Sur la plateforme de formations, seul·e à son rythme, via des vidéos pré‑enregistrées —
              voir la section <a href="#plateforme">Plateforme</a>.
            </li>
            <li>Chaque semaine en visioconférences par petits groupes pendant 9 mois, sur inscription.</li>
          </ul>
          <p>
            Parce qu’il ne suffit pas d’avoir des capacités pour savoir s’en servir, il est important — si vous vous
            sentez appelé·e par cette voie — de bien se former afin de connaître les bases solides du chamanisme, pour
            non seulement nettoyer votre âme avant celle des autres et connaître toutes les protections et protocoles
            précis de cette pratique, car le chamanisme ne s’improvise pas.
          </p>
          <p>
            Cette formation reprend tous les acquis des stages mais développe chacun d’eux en détails en apportant un
            véritable suivi, entraînements, exercices pratiques chaque semaine par petits groupes en visioconférence.
          </p>
        </div>
      </section>

      {/* Les 3 formes de chamanisme (cartes visuelles) */}
      <section className="section">
        <div className="container">
          <div className="CardContainer">
            <Card
              title="Chamanisme Blanc"
              description="Initiation et soins de l’âme et du corps. Fondamentaux, protections, voyages, recouvrements."
              buttonText="Voir le programme"
              buttonLink="#programme-blanc"
              isDark
              backgroundImage="/bg1.jpg"
            />
            <Card
              title="Chamanisme Vert"
              description="Guérison par les plantes et le peuple de la nature. Talismans, esprits des éléments, cérémonies."
              buttonText="Voir le programme"
              buttonLink="#programme-vert"
              isDark={false}
              backgroundImage="/bg2.jpg"
            />
            <Card
              title="Chamanisme Avancé"
              description="Lieux, dégagements, désenvoûtements, protections. Protocoles avancés et maîtrise de la pratique."
              buttonText="Voir le programme"
              buttonLink="#programme-avance"
              isDark
              backgroundImage="/bg3.jpg"
            />
          </div>
        </div>
      </section>

      {/* Modalités */}
      <section className="section">
        <div className="container grid-2">
          <div className="flow">
            <h2>Modalités & format</h2>
            <ul className="list">
              <li>Groupes à taille humaine pour un suivi personnalisé.</li>
              <li>Alternance de théorie, pratiques guidées, rituels et intégration.</li>
                              <li>Rencontres d'entraînement & de pratique en présence</li>
                <li>Supports remis: feuilles de cours</li>
            </ul>
          </div>
          <div className="flow">
            <h2>Pré-requis & état d'esprit</h2>
            <ul className="list">
              <li>Aucun pré-requis pour l'Initiation. Pour les niveaux supérieurs, base pratique souhaitée.</li>
              <li>Cadre bienveillant, ancré et respectueux des traditions.</li>
              <li>Le chamanisme ne remplace pas un suivi médical.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Programmes détaillés */}
      <section className="section" id="programme">
        <div className="container flow">
          <h2 id="programme-blanc">Programme Chamanisme Blanc</h2>
          <p><em>Initiation et apprentissage des soins de l’âme et du corps</em></p>

          <h3>Introduction</h3>
          <ul className="list">
            <li>Présentation de la formation, but, programme</li>
            <li>Qu'est-ce que le chamanisme, un chaman, les protections pour faire un voyage chamanique</li>
            <li>Les 3 mondes invisibles, initiation au voyage chamanique, rencontre avec son animal de pouvoir</li>
            <li>Le tambour, outils de pouvoir du chaman, utilisation, comment le choisir</li>
          </ul>

          <h3>Monde du Bas</h3>
          <ul className="list">
            <li>Connaître ses Plantes de pouvoir, utilisation</li>
            <li>Connaître ses Pierres de pouvoir</li>
            <li>Connaître son Arbre de Pouvoir</li>
            <li>Animal Gardien et Chaman intérieur</li>
          </ul>

          <h3>Monde du Haut</h3>
          <ul className="list">
            <li>Monde du haut, Déontologie des soins chamaniques, rencontre avec un de ses guides</li>
            <li>Rencontre avec ses ancêtres</li>
            <li>Récupération de ses dons de guérisseur</li>
            <li>Soin de Recouvrements chamaniques</li>
          </ul>

          <h3>Début des soins</h3>
          <ul className="list">
            <li>Soin de Démembrement chamanique</li>
            <li>Guérison du corps physique</li>
            <li>Démembrement: expérience de l’unité</li>
            <li>Travail sur son ombre</li>
          </ul>

          <h3>Guérison du Karma</h3>
          <ul className="list">
            <li>Découverte de sa mission de vie avec son Maître de Karma</li>
            <li>Soin de Reconnexion familiale</li>
            <li>Guérison du Karma actuel</li>
            <li>Les flammes jumelles: rôle, connexion, mission, soin</li>
          </ul>

          <h3>Vies passées / Mort</h3>
          <ul className="list">
            <li>Le royaume des morts</li>
            <li>Passage d'âme perdue, reconnaître et aider une âme perdue</li>
            <li>Guérison du karma des vies passées</li>
            <li>Rituel de mort initiatique</li>
          </ul>

          <h3>Soins profonds</h3>
          <ul className="list">
            <li>Diagnostique de perte de fragment d’âme</li>
            <li>Guérison de blessure d'âme, Recouvrement d’âme</li>
            <li>Soin de Recouvrement d’âme sur la mémoire intra‑utérine</li>
            <li>Nettoyer les effets négatifs des médicaments, vaccins et traitements lourds</li>
          </ul>

          <h3>Soins profonds 2</h3>
          <ul className="list">
            <li>Extractions chamaniques: Diagnostique</li>
            <li>Soin d’Extraction des maladies</li>
            <li>Rituel de Dégagement du karma familial</li>
            <li>Protection de la lignée</li>
          </ul>

          <h3>Renforcer les acquis</h3>
          <ul className="list">
            <li>Diagnostic chamanique, protections et déroulement de soin entier</li>
            <li>Introduction au chamanisme vert, travail avec le peuple de la nature</li>
            <li>Recouvrement d’âme dans les vies antérieures</li>
            <li>Médecine des 4 éléments</li>
            <li>Création de talisman chargé pour la protection</li>
            <li>Remise de diplômes</li>
          </ul>

          <hr />

          <h2 id="programme-vert">Programme Chamanisme Vert</h2>
          <h3>Module 1</h3>
          <ul className="list">
            <li>Introduction au chamanisme vert : élément, élémentaire, elemental</li>
            <li>Le monde du milieu et le petit peuple, relation avec le gardien des lieux</li>
            <li>Rencontre avec les esprits de la terre</li>
            <li>Rencontre avec les esprits de l’air</li>
            <li>Rencontre avec les esprits de l’eau</li>
          </ul>
          <h3>Module 2</h3>
          <ul className="list">
            <li>Structuration de l’eau, les 8 mondes de l’eau, les offrandes au monde de l’eau / Découvrir notre élément principal</li>
            <li>Offrandes : quelle sorte, qui, comment, quand ? Offrandes aux esprits de la nature / Offrandes aux astres : lune, soleil, gardiens des montagnes, respect et communion avec eux (offrandes au lever du soleil…) / Création d’un talisman pour la Terre</li>
            <li>Rencontre avec les esprits du feu / structure du feu</li>
            <li>La cérémonie du feu : quand, comment, pour quelle intention</li>
          </ul>
          <h3>Module 3</h3>
          <ul className="list">
            <li>Création de talismans chamaniques chargés et Ongod (des ancêtres)</li>
            <li>Plantes de pouvoir</li>
            <li>Travail avec les plantes</li>
            <li>Soin addiction tabac / cannabis</li>
          </ul>
          <h3>Module 4</h3>
          <ul className="list">
            <li>Pierres de pouvoir</li>
            <li>Travail avec les pierres</li>
            <li>Travail et soins avec les esprits de la nature</li>
            <li>Remise de diplôme</li>
          </ul>
          <p><strong>Sur 4 mois, 95 euros par mois</strong></p>

          <hr />

          <h2 id="programme-avance">Programme Chamanisme Avancé</h2>
          <h3>Module 1</h3>
          <ul className="list">
            <li>Diagnostique de dégagement des lieux</li>
            <li>Fermeture des vortex</li>
            <li>Dégagement des mémoires négatives dans un lieu</li>
            <li>Dégagement des âmes perdues récalcitrantes</li>
          </ul>
          <h3>Module 2</h3>
          <ul className="list">
            <li>Problèmes telluriques</li>
            <li>Retrait d'Entités dans un lieu ou sur un objet</li>
            <li>Nettoyage du feu bleu - Royaume des morts</li>
            <li>Protection des lieux</li>
          </ul>
          <h3>Module 3</h3>
          <ul className="list">
            <li>Diagnostique de magie noire</li>
            <li>Désenvoûtement Rituels</li>
            <li>Désenvoûtement Soin</li>
            <li>Dégagement des malédictions</li>
          </ul>
          <h3>Module 4</h3>
          <ul className="list">
            <li>Activation des talents dans l'ADN</li>
            <li>Médecine des 4 éléments</li>
            <li>Couper Les égrégores et les pactes des autres vies</li>
            <li>Retrait d'Entités sur les lignées</li>
          </ul>
          <h3>Module 5</h3>
          <ul className="list">
            <li>Protection des ancêtres</li>
            <li>Holly Room Oracles/ Relayeurs</li>
            <li>Talismans de protection ONGON</li>
            <li>Remise de diplôme</li>
          </ul>
          <p><strong>Sur 5 mois, 95 euros par mois</strong></p>

          <div className="CardContainer">
            <Card
              title="Platon"
              description={`On ne peut guérir la partie sans soigner le tout.\nOn ne doit pas soigner le corps séparé de l'âme, et pour que l'esprit et le corps retrouvent la santé, il faut commencer par soigner l'âme.`}
              isDark={false}
              isCentered
            />
          </div>

          <p>
            Cette formation est destinée aux personnes souhaitant s'investir vers un réel changement de vie dans la
            spiritualité du chamanisme au quotidien, aux thérapeutes souhaitant compléter leurs soins ou aux personnes
            appelées à réaliser leur mission de vie en tant que chaman.
          </p>
        </div>
      </section>

      {/* Calendrier (exemple) */}
      <section className="section">
        <div className="container">
          <h2>Prochaines sessions</h2>
          <div className="faq" style={{ marginTop: 8 }}>
            <details>
              <summary>Initiation – prochain cycle</summary>
              <p>Nouvelle session tous les 6 mois. Places limitées.</p>
            </details>
          </div>
        </div>
      </section>


      {/* Questions fréquentes */}
      <section className="section">
        <div className="container">
          <h2>Questions fréquentes</h2>
          <div className="faq">
            <details>
              <summary>Est-ce adapté aux débutants ?</summary>
              <p>Oui pour le module Initiation. Les niveaux suivants demandent une base pratique.</p>
            </details>
            <details>
              <summary>Comment se déroule une journée type ?</summary>
              <p>Accueil, ancrage, transmissions, pratiques guidées, rituel(s), temps d'intégration et questions.</p>
            </details>
            <details>
              <summary>Proposez-vous un accompagnement individuel ?</summary>
              <p>Oui, voir la page Soins pour un suivi personnalisé complémentaire.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Bandeau CTA */}
      <section className="section">
        <div className="container cta-banner">
          <div className="cta-banner-content">
            <h3>Envie de rejoindre un parcours ?</h3>
            <p>Écrivez-moi pour recevoir les dates, le programme et les modalités d'inscription.</p>
          </div>
          <a href="/contact" className="btn btn-primary">Me contacter</a>
        </div>
      </section>
    </main>
  );
}
