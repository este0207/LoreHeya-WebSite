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

          {/* Voyage Altaï - 12 au 25 juillet 2026 */}
          <div style={{marginBottom: 48}}>
            <h3>Altaï, les massifs mythiques — 12 au 25 juillet 2026</h3>
            <p>
              Voyage initiatique au cœur des massifs de l’Altaï, berceau spirituel de la tradition chamanique.
              Accompagné par Lore Heya et des chamanes mongols, ce parcours vous relie aux rituels ancestraux,
              au chant diphonique, au tambour et à la guimbarde, pour une exploration des états de conscience,
              de la purification et de l’énergétisation du corps et de l’esprit.
            </p>
            <details>
              <summary><strong>Programme jour par jour</strong></summary>
              <ul className="list">
                <li><strong>12 juillet :</strong> Départ de Francfort (14h30). Vol inclus et non modifiable.</li>
                <li><strong>13 juillet :</strong> Arrivée à Oulan-Bator. Visite de la ville, nuit en yourte (4–5 pers.).</li>
                <li><strong>14–16 juillet :</strong> Vol vers Khovd, exploration des massifs de l’Altaï et immersion sous les étoiles.</li>
                <li><strong>17 juillet :</strong> Rencontre des éleveurs nomades et découverte du sommet sacré Tsambagarav (4 200 m). Début des cérémonies chamaniques.</li>
                <li><strong>18 juillet :</strong> Vallée Khokh Serkh, rituels au pied de la chaîne de l’Altaï autour du Feu primordial.</li>
                <li><strong>19 juillet :</strong> Khovd → vallées de l’Altaï, vues sur glaciers et rencontre de fauconniers kazakhs.</li>
                <li><strong>20–21 juillet :</strong> Steppes de Zavkhan, désert d’herbes, campements nomades et yaks.</li>
                <li><strong>22 juillet :</strong> Lac Khyargas Telmen, eaux cristallines, refuge des oiseaux migrateurs.</li>
                <li><strong>23 juillet :</strong> Montagnes de Karakhorum, monastère Erdene Zuu, arrivée tardive à Oulan-Bator.</li>
                <li><strong>24 juillet :</strong> Journée culturelle à Oulan-Bator (monastère Gandan, marché local), dîner d’adieu sous la yourte.</li>
                <li><strong>25 juillet :</strong> Vol retour vers la France (arrivée 13h10 à Francfort).</li>
              </ul>
            </details>
            <details>
              <summary><strong>Tarif et inclusions</strong></summary>
              <ul className="list">
                <li><strong>Prix :</strong> 3 790 € TTC</li>
                <li><strong>Transport :</strong> A/R Francfort ↔ Oulan-Bator en éco, Oulan-Bator → Khovd (aller simple).</li>
                <li><strong>Hébergement :</strong> Tentes/bivouacs sauvages dans les steppes + nuits en yourte à Oulan-Bator.</li>
                <li><strong>Encadrement :</strong> Chamanes mongols, cours et enseignements de Loreia, guide francophone et équipe locale.</li>
                <li><strong>Repas :</strong> Tous les repas inclus sauf un déjeuner à Oulan-Bator.</li>
                <li><strong>Activités :</strong> Droits d’entrée des parcs, musées et sites mentionnés.</li>
              </ul>
              <p style={{marginTop: 8}}>
                <strong>Non compris :</strong> Assurances multirisques, boissons hors thé/café/lait, pourboires et dépenses personnelles,
                massage par les chamanes (30 € / 1h).
              </p>
            </details>
            <details>
              <summary><strong>À propos de l’accompagnement</strong></summary>
              <p>
                Ce voyage est accompagné par Lore Heya, formée par des chamanes traditionnels, créatrice de l’école Lore Heya
                chamanisme (enseignements sibériens et mongols). En présence de chamanes mongols, les cérémonies autour du feu
                vous aident à renouer avec le sacré, développer vos capacités, vous protéger des énergies négatives et retrouver
                votre chemin de vie. La présence de Loreia facilite les relations et l’intégration des expériences.
              </p>
            </details>
            <div style={{marginTop: 16}}>
              <div style={{display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center"}}>
                {photos.slice(0, 4).map((file, i) => (
                  <div
                    key={`altai-thumb-${file}`}
                    style={{
                      position: "relative",
                      width: 220,
                      height: 150,
                      borderRadius: 12,
                      overflow: "hidden",
                      boxShadow: "0 2px 12px rgba(0,0,0,0.08)"
                    }}
                  >
                    <Image
                      src={`/mongolie/${file}`}
                      alt={`Altaï ${i + 1}`}
                      fill
                      style={{objectFit: "cover"}}
                      sizes="(max-width: 600px) 45vw, 220px"
                      priority={i < 2}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div style={{marginTop: 16, display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap"}}>
              <p style={{margin: 0}}>voir ci dessous</p>
              <Link href="/Voyage_Mongolie/1" className="btn btn-ghost">Voir la page</Link>
            </div>
          </div>

          {/* Voyage 1 */}
          <div style={{marginBottom: 48}}>
            <h3>Voyage du 27 juillet au 10 août 2026</h3>
            <p>
              Durant ce voyage initiatique, les 4 chamanes seront présents tout le long du séjour afin de vous partager leurs connaissances millénaires et vous guider à travers des cérémonies puissantes. Loin des touristes, vous apprendrez des techniques anciennes pour ancrer votre corps dans la nature majestueuse de la Mongolie. Le programme inclut des moments de purification énergétique, des enseignements, ainsi que des consultations individuelles dans les lieux sacrés de la Mongolie centrale.
            </p>
            <details open>
              <summary><strong>Programme jour par jour</strong></summary>
              <ul className="list">
                <li><strong>27 juillet :</strong> Départ de Francfort à 14h30 pour Oulan-Bator. Vol A/R inclus (non modifiable). Retour le 10 août à 13h10. Prévoir au moins 3h d’escale à Francfort. Option billets par vous-même: rendez-vous au camp de yourtes le 28 au matin ou à l’aéroport à 7h. Arrivée anticipée possible: transfert privé 60 € et yourte + repas 50 €/jour.</li>
                <li><strong>28 juillet :</strong> Oulan-Bator → Khogno Khan (Arkhangai). Randonnée ~1h parmi roches ciselées, visite d’un ancien monastère, chevaux en liberté et chameaux. Soir: ouverture du 1er cercle avec les chamanes.</li>
                <li><strong>29 juillet :</strong> Ovgunt / Karakorum. Oasis d’Elsen Tasarkhai (dunes dorées), visite de Karakorum et du monastère Erdene Zuu. Nuit en yourte cosy au cœur des steppes.</li>
                <li><strong>31 juillet :</strong> Karakorum → source d’eaux chaudes (Tsagaan sum). Accueil par une famille nomade, bains thermaux (72°C) aux vertus curatives. Dîner traditionnel, nuit en yourte simple et confortable.</li>
                <li><strong>1er août :</strong> Séjour chez les nomades de Tsagaan Sum. Vues panoramiques, découverte du quotidien nomade. Transfert vers les monts Tuvkhni et randonnée ~3h jusqu’au temple Tuvkhni. Nuit en yourte louée par des éleveurs. (40+20 km en 4×4, faible dénivelé)</li>
                <li><strong>1 au 5 août :</strong> Immersion dans la vallée de l’Orkhon (parc naturel sacré): cérémonies chamaniques intenses, consultations individuelles, exercices énergétiques guidés. Hébergement sous tentes au cœur des paysages de mélèzes.</li>
                <li><strong>6–7 août :</strong> Séjour au lac Ogui, lieu contemplatif et poétique. Eaux tranquilles, herbes ondulantes, cavaliers nomades: ressourcement et silence des steppes.</li>
                <li><strong>8 août :</strong> Retour à Oulan-Bator. Soirée conviviale sous la yourte avec l’équipe locale.</li>
                <li><strong>9 août :</strong> Journée culturelle à Oulan-Bator: monastère Gandan, musée national, shopping en centre-ville, spectacle traditionnel de chants et danses. Nuit en yourte.</li>
                <li><strong>10 août :</strong> Retour à Francfort.</li>
              </ul>
            </details>
            <details>
              <summary><strong>Infos pratiques</strong></summary>
              <ul className="list">
                <li>Prix : 3490 € TTC au départ de Francfort</li>
                <li>Transferts aéroport / yourte / aéroport inclus</li>
                <li>Billet d'avion A/R au départ de Francfort inclus</li>
                <li>Toutes les nuits prévues dans différents logements, camps de yourte, nuits chez les nomades</li>
                <li>Pension complète durant l'excursion (repas, restaurants, eau, thé)</li>
                <li>Douches chaudes, transport, port des bagages</li>
                <li>Transport en bus</li>
                <li>Interprète francophone, guides locaux, cuisiniers</li>
                <li>Enseignements des chamanes mongols, cérémonies, consultations individuelles</li>
                <li>Droits d'entrée des parcs, musées, spectacle traditionnel mongol</li>
                <li>Matériel fourni (tentes, matelas, couvertures, table, chaises de camping)</li>
              </ul>
            </details>
            <div style={{marginTop: 16}}>
              <div style={{display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center", marginTop: 8}}>
                {photos.slice(12, 16).map((file, i) => (
                  <div
                    key={`trip1-thumb-${file}`}
                    style={{position: "relative", width: 220, height: 150, borderRadius: 12, overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.08)"}}
                  >
                    <Image
                      src={`/mongolie/${file}`}
                      alt={`Voyage fin juillet ${i + 1}`}
                      fill
                      style={{objectFit: "cover"}}
                      sizes="(max-width: 600px) 45vw, 220px"
                      priority={i < 2}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div style={{marginTop: 16, display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap"}}>
              <p style={{margin: 0}}>voir ci dessous</p>
              <Link href="/Voyage_Mongolie/2" className="btn btn-ghost">Voir la page</Link>
            </div>
          </div>

          {/* Voyage 2 */}
        </div>
      </section>

      {/* Appel à l'action */}
      <section className="section">
        <div className="container cta-banner">
          <div className="cta-banner-content">
            <h3>Prêt·e à vivre l’aventure ?</h3>
            <p>Contacte-moi pour recevoir les modalités d’inscription.</p>
          </div>
          <a href="/contact" className="btn btn-primary">Demander le programme</a>
        </div>
      </section>
    </main>
  );
}
