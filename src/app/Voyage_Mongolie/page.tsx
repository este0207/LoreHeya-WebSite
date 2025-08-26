"use client";
import Image from "next/image";
import Link from "next/link";
import NavBar2 from '../components/NavBar2';


const photos = [
  "530401683_1498342761343456_2773780068025653957_n.jpg",
  "530560164_680338788395195_8972370088142792425_n.jpg",
  "530687478_636555722400817_4250467426786029970_n.jpg",
  "530787551_739429458932786_365532635065713633_n.jpg",
  "530807715_24702595989377561_8341791208578262359_n.jpg",
  "530857582_811200771234219_1047101376082344799_n.jpg",
  "530925943_1141693608016865_2924847693897443230_n.jpg",
  "531236863_1288894752616383_3560414170079534257_n.jpg",
  "531649705_1345710750281118_8245615143585033035_n.jpg",
  "531652966_1853186348879002_4263518635223608396_n.jpg",
  "531725701_1282968616741787_7730367667418966732_n.jpg",
  "531907374_1470457543991291_4184497365890398537_n.jpg",
  "531962815_771924712093649_875910757863470894_n.jpg",
  "532017294_1277742253324768_6768363053950919773_n.jpg",
  "532156387_1855978048634283_2859324726334759521_n.jpg",
  "532339895_1099641311692472_5834519333876072807_n.jpg",
  "533405572_1930248241162213_648155219399365275_n.jpg",
  "533497490_1192271379376333_3537497030374678723_n.jpg",
  "533498652_770380812544361_2582103641923237181_n.jpg",
  "537097933_693445183748191_1190816375636407493_n.jpg",
];

