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
                chamanisme traditionnel ainsi que ses outils riches en sérénité.
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
              src="/mongolie/530687478_636555722400817_4250467426786029970_n.jpg"
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
              <li style={{background:"#fff",padding:16,borderRadius:12,boxShadow:"0 6px 18px rgba(0,0,0,0.08)",marginBottom:16}}>
                <strong>27 juillet 2026 — Départ de Francfort</strong><br/>
                Les billets d’avion aller-retour au départ de Francfort sont inclus dans le
                forfait. Les dates de vol ne sont pas modifiables. Le vol pour la Mongolie
                décolle de Francfort à 14h30 le 27 juillet 2026 et le retour est prévu à 13h10
                le 10 Aout 2026. Nous vous conseillons de prévoir suffisamment de temps
                (au moins 3h) pour l’escale à Francfort, car c’est un aéroport très fréquenté.
                Si vous souhaitez prendre vos billets d’avion vous même pour plus de
                flexibilité nous vous donnons rendez-vous directement au camp de yourtes à
                Oulan-Bator le matin du 28 juillet, ou bien à l’aéroport à 7h.
                En cas d’arrivée anticipée, vous avez la possibilité de bénéficier d’un
                transfert privé pour 60 euros et d’un hébergement en yourte avec repas
                inclus pour 50 euros par jour.
              </li>
              <div style={{position:"relative",width:"100%",maxWidth:800,aspectRatio:"16/9",margin:"12px auto 24px",borderRadius:14,overflow:"hidden",boxShadow:"0 10px 30px rgba(0,0,0,0.12)"}}>
                <Image src="/mongolie/533497490_1192271379376333_3537497030374678723_n.jpg" alt="Oulan-Bator" fill sizes="(max-width: 768px) 100vw, 800px" quality={85} style={{objectFit:"cover"}} />
              </div>
              <li style={{background:"#fff",padding:16,borderRadius:12,boxShadow:"0 6px 18px rgba(0,0,0,0.08)",marginBottom:16}}>
                <strong>28 juillet 2026 — Oulan-Bator → Khogno Khan</strong><br/>
                Après un petit-déjeuner matinal, nous partirons vers l’ouest, en direction de
                la province d’Arkhangai. Très vite, vous serez captivés par l’immensité des
                steppes infinies, ces vastes étendues où la terre semble se fondre avec le
                ciel à l’horizon. Sur le chemin, nous ferons une randonnée d’environ une
                heure, traversant des roches ciselées qui sculptent le paysage, ajoutant une
                dimension mystique à ce décor époustouflant. Nous visiterons un ancien
                monastère niché dans les montagnes, entouré de chevaux en liberté, et de
                chameaux. Dans la soirée nous ouvrirons le 1er cercle avec les Chamans.
              </li>
              <li style={{background:"#fff",padding:16,borderRadius:12,boxShadow:"0 6px 18px rgba(0,0,0,0.08)",marginBottom:16}}>
                <strong>29 juillet 2026 — Ovgunt → Karakorum</strong><br/>
                Après une nuit douce et sereine au pied des monts Khogno, célèbres pour
leurs roches ciselées, nous nous enfonçons dans l’immensité des steppes
mongoles. Notre route nous conduit vers une vision presque irréelle : l’oasis
d’Elsen Tasarkhai, où des dunes dorées s’élèvent, telles les vagues d’un
désert au cœur des plaines infinies. Cet endroit, baigné de lumière, est un
contraste saisissant entre l’aridité des dunes et la verdure environnante. Plus
loin, nous découvrirons Karakorum, l’ancienne capitale, et son monastère
Erdene Zuu, gardien silencieux de l’histoire mongole.
Après une journée riche en découvertes et en émerveillement, vous trouverez
refuge dans une yourte cosy, nichée au cœur des steppes mongoles. Sous
son toit arrondi, l’atmosphère est chaleureuse et intime, avec ses boiseries
ornées de motifs traditionnels et l’odeur subtile du bois qui crépite dans le
poêle. Protégée des vents et des étoiles scintillantes qui veillent dehors, la
yourte offre un confort douillet, un véritable cocon au milieu de l’immensité
sauvage. Ici, le calme profond des nuits mongoles invite à la détente et à
l’introspection.
              </li>
              <div style={{position:"relative",width:"100%",maxWidth:800,aspectRatio:"16/9",margin:"12px auto 24px",borderRadius:14,overflow:"hidden",boxShadow:"0 10px 30px rgba(0,0,0,0.12)"}}>
                <Image src="/mongolie/531236863_1288894752616383_3560414170079534257_n.jpg" alt="Elsen Tasarkhai dunes" fill sizes="(max-width: 768px) 100vw, 800px" quality={85} style={{objectFit:"cover"}} />
              </div>
              <li style={{background:"#fff",padding:16,borderRadius:12,boxShadow:"0 6px 18px rgba(0,0,0,0.08)",marginBottom:16}}>
                <strong>31 juillet 2026 — Karakorum → Source d’eau chaude naturelle</strong><br/>
                Après environ trois heures de route, nous serons chaleureusement accueillis
