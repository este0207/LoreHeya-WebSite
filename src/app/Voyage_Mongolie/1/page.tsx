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

export default function AltaiDetailPage() {
  return (
    <main>
      <NavBar2></NavBar2>

      {/* Hero */}
      <section className="soins-hero" style={{ marginTop: 40 }}>
        <h1>Altaï, les massifs mythiques</h1>
        <p>
          Berceau de l’humanité — du 12 au 25 juillet 2026
        </p>
        <div className="soins-hero-actions">
          <a href="#programme" className="btn btn-primary">Voir le programme</a>
          <Link href="/contact" className="btn btn-ghost">Me contacter</Link>
        </div>
        <div className="badges">
          <span className="pill">Rituels chamaniques</span>
          <span className="pill">Immersion nomade</span>
          <span className="pill">Nature sauvage</span>
        </div>
      </section>

      {/* Introduction */}
      <section className="section" id="intro">
        <div className="container flow">
          <h2>Un voyage initiatique au cœur de l’Altaï</h2>
          <p>
            Depuis les temps anciens, les Mongols considéraient les massifs de l’Altaï comme la demeure de l’Esprit-Maître des lieux de naissance de l’humanité. Les chamanes mongols viennent ici chaque été pour honorer les esprits des montagnes bienfaiteurs du monde du Haut.
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
              src="/mongolie/530807715_24702595989377561_8341791208578262359_n.jpg"
              alt="Altaï"
              fill
              sizes="(max-width: 768px) 100vw, 900px"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
          <p>
            Voici un voyage initiatique inédit en Mongolie, à la source de la tradition chamanique. En pleines steppes, sur cette terre des chamanes, nous vous proposons de découvrir pendant deux semaines ce magnifique pays qu’est la Mongolie, ainsi que sa culture spirituelle. Vous y découvrirez des rituels ancestraux pratiqués depuis des millénaires.
          </p>
          <p>
            Lors de ces rituels, les chamanes renforcent la connexion entre les êtres humains, les ancêtres et les esprits de la nature, pour demander la guérison sur tous les plans, rétablissant ainsi l’harmonie naturelle. Le chant diphonique, le son du tambour et de la guimbarde sont ici des modes de connexion privilégiés avec le monde des esprits.
          </p>
          <p>
            Vous rencontrerez des chamanes, qui vous accompagneront vers le centre de vous-même, l’ouverture du cœur et de la conscience. À travers des techniques de purification et d’énergétisation du corps et de l’esprit (méditation, rituels, voyages chamaniques), nous expérimenterons différents états de conscience favorisant la rencontre avec les animaux de pouvoir et les esprits de la nature. L’expérience terrestre consiste à vivre la
            spiritualité à travers un corps physique, véhicule de notre énergie vitale.
          </p>
        </div>
      </section>

      {/* À propos de l’accompagnement */}
      <section className="section" id="accompagnement">
        <div className="container flow">
          <h2>Accompagnement</h2>
          <p>
            Ce voyage sera accompagné par <strong>Lore Heya</strong>, chamane formée par des chamanes traditionnels, créatrice de l’école Lore Heya chamanisme depuis 5 ans (enseignements sibériens et mongols).
          </p>
          <p>
            Accompagnée de chamanes traditionnels mongols, tout au long des cérémonies autour du feu, Lore Heya vous amène à renouer avec le côté sacré de votre vie, à développer vos capacités, à apprendre à vous défaire et vous protéger des énergies négatives et retrouver votre chemin de vie. La présence de <strong>Loreia</strong> est précieuse en tant que facilitatrice des relations.
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
              src="/mongolie/532339895_1099641311692472_5834519333876072807_n.jpg"
              alt="Altaï"
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
          <h2>Programme du 12 au 25 juillet 2026</h2>
          <details open>
            <summary><strong>Jour par jour</strong></summary>
            <ul className="list">
              <li>
                <strong>12 juillet 2026 — Départ de Francfort (Allemagne)</strong><br/>
                Les billets d’avion A/R au départ de Francfort sont inclus. Vol aller à 14h30 le 12 juillet et retour le 25 juillet 2026 à 13h10. Prévoir une marge suffisante pour l’escale à Francfort.
              </li>
              <li>
                <strong>13 juillet 2026 — Arrivée à Oulan-Bator</strong><br/>
                Découverte de la capitale entre modernité et traditions. Visite de la ville après le petit-déjeuner. Nuit en yourtes traditionnelles (4 à 5 personnes).
              </li>
              <li>
                <strong>14–16 juillet 2026 — Exploration des massifs de l’Altaï</strong><br/>
                Vol vers l’ouest mongol, province de Khovd, terre de rencontres entre Kazakhs et Mongols. Immersion sous les étoiles, nuits en tente, paysages grandioses et traditions préservées.
              </li>
              <li>
                <strong>17 juillet 2026 — Des steppes à la montagne, sommet Tsambagarav</strong><br/>
                Rencontre des éleveurs nomades. Découverte du sommet sacré Tsambagarav (4 200 m). Installation près d’un campement kazakh et premières cérémonies chamaniques.
              </li>
              <li>
                <strong>18 juillet 2026 — Vallée Khokh Serkh</strong><br/>
                Rituels au pied de la chaîne de l’Altaï autour du Feu primordial, dans un décor de vallées encaissées et montagnes abruptes.
              </li>
              <li>
                <strong>19 juillet 2026 — Khovd → Vallées de l’Altaï</strong><br/>
                Traversées de paysages majestueux, glaciers et rencontres avec des fauconniers kazakhs.
              </li>
              <li>
                <strong>20–21 juillet 2026 — Steppes de Zavkhan</strong><br/>
                Désert d’herbes dorées, dunes ondulantes, haltes chez des nomades et immersion dans la vie pastorale.
              </li>
              <li>
                <strong>22 juillet 2026 — Lac Khyargas Telmen</strong><br/>
                Étendue d’eau cristalline et sauvage, refuge d’oiseaux migrateurs. Contemplation et coucher de soleil inoubliable.
              </li>
              <li>
                <strong>23 juillet 2026 — Montagnes de Karakhorum → Oulan-Bator</strong><br/>
                Visite de Karakhorum et du monastère Erdene Zuu. Arrivée tardive à Oulan-Bator.
              </li>
              <li>
                <strong>24 juillet 2026 — Visite d’Oulan-Bator</strong><br/>
                Monastère Gandan, marché local, dîner d’adieu sous la yourte. Nuit en yourte au campement.
              </li>
              <li>
                <strong>25 juillet 2026 — Retour en France</strong><br/>
                Vol de retour. Une immersion authentique au cœur des traditions mongoles.
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
            <p><strong>3 790 € TTC</strong></p>
          </details>
          <details>
            <summary><strong>Le prix comprend</strong></summary>
            <ul className="list">
              <li>
                <strong>Transport :</strong> A/R en classe économique entre Francfort et Oulan-Bator + aller simple Oulan-Bator → Khovd.
              </li>
              <li>
                <strong>Hébergement :</strong> Séjour en tentes et bivouacs sauvages dans les steppes + nuits en yourte à Oulan-Bator.
              </li>
              <li>
                <strong>Encadrement :</strong> Chamanes mongols, cours et enseignement de Loreia, guide francophone et personnel de service.
              </li>
              <li>
                <strong>Repas :</strong> Tous les repas sauf un déjeuner à Oulan-Bator.
              </li>
              <li>
                <strong>Activités culturelles :</strong> Entrées dans les parcs naturels, musées et sites mentionnés au programme.
              </li>
            </ul>
          </details>
          <details>
            <summary><strong>Le prix ne comprend pas</strong></summary>
            <ul className="list">
              <li>Assurances multirisques</li>
              <li>Boissons autres que thé, café, lait</li>
              <li>Pourboires et dépenses personnelles</li>
              <li>Massage proposé par les chamanes mongols (30 € / 1h)</li>
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
              <div key={`altai-detail-${file}`} style={{position: "relative", width: 220, height: 150, borderRadius: 12, overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.08)"}}>
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
