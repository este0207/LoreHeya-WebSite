import Link from 'next/link';
import NavBar2 from '../components/NavBar2';
import { readContent } from '@/lib/admin/content';

export const dynamic = 'force-dynamic';

export default async function Retraite() {
  const retreat = (await readContent()).retraites?.[0] || {};
  return (
    <main className="retraite-page">
      <NavBar2 />
      <section className="soins-hero retraite-hero">
        <span className="home-eyebrow">{retreat.eyebrow || 'Séjours immersifs · Suède'}</span>
        <h1>{retreat.title || 'Retraites chamaniques'}</h1>
        <p>{retreat.description}</p>
      </section>
      <section className="retraite-dates-section"><div className="retraite-dates-card">
        <span className="home-eyebrow">Prochainement</span>
        <h2>{retreat.noticeTitle || 'Prochaines dates à venir'}</h2>
        <p>{retreat.noticeText}</p>
        <div className="retraite-dates-actions"><Link href="/contact" className="btn btn-primary">Me contacter</Link><Link href="/faq" className="btn btn-ghost">Questions fréquentes</Link></div>
      </div></section>
    </main>
  );
}