par une famille de nomades, installée au cœur d’une vallée splendide, où se
trouve une source d’eaux chaudes. Tsagaan sum, véritable trésor niché au
milieu des steppes mongoles, vous offrira une expérience de bien-être
unique. Ces sources naturelles, jaillissant à 72°C, sont connues pour leurs
vertus curatives, apaisant rhumatismes et affections respiratoires. Vous
pourrez vous détendre dans ces bains thermaux avant de savourer un dîner
traditionnel chez vos hôtes nomades, et passer la nuit dans une yourte
simple mais confortable.
              </li>
              <div style={{position:"relative",width:"100%",maxWidth:800,aspectRatio:"16/9",margin:"12px auto 24px",borderRadius:14,overflow:"hidden",boxShadow:"0 10px 30px rgba(0,0,0,0.12)"}}>
                <Image src="/mongolie/530925943_1141693608016865_2924847693897443230_n.jpg" alt="Sources chaudes Tsagaan sum" fill sizes="(max-width: 768px) 100vw, 800px" quality={85} style={{objectFit:"cover"}} />
              </div>
              <li style={{background:"#fff",padding:16,borderRadius:12,boxShadow:"0 6px 18px rgba(0,0,0,0.08)",marginBottom:16}}>
                <strong>1er août 2026 — Séjour chez les nomades de Tsagaan Sum</strong><br/>
                Cette journée promet d’être à la fois gourmande et riche en découvertes. Au
matin, vous serez enchanté par les vues panoramiques sur la vallée, où
l’horizon s’étend à l’infini. Nous partirons à la rencontre du quotidien des
nomades, vivant au rythme des steppes. Après un court transfert, nous
atteindrons les pieds des monts Tuvkhni, recouverts de mélèzes. L’après-
midi sera consacrée à une randonnée de 3 heures, d’une montée douce vers
le temple Tuvkhni, perché sur les hauteurs. Après cette visite spirituelle, vous
passerez une nuit sereine dans une yourte traditionnelle, louée par des
éleveurs, où un dîner authentique vous attendra.
A noter : 40+20 km en 4×4 et randonnée à pied dans l’après-midi. Dénivelé
peu important. 3h de marche environ. Le soir, yourte louée par les familles
nomades.
              </li>
              <li style={{background:"#fff",padding:16,borderRadius:12,boxShadow:"0 6px 18px rgba(0,0,0,0.08)",marginBottom:16}}>
                <strong>1–5 août 2026 — Vallée de l’Orkhon</strong><br/>
                Pendant ces journées immersives au cœur d’un parc naturel sacré, nous
serons entourés par l’immensité des montagnes de mélèzes, leurs cimes
ondulant à l’horizon comme un océan de verdure. Parmi ces majestueux
paysages, les yourtes nomades, disséminées à flanc de colline, témoignent
d’un mode de vie ancestral respectueux de la nature. Logés dans des tentes
au cœur de cette beauté sauvage, nous expérimenterons des cérémonies
chamaniques intenses, des consultations individuelles et des exercices
énergétiques guidés par des chamanes. Chaque moment sera une
opportunité d’apprentissage profond, d’échange et de transmission.

              </li>
              <div style={{position:"relative",width:"100%",maxWidth:800,aspectRatio:"16/9",margin:"12px auto 24px",borderRadius:14,overflow:"hidden",boxShadow:"0 10px 30px rgba(0,0,0,0.12)"}}>
                <Image src="/mongolie/531649705_1345710750281118_8245615143585033035_n.jpg" alt="Vallée de l’Orkhon" fill sizes="(max-width: 768px) 100vw, 800px" quality={85} style={{objectFit:"cover"}} />
              </div>
              <li style={{background:"#fff",padding:16,borderRadius:12,boxShadow:"0 6px 18px rgba(0,0,0,0.08)",marginBottom:16}}>
                <strong>6–7 août 2026 — Séjour au lac Ogui</strong><br/>
                Au milieu des steppes sans fin, surgit le lac Ogui, tel un joyau cristallin perdu
