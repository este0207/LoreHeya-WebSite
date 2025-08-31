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
              title="Chamanisme Mongol Traditionnel"
              description="Déplacement exceptionnel en France d'un Chaman Mongol traditionnel. Mooggii, Chaman Blanc de 25 ans d'expérience."
              buttonText="Découvrir les stages"
              buttonLink="#stage-mongol"
              backgroundImage="/chaman.jpg"
            />
          </div>
        </div>
      </section>



      {/* Détails du stage chamanisme mongol */}
      <section className="section">
        <div className="container">
          <h2 id="stage-mongol" style={{ textAlign: 'center', marginBottom: '3rem' }}>Chamanisme Mongol Traditionnel avec Mooggii</h2>
          
          <div className="grid-2" style={{ alignItems: 'flex-start', gap: '3rem' }}>
            <div className="flow">
              <p>
                <strong>Déplacement exceptionnel en France d'un Chaman Mongol traditionnel</strong><br/>
                Mooggii, Chaman Blanc de 25 ans d'expérience, faisant partie de l'association « Maison de lumière » garantissant son travail, 
                sera accompagné de Chimegma, traductrice Franco-Mongole et directrice de l'agence de voyage en Mongolie Orsoo Voyages et de Lore Heya Chamane.
              </p>
              
              <h3>Dates et lieux</h3>
              <div className="grid-2">
                <div>
                  <h4>Week-end du 14/15/16 novembre</h4>
                  <p><strong>Montauroux (83)</strong></p>
                </div>
                <div>
                  <h4>Week-end du 21/22/23 novembre</h4>
                  <p><strong>Saint-Vallier-de-Thiey (06)</strong></p>
                </div>
              </div>

              <h3>Au programme</h3>
              <ul className="list">
                <li>Enseignement de Chamanisme Mongol traditionnel avec traductrice</li>
                <li>Cérémonies du feu</li>
                <li>Incorporation des Oracles (Ancêtres)</li>
                <li>Repas et petits déjeuners compris</li>
                <li>Cuisine mongole traditionnelle préparée par une cuisinière</li>
              </ul>

              <h3>Tarifs et services</h3>
              <ul className="list">
                <li><strong>490€</strong> - Stage (repas et petits déjeuners compris)</li>
                <li><strong>80€</strong> - Consultation privée avec le Chaman</li>
                <li><strong>80€</strong> - Massage-soin</li>
                <li><em>Logement à prévoir</em></li>
              </ul>

              <div className="alert">
                <p>
                  <strong>Important :</strong> Ces dates sont conditionnées par l'attribution de son visa en France. 
                  Ce stage sera très demandé, réservez votre place dès maintenant.
                </p>
              </div>
            </div>
            
            <div style={{ position: 'sticky', top: '2rem' }}>
              <img 
                src="/chaman.jpg" 
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
