import Image from 'next/image';
import Link from 'next/link';
import NavBar2 from '../components/NavBar2';
import { readContent } from '@/lib/admin/content';


export const dynamic = 'force-dynamic';

export default async function VoyageMongoliePage() {
  const content = await readContent();
  const trips = content.voyages || [];
  return (
    <main className="voyage-2027-page">
      <NavBar2 />

      <section className="voyage-2027-hero">
        <span className="home-eyebrow">Voyages initiatiques · été 2027</span>
        <h1>La Mongolie, au rythme de ses traditions</h1>
        <p>Deux itinéraires pour rencontrer les chamanes mongols, découvrir les grands espaces et vivre une immersion au cœur des steppes.</p>
        <a href="#voyages-2027" className="btn btn-primary">Découvrir les voyages</a>
      </section>

      <section className="voyage-2027-section" id="voyages-2027">
        <div className="voyage-2027-intro">
          <span className="home-eyebrow">Les départs</span>
          <h2>Deux voyages en juillet 2027</h2>
          <p>Retrouvez ici les dates et les temps forts de chaque itinéraire. Chaque voyage possède sa page détaillée avec les étapes et les informations pratiques.</p>
        </div>

        <div className="voyage-2027-grid">
          {trips.map((trip) => (
            <article className="voyage-trip-card" key={trip.name}>
              <div className="voyage-trip-image">
                <Image src={trip.image} alt={trip.imageAlt} fill sizes="(max-width: 800px) 100vw, 50vw" />
                <span className="voyage-trip-tag">{trip.name}</span>
              </div>
              <div className="voyage-trip-content">
                <div className="voyage-trip-date">
                  <span>{trip.dates}</span><span>{trip.duration}</span>
                </div>
                <h3>{trip.title}</h3>
                <h4>Temps forts du programme</h4>
                <ul className="list">
                  {trip.highlights.split('\n').filter(Boolean).map((highlight, index) => <li key={`${index}-${highlight}`}>{highlight}</li>)}
                </ul>
                <Link className="btn btn-primary voyage-program-link" href={trip.detailHref}>
                  Programme détaillé <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container cta-banner">
          <div className="cta-banner-content">
            <h3>Une question sur les voyages 2027 ?</h3>
            <p>Écrivez-moi pour échanger sur le programme et votre projet de départ.</p>
          </div>
          <Link href="/contact" className="btn btn-primary">Me contacter</Link>
        </div>
      </section>
    </main>
  );
}
