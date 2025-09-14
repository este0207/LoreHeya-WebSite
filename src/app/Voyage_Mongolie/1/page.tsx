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
              <li style={{background:"#fff",padding:16,borderRadius:12,boxShadow:"0 6px 18px rgba(0,0,0,0.08)",marginBottom:16}}>
                <strong>12 juillet 2026 — Départ de Francfort (Allemagne)</strong><br/>
                Les billets d’avion aller-retour au départ de Francfort sont inclus dans le
forfait. Les dates de vol ne sont pas modifiables. Le vol pour la Mongolie
décolle de Francfort à 14h30 le 12 juillet et le retour est prévu le 25 Juillet
2026 à 13h10. Nous vous conseillons de prévoir suffisamment de temps
pour l’escale à Francfort, car c’est un aéroport très fréquenté.
              </li>
              <div style={{position:"relative",width:"100%",maxWidth:800,aspectRatio:"16/9",margin:"12px auto 24px",borderRadius:14,overflow:"hidden",boxShadow:"0 10px 30px rgba(0,0,0,0.12)"}}>
                <Image src="/mongolie/530560164_680338788395195_8972370088142792425_n.jpg" alt="Vol vers la Mongolie" fill sizes="(max-width: 768px) 100vw, 800px" quality={85} style={{objectFit:"cover"}} />
              </div>
              <li style={{background:"#fff",padding:16,borderRadius:12,boxShadow:"0 6px 18px rgba(0,0,0,0.08)",marginBottom:16}}>
                <strong>13 juillet 2026 — Arrivée à Oulan-Bator</strong><br/>
                Arrivée dans la capitale mongole, Oulan-Bator, où vous serez immergés dans
une ville à la croisée des mondes moderne et traditionnel. Après le petit
déjeuner, une visite de la ville vous permettra de découvrir le contraste
saisissant entre ses monastères ancestraux et ses quartiers modernes. En
fin de journée, vous aurez l’occasion de vous reposer dans des yourtes
traditionnelles, partagées à 4 ou 5 personnes.
              </li>
              <li style={{background:"#fff",padding:16,borderRadius:12,boxShadow:"0 6px 18px rgba(0,0,0,0.08)",marginBottom:16}}>
                <strong>14–16 juillet 2026 — Exploration des massifs de l’Altaï</strong><br/>
                Nous nous envolons vers l’ouest de la Mongolie, direction Khovd, une
province où les Kazakh, de culture islamique, vivent en harmonie avec les
Mongols depuis des générations. Ici, dans ce lieu de rencontres ancestrales,
le ciel semble s’étendre à l’infini, et les steppes cachent des secrets
millénaires. Chaque souffle d’air transporte les légendes de peuples
nomades, et à l’arrivée, une atmosphère mystique vous enveloppera. Vous
serez émerveillés par les traditions préservées de ces ethnies, unis par une
paix séculaire. Sous un ciel étoilé, la nuit en tente, bercée par les murmures
du vent, vous plongera dans une expérience unique, en parfaite communion avec la nature sauvage et intacte.
              </li>
              <li style={{background:"#fff",padding:16,borderRadius:12,boxShadow:"0 6px 18px rgba(0,0,0,0.08)",marginBottom:16}}>
                <strong>17 juillet 2026 — Des steppes à la montagne, sommet Tsambagarav</strong><br/>
                Nous entamons une journée extraordinaire qui nous mènera à la rencontre