dans l’immensité sauvage. Ce lac, entouré d’une aura presque mystique,
inspire depuis des siècles les poètes et écrivains mongols par sa beauté
envoûtante. Ses eaux tranquilles reflètent le ciel immense, créant une
harmonie parfaite entre terre et ciel. Autour de ses rives, les herbes ondulent
sous la brise et les cavaliers nomades traversent silencieusement les plaines.
Le lac Ogui est plus qu’un simple paysage : il est un lieu où l’âme se
ressourçait, un espace poétique et contemplatif où le temps semble
suspendu. Ses légendes et ses récits traversent les générations, reliant chaque visiteur à l’essence même de la Mongolie profonde.
              </li>
              <div style={{position:"relative",width:"100%",maxWidth:800,aspectRatio:"16/9",margin:"12px auto 24px",borderRadius:14,overflow:"hidden",boxShadow:"0 10px 30px rgba(0,0,0,0.12)"}}>
                <Image src="/mongolie/531652966_1853186348879002_4263518635223608396_n.jpg" alt="Lac Ogui" fill sizes="(max-width: 768px) 100vw, 800px" quality={85} style={{objectFit:"cover"}} />
              </div>
              <li style={{background:"#fff",padding:16,borderRadius:12,boxShadow:"0 6px 18px rgba(0,0,0,0.08)",marginBottom:16}}>
                <strong>8 août 2026 — Retour vers Oulan-Bator</strong><br/>
                Alors que nous reprenons la route vers l’est, le paysage évolue, passant des
steppes verdoyantes aux étendues arides, où de douces dunes dorées se
dessinent à l’horizon, comme un dernier souffle des grands espaces.
Chaque virage nous éloigne un peu plus de la nature sauvage qui nous a
tant marqués. De retour à Oulan-Bator, une soirée conviviale nous attend
sous la yourte, avec l’équipe locale. Ce moment, empreint de nostalgie, est
une douce conclusion à cette aventure, où l’esprit reste attaché à la beauté
brute de la Mongolie.
              </li>
              <li style={{background:"#fff",padding:16,borderRadius:12,boxShadow:"0 6px 18px rgba(0,0,0,0.08)",marginBottom:16}}>
                <strong>9 août 2026 — Oulan-Bator</strong><br/>
                Revenir à la ville après avoir goûté à la beauté sauvage et intacte des
steppes procure un étrange contraste. Dès l’aube, nous plongeons dans une
matinée culturelle au cœur d’Oulan-Bator, où le monastère Gandan nous
accueille avec ses moines en prière. Ensuite, le musée national nous dévoile
l’histoire et les traditions mongoles à travers une magnifique collection de
costumes et objets du quotidien. Après un déjeuner en ville, vous aurez
l’occasion de flâner et faire du shopping au centre-ville. Le soir, un spectacle
traditionnel de chants et danses nous immergera dans la culture mongole,
avant de retrouver la sérénité d’une nuit en yourte, où les souvenirs des
grands espaces nous envelopperont doucement.
Un retour au campement de yourtes rappelle la simplicité et le charme de la
vie nomade, tandis que les lumières de la ville clignotent au loin, offrant une
douce transition entre modernité et traditions millénaires.
              </li>
              <div style={{position:"relative",width:"100%",maxWidth:800,aspectRatio:"16/9",margin:"12px auto 24px",borderRadius:14,overflow:"hidden",boxShadow:"0 10px 30px rgba(0,0,0,0.12)"}}>
                <Image src="/mongolie/531907374_1470457543991291_4184497365890398537_n.jpg" alt="Oulan-Bator en soirée" fill sizes="(max-width: 768px) 100vw, 800px" quality={85} style={{objectFit:"cover"}} />
              </div>
              <li style={{background:"#fff",padding:16,borderRadius:12,boxShadow:"0 6px 18px rgba(0,0,0,0.08)",marginBottom:16}}>
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
