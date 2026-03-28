import NavBar2 from "../components/NavBar2"
import Link from "next/link";
import Card from "../components/Card";


export default function Retraite() {
  return (
    <main>
      <NavBar2 />
      {/* Hero */}
      <section className="soins-hero">
        <h1>Retraites chamaniques</h1>
        <p>
            Séjours au cœur de la nature sauvage en Suède
        </p>
        <div className="soins-hero-actions">
          <a href="/contact" className="btn btn-primary">Prendre rendez-vous</a>
          <Link href="/faq" className="btn btn-ghost">Questions fréquentes</Link>
        </div>
        <div className="badges">
            <span className="pill">Sur place</span>
          <span className="pill">Adultes & ados</span>
        </div>
      </section>
      {/* Types de voyage */}
      <section className="section">
        <div className="container">
          <div className="CardContainer">
            <Card
              title="Retraite dans le sud de la Suède"
              description="Retraite chamanique pour le solstice dans le Sud de la Suède"
              buttonText="Plus d'infos"
              buttonLink="#testBtn"
              isDark={true}
              backgroundImage="/bg5.jpg"
            />
            <Card
              title="Retraite en Laponie"
              description="Retraite en Laponie Suedoise pour le nouvel an"
              buttonText="Plus d'infos"
              buttonLink="/retraite/2"
              isDark={false}
              backgroundImage="/bg5.jpg"
            />
          </div>
        </div>
      </section>
      <section className="section" id="testBtn">
        <div className="container">
            <div className="grid-2 sm:grid-1" style={{ alignItems: 'flex-start', gap: '3rem' }}>
            <div className="flow">
                {/*
                Premier voyage : séjour au cœur de la nature sauvage en Suède
                */}
                <h2>
                  <strong>Retraite au cœur de la nature sauvage en Suède</strong><br/>
                  5 jours / 4 nuits – Du 7 au 11 octobre 2026
                </h2>
                
                <p>
                  Offrez-vous une parenthèse hors du temps…<br/>
                  Au cœur du sud de la Suède, dans une nature préservée et profondément ressourçante, venez nous rejoindre lors de cérémonies sacrées autour du feu.
                  Une expérience unique pour ralentir, vous reconnecter à vous-même et aux forces de la nature.
                </p>

                <p>
                  La Suède est un pays aux paysages très sauvages et très peu peuplé par rapport à la France ; il est courant de parcourir de longues distances avant de voir des habitations. Les maisons sont très chaleureuses et l'environnement est propice aux cérémonies en extérieur.
                  Il est possible d'observer des aurores boréales selon la météo.
                </p>

                <p>
                  Ce stage rappelle les conditions de rituels en Mongolie et sera consacré à l'harmonisation des énergies ainsi qu'à la reconnexion à l'invisible, aux ancêtres et aux traditions chamaniques.
                </p>

                <h3>Programme détaillé</h3>

                <h4>Jour 1 - 7 octobre - Arrivée en Suède</h4>
                <ul className="list">
                  <li>Arrivée à l'aéroport de Göteborg</li>
                  <li>Installation au lieu de stage en pleine forêt en chambres partagées</li>
                  <li>Accueil, présentation du séjour et des participants</li>
                  <li>Dîner convivial avec plat traditionnel suédois</li>
                  <li>Cérémonie d'ouverture en l'honneur des 5 mondes autour du feu en pleine nature</li>
                </ul>

                <h4>Jour 2 - 8 octobre - Connexion aux astres et à la nature</h4>
                <ul className="list">
                  <li>Accueil du lever de soleil avec offrandes</li>
                  <li>Petit déjeuner autour d'un feu de cheminée et pâtisseries suédoises</li>
                  <li>Balade en nature et découverte de la faune locale (orignaux, flore suédoise)</li>
                  <li>Enseignements : Connexion avec ses guides, renforcer son intuition et déployer ses capacités</li>
                  <li>Cérémonie de serment pour honorer nos ancêtres</li>
                </ul>

                <h4>Jour 3 - 9 octobre - Protection et transmutation</h4>
                <ul className="list">
                  <li>Randonnée autour des lacs</li>
                  <li>Enseignements : Protection des éléments, confiance en soi et pardon</li>
                  <li>Cérémonie de transmutation avec les esprits du feu</li>
                </ul>

                <h4>Jour 4 - 10 octobre - Détente et clôture</h4>
                <ul className="list">
                  <li>Temps libre pour visiter la ville de Göteborg</li>
                  <li>Déjeuner au restaurant avec découverte de la gastronomie suédoise et Fika traditionnel</li>
                  <li>Cérémonie de clôture en soirée</li>
                </ul>

                <h4>Jour 5 - 11 octobre - Départ</h4>
                <ul className="list">
                  <li>Petit déjeuner convivial</li>
                  <li>Groupe de parole</li>
                  <li>Retour à l'aéroport</li>
                </ul>
                <br />
                <h3>Tarif : 1050 Euros</h3>
                <p style={{ fontSize: '0.9rem', marginTop: '1rem' }}>
                  <strong>Compris :</strong> Logement en chambres partagées, repas (sauf repas à Göteborg), petit-déjeuner, boissons chaudes et froides à volonté, transport aéroport, cérémonies, enseignements, consultations avec les oracles<br/>
                  <strong>Non compris :</strong> Vol jusqu'à Göteborg
                </p>
            </div>
            <div>
              <img 
                src="/retraite/01/01.jpeg" 
                alt="Mooggii, Chaman Mongol traditionnel" 
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  borderRadius: '12px',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                  objectFit: 'cover',
                  maxHeight: '600px'
                }} 
              />
              <img 
                src="/retraite/01/02.jpeg" 
                alt="Salle 1" 
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  borderRadius: '12px',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                  objectFit: 'cover',
                  marginTop: '2rem',
                  maxHeight: '400px'
                }} 
              />
              <img 
                src="/retraite/01/03.jpeg" 
                alt="Salle 2" 
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  borderRadius: '12px',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                  objectFit: 'cover',
                  marginTop: '2rem',
                  maxHeight: '400px'
                }} 
              />
              <img 
                src="/retraite/01/04.jpeg" 
                alt="Salle 2" 
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  borderRadius: '12px',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                  objectFit: 'cover',
                  marginTop: '2rem',
                  maxHeight: '400px'
                }} 
              />
              <img 
                src="/retraite/01/05.jpeg" 
                alt="Salle 2" 
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  borderRadius: '12px',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                  objectFit: 'cover',
                  marginTop: '2rem',
                  maxHeight: '400px'
                }} 
              />
              <img 
                src="/retraite/01/06.jpeg" 
                alt="Salle 2" 
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  borderRadius: '12px',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                  objectFit: 'cover',
                  marginTop: '2rem',
                  maxHeight: '400px'
                }} 
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
