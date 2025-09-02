"use client";
import Image from "next/image";
import Link from "next/link";
import NavBar2 from "../../components/NavBar2";

const photos = [
  "530401683_1498342761343456_2773780068025653957_n.jpg",
  "530560164_680338788395195_8972370088142792425_n.jpg",
  "530687478_636555722400817_4250467426786029970_n.jpg",
  "530787551_739429458932786_365532635065713633_n.jpg",
  "531649705_1345710750281118_8245615143585033035_n.jpg",
  "531652966_1853186348879002_4263518635223608396_n.jpg",
  "531725701_1282968616741787_7730367667418966732_n.jpg",
  "531907374_1470457543991291_4184497365890398537_n.jpg",
];

export default function MongolieOrkhonDetailPage() {
  return (
    <main>
      <NavBar2></NavBar2>

      {/* Hero */}
      <section className="soins-hero" style={{ marginTop: 40 }}>
        <h1>Mongolie centrale — Karakorum & Orkhon</h1>
        <p>Programme du 27 juillet au 10 août 2026</p>
        <div className="soins-hero-actions">
          <a href="#programme" className="btn btn-primary">Voir le programme</a>
          <Link href="/contact" className="btn btn-ghost">Me contacter</Link>
        </div>
        <div className="badges">
          <span className="pill">Rituels chamaniques</span>
          <span className="pill">Immersion nomade</span>
          <span className="pill">Sources chaudes</span>
        </div>
      </section>

      {/* Introduction visuelle */}
      <section className="section" id="intro">
        <div className="container flow">
          <h2>Un itinéraire entre steppes, dunes et lacs</h2>
          <p>Durant ce voyage initiatique, les 4 chamanes seront présent tout le long du
séjour afin de vous partager leurs connaissances millénaires et vous guider à
travers des cérémonies puissantes. Loin des touristes vous apprendrez des
techniques anciennes pour ancrer votre corps dans la nature majestueuse de
la Mongolie. Le programme inclut des moments de purification énergétique,
des enseignements, ainsi que des consultations individuelles dans les lieux
sacrés de la Mongolie centrale.</p>
          <p>Nos Chamans sont tous des chamans blancs, de l’association « maison de
lumière » qui répertorie les véritables Chamans traditionnels en Mongolie.</p>
          <p>Ce voyage sera également l’occasion d’expérimenter la vie nomade, en
séjournant dans des yourtes traditionnelles, et de découvrir des paysages
époustouflants comme la vallée de l’Orkhon et les sources thermales de
Tsagaan sum.</p>
          <p>Ce voyage sera accompagné par Lore Heya, reconnue Chamane et formée
par les chamans traditionnels.</p>
          <p>Fondatrice de l école Lore Heya chamanisme en France depuis 5 ans offrant
des enseignements de chamanisme Sibérien et Mongol vous apprendrez à
travers divers ateliers au milieu des steppes ou pendant les cérémonies du
feu à prendre soin de vos énergies et découvrirez la spiritualité du
chamanisme traditionnel ainsi que ses outils riches en sérénité.</p>
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
              src="/mongolie/533497490_1192271379376333_3537497030374678723_n.jpg"
              alt="Steppes mongoles"
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
          <h2>Programme du voyage</h2>
          <details open>
            <summary><strong>Jour par jour</strong></summary>
            <ul className="list">
              <li>
                <strong>27 juillet 2026 — Départ de Francfort</strong><br/>
                Les billets d’avion aller-retour au départ de Francfort sont inclus dans le forfait. Le vol pour la Mongolie décolle à 14h30. Nous conseillons de prévoir au moins 3h pour l’escale à Francfort.
              </li>
              <li>
                <strong>28 juillet 2026 — Oulan-Bator → Khogno Khan</strong><br/>
                Petit-déjeuner matinal puis route vers l’ouest (province d’Arkhangai). Randonnée d’environ 1h parmi des roches ciselées, visite d’un ancien monastère, observation des chevaux et des chameaux. En soirée, ouverture du 1er cercle avec les chamanes.
              </li>
              <li>
                <strong>29 juillet 2026 — Ovgunt → Karakorum</strong><br/>
                Découverte de l’oasis d’Elsen Tasarkhai et de ses dunes dorées. Visite de Karakorum, l’ancienne capitale, et du monastère Erdene Zuu. Nuit en yourte cosy au cœur des steppes.
              </li>
              <li>
                <strong>31 juillet 2026 — Karakorum → Source d’eau chaude naturelle</strong><br/>
                Après environ 3h de route, accueil chez une famille de nomades à Tsagaan Sum, dans une vallée splendide avec sources à 72°C réputées pour leurs vertus. Bains thermaux, dîner traditionnel et nuit en yourte simple et confortable.
              </li>
              <li>
                <strong>1er août 2026 — Séjour chez les nomades de Tsagaan Sum</strong><br/>
                Vues panoramiques, découverte du quotidien des nomades. Transfert au pied des monts Tuvkhni puis randonnée de 3h jusqu’au temple Tuvkhni (dénivelé faible). Nuit en yourte traditionnelle louée par des éleveurs. A noter : 40+20 km en 4×4, environ 3h de marche.
              </li>
              <li>
                <strong>1–5 août 2026 — Vallée de l’Orkhon</strong><br/>
                Journées d’échanges et d’apprentissage intensif dans un parc naturel sacré, entouré de montagnes de mélèzes. Cérémonies chamaniques, consultations individuelles et exercices énergétiques guidés par des chamanes.
              </li>
              <li>
                <strong>6–7 août 2026 — Séjour au lac Ogui</strong><br/>
                Lac cristallin au milieu des steppes, lieu poétique et contemplatif qui a inspiré poètes et écrivains mongols. Harmonie entre terre et ciel, cavaliers nomades et herbes ondulantes.
              </li>
              <li>
                <strong>8 août 2026 — Retour vers Oulan-Bator</strong><br/>
                Le paysage évolue vers des dunes dorées à l’horizon. Soirée conviviale sous la yourte avec l’équipe locale.
              </li>
              <li>
                <strong>9 août 2026 — Oulan-Bator</strong><br/>
                Matinée culturelle : monastère Gandan, musée national. Déjeuner en ville, temps libre et shopping. Le soir, spectacle traditionnel de chants et danses. Nuit en yourte.
              </li>
              <li>
                <strong>10 août 2026 — Retour à Francfort</strong><br/>
                Fin du voyage et vol retour.
              </li>
            </ul>
          </details>
          <details>
            <summary><strong>Infos vols et arrivée autonome</strong></summary>
            <p>
              Les dates de vol ne sont pas modifiables. Si vous souhaitez prendre vos billets vous‑même pour plus de flexibilité, rendez‑vous au camp de yourtes à Oulan‑Bator le matin du 28 juillet, ou bien à l’aéroport à 7h.
            </p>
            <p>
              En cas d’arrivée anticipée : transfert privé possible pour 60 € et hébergement en yourte avec repas inclus pour 50 € par jour.
            </p>
          </details>
        </div>
      </section>

      {/* Tarif et inclusions */}
      <section className="section" id="infos">
        <div className="container flow">
          <h2>Tarif et informations pratiques</h2>
          <details open>
            <summary><strong>Prix</strong></summary>
            <p><strong>3 490 € TTC</strong> au départ de Francfort</p>
          </details>
          <details open>
            <summary><strong>Le prix comprend</strong></summary>
            <ul className="list">
              <li>Transferts aéroport / yourte / aéroport</li>
              <li>Billet d’avion A/R au départ de Francfort</li>
              <li>Toutes les nuits prévues (camps de yourtes, nuits chez les nomades)</li>
              <li>Pension complète durant l’excursion (repas, restaurants, eau, thé)</li>
              <li>Douches chaudes</li>
              <li>Transport et port des bagages</li>
              <li>Transport en bus</li>
              <li>Interprète francophone</li>
              <li>Enseignements des chamanes mongols pendant toute la durée du parcours</li>
              <li>Cuisiniers, guides locaux lors des randonnées</li>
              <li>Cérémonies chamaniques, consultations individuelles</li>
              <li>Droits d’entrée des parcs et musées</li>
              <li>Spectacle traditionnel mongol</li>
              <li>Matériel fourni par l’agence (tentes, matelas, couvertures, table et chaises)</li>
            </ul>
          </details>
        </div>
      </section>

      {/* Galerie */}
      <section className="section">
        <div className="container flow">
          <h2>Ambiances du voyage</h2>
          <div style={{display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center"}}>
            {photos.map((file, i) => (
              <div key={`mongolie-2-${file}`} style={{position: "relative", width: 220, height: 150, borderRadius: 12, overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.08)"}}>
                <Image
                  src={`/mongolie/${file}`}
                  alt={`Mongolie ${i + 1}`}
                  fill
                  style={{objectFit: "cover"}}
                  sizes="(max-width: 600px) 45vw, 220px"
                  priority={i < 2}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container cta-banner">
          <div className="cta-banner-content">
            <h3>Intéressé·e par ce voyage ?</h3>
            <p>Contactez-moi pour recevoir les modalités d’inscription et les dernières disponibilités.</p>
          </div>
          <a href="/contact" className="btn btn-primary">Demander le programme</a>
        </div>
      </section>
    </main>
  );
}
