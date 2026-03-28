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
                <h2 id="stage-suede" style={{ textAlign: 'left', marginBottom: '3rem', marginTop: '3rem' }}>STAGE EN SUÈDE - DU 7 AU 11 OCTOBRE 2026</h2>
                <div>
                  <p>
                    <strong>DU 7 AU 11 OCTOBRE 2026</strong><br/>
                    <em>Lieu : Sud de la Suède</em>
                  </p>
                  <p>
                    Au cœur du sud de la Suède, dans une nature préservée et profondément ressourçante, venez nous rejoindre lors de cérémonies sacrées autour du feu.
                    Une expérience unique pour ralentir, vous reconnecter à vous-même et aux forces de la nature.
                  </p>
                  <p>
                    <strong>Programme:</strong>
                  </p>
                  <ul className="list">
                    <li><strong>Jour 1 (7 oct):</strong> Arrivée, installation en forêt, dîner traditionnel suédois, cérémonie d'ouverture autour du feu</li>
                    <li><strong>Jour 2 (8 oct):</strong> Accueil du soleil avec offrandes, balade en nature, enseignements sur la connexion avec ses guides, cérémonie de serment</li>
                    <li><strong>Jour 3 (9 oct):</strong> Randonnée autour des lacs, enseignements sur les protections et le positionnement de guérisseur, cérémonie de transmutation</li>
                    <li><strong>Jour 4 (10 oct):</strong> Temps libre à Göteborg, déjeuner typique suédois, cérémonie de clôture</li>
                    <li><strong>Jour 5 (11 oct):</strong> Groupe de parole, retour à l'aéroport</li>
                  </ul>
                  <p>
                    Aurores boréales possibles selon la météo. Ce stage rappelle les conditions de rituels en Mongolie.
                  </p>
                  <p>
                    <strong>Tarif: 1050 euros</strong> (hors vol)<br/>
                    Compris: Logement en chambres partagées, repas, transport aéroport, cérémonies, enseignements, consultations avec les oracles
                  </p>
                </div>
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
