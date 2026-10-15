import Image from 'next/image';
import Link from 'next/link';
import NavBar2 from '../../components/NavBar2';
import { readContent } from '@/lib/admin/content';

export const dynamic = 'force-dynamic';

export default async function AltaiTripPage() {
  const trip = (await readContent()).altai?.[0] || {};
  const itinerary = (trip.itinerary || '').split('\n').filter(Boolean).map((entry) => {
    const [title, ...description] = entry.split('|');
    return { title, description: description.join('|') };
  });
  const highlights = (trip.highlights || '').split('\n').filter(Boolean);
  return (
    <main className="trip-detail-page">
      <NavBar2 />
      <section className="trip-detail-hero"><div className="trip-detail-hero-copy">
        <Link className="trip-back-link" href="/Voyage_Mongolie">← Tous les voyages</Link>
        <span className="home-eyebrow">{trip.eyebrow}</span><h1>{trip.title}</h1><p>{trip.description}</p>
        <div className="trip-detail-facts"><div><span>Dates</span><strong>{trip.dates}</strong></div><div><span>Durée</span><strong>{trip.duration}</strong></div><div><span>Tarif annoncé</span><strong>{trip.price}</strong></div><div><span>Groupe</span><strong>{trip.group}</strong></div></div>
        <Link href="/contact" className="btn btn-primary">Demander des informations</Link>
      </div><div className="trip-detail-cover"><Image src={trip.image || '/mongolie/533405572_1930248241162213_648155219399365275_n.jpg'} alt="Montagnes de l’Altaï en Mongolie" fill priority sizes="(max-width: 800px) 100vw, 46vw" /></div></section>
      <section className="trip-detail-section"><header className="trip-section-heading"><span className="home-eyebrow">Le parcours</span><h2>{trip.sectionTitle}</h2><p>{trip.sectionIntro}</p></header>
        <div className="trip-itinerary">{itinerary.map((stage, index) => <article className="trip-itinerary-card" key={`${index}-${stage.title}`}><span className="trip-step-number">{String(index + 1).padStart(2, '0')}</span><div><h3>{stage.title}</h3><p>{stage.description}</p></div></article>)}</div>
      </section>
      <section className="trip-detail-section trip-detail-two-col">
        <article className="trip-info-panel"><span className="home-eyebrow">Temps forts</span><h2>Montagnes et rencontres</h2><ul>{highlights.map((item, index) => <li key={`${index}-${item}`}>{item}</li>)}</ul></article>
        <article className="trip-info-panel trip-info-panel-muted"><span className="home-eyebrow">Repères pratiques</span><h2>Un voyage itinérant en altitude</h2>{(trip.practical || '').split('\n\n').filter(Boolean).map((paragraph, index) => <p key={index}>{paragraph}</p>)}</article>
      </section>
      <section className="trip-detail-cta"><h2>Prêt à préparer le départ ?</h2><p>Contactez-nous pour parler du parcours, des bivouacs et de la préparation physique.</p><div><Link href="/contact" className="btn btn-primary">Nous contacter</Link><Link href="/Voyage_Mongolie" className="btn btn-secondary">Voir l’autre voyage</Link></div></section>
    </main>
  );
}
