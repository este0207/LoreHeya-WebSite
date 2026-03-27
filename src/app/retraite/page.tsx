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
                  <strong>Séjour au cœur de la nature sauvage en Suède</strong><br/>
                  6 nuits / 7 jours – Spécial Solstice
                </h2>
                
                <p>
                  Offrez-vous une parenthèse hors du temps…<br/>
                  Au cœur du sud de la Suède, dans une nature préservée et profondément ressourçante, venez célébrer le solstice lors de cérémonies sacrées autour du feu.
                  Une expérience unique pour ralentir, vous reconnecter à vous-même et aux forces de la nature.
                </p>

                <p>
                  La Suède est un pays aux paysages très sauvages et très peu peuplé par rapport à la France ; il est courant de parcourir de longues distances avant de voir des habitations. Les maisons sont très chaleureuses et l'environnement est propice aux cérémonies en extérieur.
                  Il sera possible d'observer des aurores boréales selon la météo.
                </p>

                <p>
                  Cette semaine sera consacrée à l'harmonisation des énergies ainsi qu'à la reconnexion à l'invisible, aux ancêtres et aux traditions chamaniques.
                </p>

                <h3>Programme détaillé</h3>

                <h4>Jour 1 - Arrivée en Suède</h4>
                <ul className="list">
                  <li>Arrivée à l'aéroport de Göteborg</li>
                  <li>Installation au lieu de stage en pleine forêt en chambres partagées</li>
                  <li>Accueil et présentation du séjour</li>
                  <li>Dîner convivial avec plat traditionnel suédois</li>
                  <li>Cérémonie d'ouverture autour du feu en pleine nature</li>
                </ul>

                <h4>Jours 2-5 - Enseignements et cérémonies</h4>
                <ul className="list">
                  <li>Accueil du lever de soleil avec offrandes</li>
                  <li>Balades en nature et découverte de la faune locale</li>
                  <li>Enseignements sur l'harmonisation des énergies et les 3 corps</li>
                  <li>Randonnée avec connexion aux éléments</li>
                  <li>Harmonisation énergétique avec les esprits de l'eau et du feu</li>
                  <li>Nettoyage des chakras aux pierres chaudes près d'une cascade</li>
                  <li>Cérémonies à la lune et chants sacrés</li>
                  <li>Enseignements sur le sens de la vie et les 9 volontés de l'âme</li>
                </ul>

                <h4>Jour 6 - Découverte de Göteborg</h4>
                <ul className="list">
                  <li>Temps libre de visite de la ville de Göteborg</li>
                  <li>Découverte de l'architecture et la culture suédoise</li>
                  <li>Fika traditionnel (café suédois)</li>
                  <li>Repas en ville au choix</li>
                </ul>

                <h4>Jour 7 - Communication avec les esprits</h4>
                <ul className="list">
                  <li>Randonnée et communication avec les esprits de la nature</li>
                  <li>Apprentissage des offrandes aux esprits</li>
                  <li>Enseignements sur l'intuition et le leadership</li>
                  <li>Cérémonie de clôture et remerciements</li>
                </ul>

                <h4>Jour 8 - Départ</h4>
                <ul className="list">
                  <li>Petit déjeuner convivial</li>
                  <li>Groupe de parole</li>
                  <li>Retour à l'aéroport</li>
                </ul>
                <br />
                <h3>Tarif : 1870 Euros</h3>
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