des éleveurs nomades installés dans les steppes verdoyantes, au bord des
rivières scintillantes. Au fil du chemin, le paysage se transforme et nous
laisse découvrir le majestueux sommet Tsambagarav, dominant l’horizon à 4
200 mètres d’altitude. Ce sommet sacré, couvert de glaciers étincelants, est
vénéré par les Kazakhs nomades qui y voient un protecteur spirituel des
montagnes.
Nous atteindrons un campement kazakh fait de pierres sèches, un lieu
empreint de sérénité où nous commencerons notre immersion chamanique.
Les chamanes mongols, avec la montagne en toile de fond, entameront leurs
premières cérémonies, renforçant l’intensité spirituelle de cette étape, tandis
que la beauté brute du Tsambagarav veille sur nous.
              </li>
              <div style={{position:"relative",width:"100%",maxWidth:800,aspectRatio:"16/9",margin:"12px auto 24px",borderRadius:14,overflow:"hidden",boxShadow:"0 10px 30px rgba(0,0,0,0.12)"}}>
                <Image src="/mongolie/533405572_1930248241162213_648155219399365275_n.jpg" alt="Tsambagarav" fill sizes="(max-width: 768px) 100vw, 800px" quality={85} style={{objectFit:"cover"}} />
              </div>
              <li style={{background:"#fff",padding:16,borderRadius:12,boxShadow:"0 6px 18px rgba(0,0,0,0.08)",marginBottom:16}}>
                <strong>18 juillet 2026 — Vallée Khokh Serkh</strong><br/>
                Aujourd’hui, nous pénétrons dans les vallées encaissées qui bordent le mont
Tsambagarav, un lieu où la nature révèle toute sa grandeur. Les montagnes
abruptes qui s’élèvent de chaque côté créent un spectacle à couper le
souffle, et on raconte que c’est ici que l’humain aurait reçu le véritable
cadeau du Père Ciel : le Feu, source de civilisation de l’Homme. C’est autour
du Feu que les peuples nomades ont forgé leur organisation sociale et leurs
connaissances, perpétuant ainsi des traditions ancestrales toujours vivantes.
Faire un rituel au pied de la chaîne de l’Altaï est un véritable honneur. Ces
montagnes, sacrées et majestueuses, sont le berceau de légendes et
d’histoires anciennes. Se tenir dans leur ombre pour célébrer un rituel
chamanique, c’est entrer en communion avec des forces ancestrales,
comme le feu que le Père Ciel aurait offert à l’humanité. Ici, entourés par la
puissance des éléments, vous ressentirez toute la sacralité du lieu, où la
nature et l’esprit humain se rencontrent dans une harmonie profonde et
intemporelle.
              </li>
              <li style={{background:"#fff",padding:16,borderRadius:12,boxShadow:"0 6px 18px rgba(0,0,0,0.08)",marginBottom:16}}>
                <strong>19 juillet 2026 — Khovd → Vallées de l’Altaï</strong><br/>
                Ce voyage entre Khovd et Oulan-Bator vous mènera à travers les plus beaux
paysages de Mongolie, alliant montagnes majestueuses, steppes infinies et
vallées mystérieuses. Nous quitterons Khovd et ses richesses culturelles
pour plonger dans les montagnes de l’Altaï, où se dressent des pics
enneigés et des vallées profondes. Nous passerons à proximité du célèbre
sommet Tsambagarav, dont la vue imprenable sur les glaciers inspire respect
et admiration. Ce sera l’occasion de rencontrer des éleveurs kazakhs, tout
en admirant leurs faucons et aigles majestueux.
              </li>
              <div style={{position:"relative",width:"100%",maxWidth:800,aspectRatio:"16/9",margin:"12px auto 24px",borderRadius:14,overflow:"hidden",boxShadow:"0 10px 30px rgba(0,0,0,0.12)"}}>
                <Image src="/mongolie/531649705_1345710750281118_8245615143585033035_n.jpg" alt="Vallées de l’Altaï" fill sizes="(max-width: 768px) 100vw, 800px" quality={85} style={{objectFit:"cover"}} />
              </div>
              <li style={{background:"#fff",padding:16,borderRadius:12,boxShadow:"0 6px 18px rgba(0,0,0,0.08)",marginBottom:16}}>
                <strong>20–21 juillet 2026 — Steppes de Zavkhan</strong><br/>
                La route nous mènera ensuite à travers la steppe de Zavkhan, un désert
