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
                    Au cœur du sud de la Suède, dans une nature préservée et profondément ressourçante, venez célébrer le solstice lors de cérémonies sacrées autour du feu.<br/>
                    Une expérience unique pour ralentir, vous reconnecter à vous-même et aux forces de la nature.
                </p>

                <h3>Au programme</h3>
                
                <h4>Matinées en immersion dans la nature</h4>
                <p>Chaque jour, laissez-vous guider au cœur de paysages sauvages :</p>
                <ul className="list">
                    <li>exploration des forêts profondes</li>
                    <li>découverte de la faune et de la flore locales</li>
                    <li>balades autour des lacs et cascades</li>
                    <li>randonnées en pleine nature (facultatives)</li>
                </ul>
                <p>Un temps pour respirer, observer et retrouver un lien authentique avec le vivant.</p>

                <h4>Après-midis de connexion et d'enseignement</h4>
                <p>Des moments dédiés à l'exploration intérieure :</p>
                <ul className="list">
                    <li>enseignements sur la spiritualité chamanique avec Lore Heya</li>
                    <li>méditations guidées</li>
                    <li>connexion aux éléments (terre, eau, feu, air)</li>
                    <li>rencontre avec les esprits de la nature</li>
                    <li>temps libre pour intégrer, écrire, ressentir</li>
                </ul>

                <h4>Soirées de cérémonies sacrées</h4>
                <p>À la tombée de la nuit, la magie opère…</p>
                <ul className="list">
                    <li>cérémonies autour du feu</li>
                    <li>rituels liés au solstice</li>
                    <li>chants, intentions et partages</li>
                    <li>espace de transformation et de libération</li>
                </ul>
                <p>Des moments puissants pour honorer les cycles, déposer l'ancien et accueillir le renouveau.</p>

                <h3>Une expérience unique</h3>
                <p>Ce séjour est une invitation à :</p>
                <ul className="list">
                    <li>ralentir profondément</li>
                    <li>vous reconnecter à l'essentiel</li>
                    <li>vivre une expérience spirituelle intense</li>
                    <li>célébrer le solstice dans un cadre naturel exceptionnel</li>
                </ul>
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
