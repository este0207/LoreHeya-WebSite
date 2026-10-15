import Image from 'next/image';
import Link from 'next/link';
import NavBar2 from '../components/NavBar2';
import { readContent } from '@/lib/admin/content';

export const dynamic = 'force-dynamic';

export default async function StagesPage() {
  const stage = (await readContent()).stages?.[0] || {};
  return (
    <main className="stages-page">
      <NavBar2 />
      <section className="stages-intro">
        <span className="home-eyebrow">{stage.eyebrow || 'Rencontres en présentiel'}</span>
        <h1>{stage.title || 'Stages'}</h1>
        <p>{stage.description}</p>
      </section>
      <section className="stage-poster-section" aria-label="Affiche du stage">
        <div className="stage-poster-frame"><Image src={stage.image || '/Affiche_Deconditionnement_v5.png'} alt={stage.imageAlt || 'Affiche du stage'} fill sizes="(max-width: 800px) 100vw, 760px" priority /></div>
        <a className="btn btn-primary" href={stage.buttonLink || stage.image || '/Affiche_Deconditionnement_v5.png'} download>{stage.buttonText || 'Télécharger l’affiche'}</a>
      </section>
      <section className="section"><div className="container cta-banner">
        <div className="cta-banner-content"><h3>{stage.contactTitle || 'Des questions sur le stage ?'}</h3><p>{stage.contactText || 'Contactez-moi pour les renseignements et les inscriptions.'}</p></div>
        <Link href="/contact" className="btn btn-primary">Me contacter</Link>
      </div></section>
    </main>
  );
}
