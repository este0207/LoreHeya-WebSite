'use client';

import NavBar2 from '../components/NavBar2';
import Card from '../components/Card';

export default function StagesPage() {
  return (
    <main>
      <NavBar2 />

      {/* Hero */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ margin: 0 }}>Stages et retraites</h1>
          <p style={{ margin: '8px 0 0' }}>
            Rencontres en présentiel dans le 06 et stages exceptionnels avec des chamans internationaux pour vivre des transmissions, 
            des rituels et des pratiques en nature, au cœur d'un cadre sécurisé et bienveillant.
          </p>
        </div>
      </section>

      {/* Carte du stage chamanisme mongol */}
      <section className="section">
        <div className="container">
          <div className="CardContainer">
            <Card
              title="Chamanisme Traditionnel"
              description=""
              buttonText="Découvrir les stages"
              buttonLink="#stage-mongol"
              isDark={true}
              backgroundImage="/chaman.jpg"
            />
          </div>
        </div>
      </section>



      {/* Détails du stage chamanisme mongol */}
      <section className="section">
        <div className="container">
          
          <div className="grid-2" style={{ alignItems: 'flex-start', gap: '3rem' }}>
            <div className="flow" style={{ position: 'sticky', top: '2rem' }}>

              <h2 id="stage-chamanisme-blanc" style={{ textAlign: 'left', marginBottom: '3rem' , marginTop: '3rem'}}>CHAMANISME BLANC 1er NIVEAU</h2>
              <div>
                  <p>
                  <strong>LES 9 et 10 Mai 2026</strong><br/>
                  <em>Lieu : Roquebrune-sur-Argens</em>
                </p>
                <ul className="list">
                  <li>Introduction Qu'est-ce que le chamanisme, un chaman, les protections pour faire un voyage chamanique</li>
                  <li>Les 3 mondes invisibles, initiation au voyage chamanique, rencontre avec son animal de pouvoir</li>
                  <li>Le tambour, outils de pouvoir du chaman, utilisation, comment le choisir</li>
                  <li>Monde du Bas Connaître ses Plantes de pouvoir, utilisation, conservation</li>
                  <li>Connaître ses Pierres de pouvoir</li>
                  <li>Connaître son Arbre de Pouvoir</li>
                  <li>Animal Gardien et Chaman intérieur</li>
                  <li>Faire des Offrandes aux esprits de la nature, renforcer ses énergies et son intuition, sa vision</li>
                </ul>
                <p>
                  Ouvert à tous, tarif: <strong>240 euros</strong>, apporter son repas. <br />
                  <strong>Prévoir un logement</strong><br />
                </p>
                <p><strong>Autres dates a venir...</strong></p>
              </div>

              <br />
              <hr />
              <br />

              <div>
                <p>
                <strong>DU 15 AU 18 OCTOBRE</strong><br/>
                <em>Lieu : Sud de la Suède</em>
              </p>
              <ul className="list">
                <li>Cérémonies et rituels puissants en pleine nature</li>
                <li>Connexion profonde avec les esprits de la nature</li>
                <li>Découverte de la faune et de la flore de la Suède, au cœur de paysages époustouflants</li>
              </ul>
              <p>
                <strong>Un stage initiatique intense</strong><br/>
                Un enseignement chamanique profond réservé aux personnes ayant déjà un bon niveau de pratique.
              </p>
              <p>
                Tarif: <strong>490 euros</strong> (hors vol).
              </p>
              </div>
            </div>
            
            <div>
              <img 
                src="/salle3.jpeg" 
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
                src="/salle4.jpeg" 
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
                src="/salle2.jpg" 
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


      {/* CTA */}
      <section className="section">
        <div className="container cta-banner">
          <div className="cta-banner-content">
            <h3>Intéressé·e par un stage ?</h3>
            <p>Écrivez-moi pour recevoir les prochaines dates et réserver votre place.</p>
          </div>
          <a href="/contact" className="btn btn-primary">Demander les dates</a>
        </div>
      </section>
    </main>
  );
}