d’herbes dorées à perte de vue, parsemé de dunes qui ondulent sous la
brise. Ce paysage offre une tranquillité presque mystique, interrompue par
les cavaliers nomades et leurs troupeaux de yaks. Nous ferons halte dans
des campements nomades, où l’hospitalité mongole se révélera dans toute
sa simplicité.
              </li>
              <div style={{position:"relative",width:"100%",maxWidth:800,aspectRatio:"16/9",margin:"12px auto 24px",borderRadius:14,overflow:"hidden",boxShadow:"0 10px 30px rgba(0,0,0,0.12)"}}>
                <Image src="/mongolie/530687478_636555722400817_4250467426786029970_n.jpg" alt="Steppes de Zavkhan" fill sizes="(max-width: 768px) 100vw, 800px" quality={85} style={{objectFit:"cover"}} />
              </div>
              <li style={{background:"#fff",padding:16,borderRadius:12,boxShadow:"0 6px 18px rgba(0,0,0,0.08)",marginBottom:16}}>
                <strong>22 juillet 2026 — Lac Khyargas Telmen</strong><br/>
                Le lac Khyargas Telmen est une étendue d’eau cristalline nichée au cœur de
la Mongolie occidentale, dans la province de Zavkhan. Il s’étire sur des
kilomètres, entouré de paysages arides et rocailleux, offrant un contraste
saisissant avec son eau bleu profond. Ce lac salé, célèbre pour ses rives
isolées, est un refuge pour les oiseaux migrateurs, notamment les flamants
roses. Ses eaux, d’une pureté incroyable, invitent à la contemplation, tandis
que les couchers de soleil sur ses rives dévoilent une palette de couleurs
inoubliables.
              </li>
              <li style={{background:"#fff",padding:16,borderRadius:12,boxShadow:"0 6px 18px rgba(0,0,0,0.08)",marginBottom:16}}>
                <strong>23 juillet 2026 — Montagnes de Karakhorum → Oulan-Bator</strong><br/>
                Nous poursuivrons notre route vers Karakhorum, ancienne capitale de
l’Empire mongol sous Gengis Khan, entourée de montagnes verdoyantes.
Nous visiterons l’impressionnant monastère Erdene Zuu, première
construction bouddhiste du pays, et explorerons les vestiges historiques de
la ville. Arrivée tardive à Oulan-Bator. Nous terminerons notre périple dans la
capitale, Oulan-Bator, un contraste saisissant avec les grands espaces que
nous aurons traversés. Vous découvrirez une ville où modernité et traditions
coexistent harmonieusement, avec ses monastères, ses marchés animés, et
ses spectacles de chants et danses traditionnels qui clôtureront notre
voyage.
              </li>
              <div style={{position:"relative",width:"100%",maxWidth:800,aspectRatio:"16/9",margin:"12px auto 24px",borderRadius:14,overflow:"hidden",boxShadow:"0 10px 30px rgba(0,0,0,0.12)"}}>
                <Image src="/mongolie/532339895_1099641311692472_5834519333876072807_n.jpg" alt="Erdene Zuu" fill sizes="(max-width: 768px) 100vw, 800px" quality={85} style={{objectFit:"cover"}} />
              </div>
              <li style={{background:"#fff",padding:16,borderRadius:12,boxShadow:"0 6px 18px rgba(0,0,0,0.08)",marginBottom:16}}>
                <strong>24 juillet 2026 — Visite d’Oulan-Bator</strong><br/>
                La journée débute par une visite de la capitale mongole, où l’on découvre
son riche patrimoine culturel. Vous aurez la possibilité de visiter le monastère
Gandan, ainsi que le marché local animé, parfait pour un dernier aperçu de
l’artisanat local. Un dîner d’adieu sous la yourte marquera la fin de cette
aventure spirituelle, avant de passer une dernière nuit en yourte dans le
campement.
              </li>
              <li style={{background:"#fff",padding:16,borderRadius:12,boxShadow:"0 6px 18px rgba(0,0,0,0.08)",marginBottom:16}}>
                <strong>25 juillet 2026 — Retour en France</strong><br/>
                Après ce voyage profondément enrichissant en compagnie des chamanes
de l’Altaï, nous embarquons pour notre vol de retour en France. Le
programme a été conçu pour offrir une authenticité inégalée, garantissant
une immersion totale dans les traditions mongoles.
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