export default function VoyageMongoliePage() {
  return (
      <main>
        <NavBar2></NavBar2>
      {/* Bandeau d'intro */}
      <section className="soins-hero" style={{marginTop: 40}}>
        <h1>Voyage initiatique en Mongolie</h1>
        <p>
          Partez à la découverte de la Mongolie authentique, au cœur des steppes et des traditions chamaniques. Un séjour unique pour vivre une transformation intérieure, guidé par Lore Heya et des chamans locaux.
        </p>
        <div className="soins-hero-actions">
          <a href="#infos" className="btn btn-primary">En savoir plus</a>
          <Link href="/contact" className="btn btn-ghost">Me contacter</Link>
        </div>
        <div className="badges">
          <span className="pill">Immersion</span>
          <span className="pill">Rituels chamaniques</span>
          <span className="pill">Nature sauvage</span>
        </div>
      </section>

      {/* Galerie photo */}
      <section className="section" style={{background: "#fff"}}>
        <div className="container">
          <h2 style={{textAlign: "center", fontFamily: 'Libertinus Serif, serif', fontSize: 32}}>La Mongolie en images</h2>
          <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16, marginTop: 24}}>
            {photos.map((file, idx) => (
              <div key={file} style={{position: "relative", width: 260, height: 180, borderRadius: 12, overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.08)", margin: 8}}>
                <Image
                  src={`/mongolie/${file}`}
                  alt={`Voyage Mongolie ${idx+1}`}
                  fill
                  style={{objectFit: "cover"}}
                  sizes="(max-width: 600px) 90vw, 260px"
                  priority={idx < 3}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Description du voyage */}
      <section className="section" id="infos">
        <div className="container flow">
          <h2>Un voyage au cœur de l’âme mongole</h2>
          <p>
            Ce séjour est une invitation à explorer la Mongolie autrement :
          </p>
          <ul className="list">
            <li>Rencontres avec des chamans et participation à des rituels ancestraux</li>
            <li>Immersion dans la vie nomade : nuits en yourte, partage du quotidien</li>
            <li>Méditations, marches dans les steppes, cérémonies de feu</li>
            <li>Moments de reliance à la nature et à soi-même</li>
          </ul>
        </div>
      </section>

      {/* Itinéraires 2026 */}
      <section className="section" id="itineraires">
        <div className="container flow">
          <h2>Voyages initiatiques 2026</h2>

          {/* Voyage 1 */}
          <div style={{marginBottom: 48}}>
            <h3>Voyage du 27 juillet au 10 août 2026</h3>
            <p>
              Durant ce voyage initiatique, les 4 chamanes seront présents tout le long du séjour afin de vous partager leurs connaissances millénaires et vous guider à travers des cérémonies puissantes. Loin des touristes, vous apprendrez des techniques anciennes pour ancrer votre corps dans la nature majestueuse de la Mongolie. Le programme inclut des moments de purification énergétique, des enseignements, ainsi que des consultations individuelles dans les lieux sacrés de la Mongolie centrale.
            </p>
            <details>
              <summary><strong>Programme jour par jour</strong></summary>
              <ul className="list">
                <li><strong>27 juillet :</strong> Départ de Francfort, vol pour Oulan Bator.</li>
                <li><strong>28 juillet :</strong> Oulan Bator / Khogno Khan, randonnée, ouverture du cercle avec les chamans.</li>
                <li><strong>29 juillet :</strong> Ovgunt / Karakorum, visite de l’oasis d’Elsen Tasarkhai et du monastère Erdene Zuu.</li>
                <li><strong>31 juillet :</strong> Karakorum / Source d’eau chaude naturelle, détente et nuit chez les nomades.</li>
                <li><strong>1er août :</strong> Séjour chez les nomades de Tsagaan Sum, randonnée vers le temple Tuvkhni.</li>
                <li><strong>1 au 5 août :</strong> Journées d’échanges et d’apprentissage intense dans la vallée de l’Orkhon.</li>
                <li><strong>6-7 août :</strong> Séjour au lac Ogui, immersion et détente.</li>
                <li><strong>8 août :</strong> Retour à Oulan-Bator, soirée conviviale sous la yourte.</li>
                <li><strong>9 août :</strong> Journée culturelle à Oulan-Bator, visite du monastère Gandan, musée national, spectacle traditionnel.</li>
                <li><strong>10 août :</strong> Retour à Francfort.</li>
              </ul>
            </details>
            <details>
              <summary><strong>Infos pratiques</strong></summary>
              <ul className="list">
                <li>Prix : 3490 € TTC au départ de Francfort</li>
                <li>Transferts aéroport / yourte / aéroport inclus</li>
                <li>Billet d’avion A/R au départ de Francfort inclus</li>
                <li>Toutes les nuits prévues dans différents logements, camps de yourte, nuits chez les nomades</li>
                <li>Pension complète durant l’excursion (repas, restaurants, eau, thé)</li>
                <li>Douches chaudes, transport, port des bagages</li>
                <li>Interprète francophone, guides locaux, cuisiniers</li>
                <li>Enseignements des chamanes mongols, cérémonies, consultations individuelles</li>
                <li>Droits d’entrée des parcs, musées, spectacle traditionnel mongol</li>
                <li>Matériel fourni (tentes, matelas, couvertures, table, chaises de camping)</li>
              </ul>
            </details>
          </div>

          {/* Voyage 2 */}
          <div>
            <h3>Voyage du 12 au 26 août 2026</h3>
            <p>
              Voyage d’apprentissage des massages Yumeiho avec les Chamans. Durant ce voyage initiatique, les 4 chamanes seront présents tout le long du séjour afin de vous partager leurs connaissances millénaires et vous guider à travers des cérémonies puissantes. Vous apprendrez des techniques de manipulation du corps et de massage selon la tradition Japonaise Yumeiho afin de réharmoniser les corps énergétiques et physiques. Le programme inclut des moments de purification énergétique, des enseignements, ainsi que des consultations individuelles dans les lieux sacrés de la Mongolie centrale.
            </p>
            <details>
              <summary><strong>Programme jour par jour</strong></summary>
              <ul className="list">
                <li><strong>12 août :</strong> Départ de Francfort, vol pour Oulan Bator.</li>
                <li><strong>13 août :</strong> Oulan Bator / Khogno Khan, randonnée, ouverture du cercle avec les chamans.</li>
                <li><strong>14 août :</strong> Ovgunt / Karakorum, visite de l’oasis d’Elsen Tasarkhai et du monastère Erdene Zuu.</li>
                <li><strong>15 août :</strong> Karakorum / Source d’eau chaude naturelle, détente et nuit chez les nomades.</li>
                <li><strong>16 août :</strong> Séjour chez les nomades de Tsagaan Sum, randonnée vers le temple Tuvkhni.</li>
                <li><strong>17 au 21 août :</strong> Journées d’échanges et d’apprentissage intense dans la vallée de l’Orkhon.</li>
                <li><strong>22 au 24 août :</strong> Séjour au lac Ogui, immersion et détente.</li>
                <li><strong>24 août :</strong> Retour à Oulan-Bator, soirée conviviale sous la yourte.</li>
                <li><strong>25 août :</strong> Journée culturelle à Oulan-Bator, visite du monastère Gandan, musée national, spectacle traditionnel.</li>
                <li><strong>26 août :</strong> Retour à Francfort.</li>
              </ul>
            </details>
            <details>
              <summary><strong>Infos pratiques</strong></summary>
              <ul className="list">
                <li>Prix : 3490 € TTC au départ de Francfort</li>
                <li>Transferts aéroport / yourte / aéroport inclus</li>
                <li>Billet d’avion A/R au départ de Francfort inclus</li>
                <li>Toutes les nuits prévues dans différents logements, camps de yourte, nuits chez les nomades</li>
                <li>Pension complète durant l’excursion (repas, restaurants, eau, thé)</li>
                <li>Douches chaudes, transport, port des bagages</li>
                <li>Interprète francophone, guides locaux, cuisiniers</li>
                <li>Enseignements des chamanes mongols, cérémonies, consultations individuelles</li>
                <li>Droits d’entrée des parcs, musées, spectacle traditionnel mongol</li>
                <li>Matériel fourni (tentes, matelas, couvertures, table, chaises de camping)</li>
              </ul>
            </details>
          </div>
        </div>
      </section>

      {/* Appel à l'action */}
      <section className="section">
        <div className="container cta-banner">
          <div className="cta-banner-content">
            <h3>Prêt·e à vivre l’aventure ?</h3>
            <p>Contacte-moi pour recevoir le programme détaillé, les dates et les modalités d’inscription.</p>
          </div>
          <a href="/contact" className="btn btn-primary">Demander le programme</a>
        </div>
      </section>
    </main>
  );
}
