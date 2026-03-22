"use client";
import Image from "next/image";
import Link from "next/link";
import NavBar2 from "../../components/NavBar2";

export default function RetraiteDetailPage2() {
  return (
    <main>
      <NavBar2></NavBar2>

      {/* Hero */}
      <section className="soins-hero" style={{ marginTop: 40 }}>
        <h1>Retraite en Laponie</h1>
        <p>
            Retraite en Laponie Suedoise pour le nouvel an
        </p>
        <div className="soins-hero-actions">
          <a href="#programme" className="btn btn-primary">Voir le programme</a>
          <Link href="/contact" className="btn btn-ghost">Me contacter</Link>
        </div>
        <div className="badges">
          <span className="pill">Rituels chamaniques</span>
          <span className="pill">Aurores boréales</span>
          <span className="pill">Laponie sacrée</span>
        </div>
      </section>

      {/* Introduction */}
      <section className="section" id="intro">
        <div className="container flow">
          <h2>Un voyage initiatique au cœur de la Laponie</h2>
          <p>
        Bienvenue en Laponie suédoise, terre de neige, de silence et de lumière boréale. Depuis des millénaires, les chamanes Sámis honorent les esprits du Grand Nord, canalisent l'énergie ancestrale du Mont Kebnekaise et dansent sous les aurores boréales. C'est ici, aux portes du Grand Nord, que nous vous proposons une retraite chamanique unique, entre neige, feu et étoiles.
          </p>
          <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 900,
          aspectRatio: "16 / 9",
          margin: "16px auto",
          borderRadius: 16,
          overflow: "hidden",
          boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
        }}
          >
        <Image
          src="/retraite/02/01.jpeg"
          alt="Aurores boréales Laponie"
          fill
          sizes="(max-width: 768px) 100vw, 900px"
          style={{ objectFit: "cover" }}
          priority
        />
          </div>
          <p>
        Du 28 décembre 2026 au 3 janvier 2027, plongez dans une expérience transformatrice au sein du Grand Nord. À travers des rituels chamaniques nordiques, des voyages sonores, et l'énergie vibrante des aurores boréales, vous renouerez avec le sacré et accueillerez la nouvelle année en reliance avec les forces ancestrales du Nord.
          </p>
          <p>
        Vous rencontrerez des chamanes Sámis qui vous accompagneront vers le centre de vous-même, l'ouverture du cœur et de la conscience. À travers des techniques de purification énergétique, la voix du tambour, les chants vibratoires et les cérémonies du feu, nous expérimenterons différents états de conscience favorisant la rencontre avec les esprits de la nature et l'énergie du renouveau.
          </p>
          <p>
        Cette retraite est conçue pour ceux qui cherchent à se reconnecter avec le pouvoir transformateur des traditions nordiques, à célébrer le passage d'une année à l'autre dans un espace d'initiation profonde, et à repartir le cœur vibrant, l'âme nourrie et l'esprit renouvelé.
          </p>
        </div>
      </section>

      {/* À propos de l'accompagnement */}
      <section className="section" id="accompagnement">
        <div className="container flow">
          <h2>Accompagnement</h2>
          <p>
        Ce voyage sera accompagné par <strong>Lore Heya</strong>, chamane formée par des chamanes traditionnels, créatrice de l'école Lore Heya chamanisme depuis 5 ans (enseignements sibériens, mongols et nordiques).
          </p>
          <p>
        Accompagnée de <strong>chamanes Sámis</strong>, gardiens des traditions ancestrales du Grand Nord, Lore Heya vous amène à renouer avec le côté sacré de votre vie, à développer vos capacités énergétiques et à accueillir pleinement le renouveau. La présence des chamans Sámis est précieuse pour canaliser l'énergie du Mont Kebnekaise et honorer les esprits de la Laponie. Ensemble, nous créons un espace sûr et vibrant de guérison énergétique.
          </p>
          <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 900,
          aspectRatio: "16 / 9",
          margin: "16px auto",
          borderRadius: 16,
          overflow: "hidden",
          boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
        }}
          >
        <Image
          src="/retraite/02/02.jpeg"
          alt="Cercle chamanique Laponie"
          fill
          sizes="(max-width: 768px) 100vw, 900px"
          style={{ objectFit: "cover" }}
          priority
        />
          </div>
        </div>
      </section>

      {/* Programme */}
      <section className="section" id="programme">
        <div className="container flow">
          <h2>Programme du 28 décembre 2026 au 3 janvier 2027</h2>
          <details open>
        <summary><strong>Jour par jour</strong></summary>
        <ul className="list">
          <li style={{background:"#fff",padding:16,borderRadius:12,boxShadow:"0 6px 18px rgba(0,0,0,0.08)",marginBottom:16}}>
            <strong>28 décembre 2026 — Arrivée à Kiruna, aux portes du Grand Nord</strong><br/>
            Bienvenue en Laponie suédoise, terre de neige, de silence et de lumière boréale. Vous réservez votre vol jusqu'à Kiruna, où nous vous accueillerons directement à l'aéroport. Nous vous conseillons de voyager en deux étapes : Paris → Stockholm, puis Stockholm → Kiruna (compagnies recommandées : SAS ou Norwegian).
            <br/><br/>
            À l'arrivée, installation dans notre camp nordique : une grande maison chaleureuse au cœur de la nature, partagée en dortoirs et espaces communs. Le soir, dîner convivial au restaurant pour faire connaissance et plonger ensemble dans la magie du Nord.
          </li>
          <li style={{background:"#fff",padding:16,borderRadius:12,boxShadow:"0 6px 18px rgba(0,0,0,0.08)",marginBottom:16}}>
            <strong>29 décembre 2026 — Cérémonie d'ouverture et pratiques chamaniques nordiques</strong><br/>
            Petit-déjeuner sur place, suivi d'un cercle de parole pour poser vos intentions. Puis, immersion en pleine nature : cérémonie chamanique nordique guidée par les chamans Sámis et Lore Heya, inspirée des traditions ancestrales du Grand Nord. Une journée d'ouverture, de reliance et d'accueil. Le Mont Kebnekaise rayonne d'une énergie ancienne et puissante, une force tellurique que les chamans, en tant que gardiens fidèles, honorent et canalisent pour relier la Terre au Ciel.
          </li>
          <li style={{background:"#fff",padding:16,borderRadius:12,boxShadow:"0 6px 18px rgba(0,0,0,0.08)",marginBottom:16}}>
            <strong>30 et 31 décembre 2026 — Création rituelle & Célébration du Renouveau</strong><br/>
            Le 30 décembre, une journée dédiée à la voix du tambour, à la vibration du son et à la connexion énergétique. Cercle de partage, voyages chamaniques, transmissions vibratoires et pratiques d'ancrage dans la fréquence du Nord. Un espace de guérison, d'écoute et de résonance.
            <br/><br/>
            Le 31 décembre, matinée en forêt pour récolter le bois sacré qui servira à la création de votre hochet chamanique personnel. Atelier guidé : chacun y inscrit son symbole intérieur, son souffle, sa vibration. En soirée, rituel collectif et célébration du passage à la nouvelle année, au son des tambours et sous les aurores boréales. Un moment de pure magie, où le renouveau s'invite dans chaque cœur.
          </li>
          <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 900,
          aspectRatio: "16 / 9",
          margin: "16px auto",
          borderRadius: 16,
          overflow: "hidden",
          boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
        }}
          >
        <Image
          src="/retraite/02/03.jpeg"
          alt="Cercle chamanique Laponie"
          fill
          sizes="(max-width: 768px) 100vw, 900px"
          style={{ objectFit: "cover" }}
          priority
        />
          </div>
          <li style={{background:"#fff",padding:16,borderRadius:12,boxShadow:"0 6px 18px rgba(0,0,0,0.08)",marginBottom:16}}>
            <strong>1er janvier 2027 — Accueil de la Nouvelle Année & Rituels sacrés</strong><br/>
            La journée s'ouvre dans la joie et la gratitude : célébration du Nouvel An, puis enseignement des runes nordiques transmis par une chamane Sámi. L'après-midi, randonnée vers un lac gelé sacré pour une cérémonie d'offrande aux esprits de la nature, inspirée des traditions sámies. Guidés par les chamans, vous formulerez vos vœux pour la nouvelle année, en reliance avec les forces du Nord.
          </li>
          <li style={{background:"#fff",padding:16,borderRadius:12,boxShadow:"0 6px 18px rgba(0,0,0,0.08)",marginBottom:16}}>
            <strong>2 janvier 2027 — Aventure polaire et émerveillement</strong><br/>
            Journée libre pour vivre pleinement la magie du Grand Nord. Activités possibles en option :
            <ul style={{marginTop:12,marginLeft:20}}>
          <li>Balade en chiens de traîneau à travers les paysages enneigés</li>
          <li>Visite de l'Icehotel, véritable cathédrale de glace, chef-d'œuvre éphémère et féérique</li>
            </ul>
            Une journée d'émerveillement et de jeu, pour célébrer la beauté sauvage de la Laponie.
          </li>
          <li style={{background:"#fff",padding:16,borderRadius:12,boxShadow:"0 6px 18px rgba(0,0,0,0.08)",marginBottom:16}}>
            <strong>3 janvier 2027 — Cérémonie de clôture & retour</strong><br/>
            Petit-déjeuner tous ensemble, puis transfert vers l'aéroport de Kiruna selon les horaires de vol. Avant le départ, une cérémonie de clôture viendra sceller le cercle dans la gratitude et la lumière. Chacun repartira le cœur vibrant, l'âme nourrie et l'esprit renouvelé — riche de cette expérience hors du temps, entre neige, feu et étoiles.
          </li>
        </ul>
          </details>
        </div>
      </section>

      {/* Tarif et inclusions */}
      <section className="section" id="infos">
        <div className="container flow">
          <h2>Tarif et informations pratiques</h2>
          <details open>
        <summary><strong>Prix</strong></summary>
        <p><strong>1 690 €</strong> pour 7 nuits / 8 jours</p>
          </details>
          <details>
        <summary><strong>Le prix comprend / ne comprend pas</strong></summary>

        <h4>Ce qui est compris</h4>
        <ul className="list">
          <li>Le séjour</li>
          <li>Chauffeur et guide francophone</li>
          <li>Hébergement 7 nuits</li>
          <li>Demi-pension (petit-déjeuner et dîner)</li>
          <li>Transferts aéroport</li>
          <li>Transports vers toutes les étapes et activités prévues</li>
          <li>Cérémonies et Enseignements</li>
        </ul>

        <h4>Ce qui n'est pas compris</h4>
        <ul className="list">
          <li>Les vols aller/retour vers Kiruna</li>
          <li>Les visites et les activités optionnelles du 3 janvier 2027</li>
          <li>L'assurance rapatriement et annulation</li>
        </ul>
          </details>
        </div>
      </section>
      {/* CTA */}
      <section className="section">
        <div className="container cta-banner">
          <div className="cta-banner-content">
        <h3>Intéressé·e par ce voyage ?</h3>
        <p>Contactez-moi pour recevoir les modalités d'inscription et les dernières disponibilités.</p>
          </div>
          <a href="/contact" className="btn btn-primary">Demander le programme</a>
        </div>
      </section>
    </main>
  );
}
