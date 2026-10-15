import Card from './components/Card';
import Header from './components/Header';
import { readContent } from '@/lib/admin/content';

export const dynamic = 'force-dynamic';

export default async function Page() {
  const content = await readContent();
  const presentation = content.presentation?.[0] || {};
  const story = (presentation.story || '').split('\n').filter(Boolean);
  const cards = content.accueil || [];

  return (
    <main className="home-page">
      <Header content={presentation} />

      <section className="home-story-section">
        <div className="home-story-layout">
          <div className="home-story-copy">
            <span className="home-eyebrow">{presentation.storyEyebrow || 'Un chemin de transmission'}</span>
            <h2>{presentation.storyTitle || 'Mon parcours'}</h2>
            <div className="home-story-content">{story.map((paragraph, index) => <p key={`${index}-${paragraph.slice(0, 24)}`}>{paragraph}</p>)}</div>
          </div>

          <aside className="book-feature" aria-label="Le livre de Lore Heya">
            <div className="book-cover-wrap"><img src={presentation.bookImage || '/livre.jpg'} alt="Couverture du livre de Lore Heya" className="book-cover" /></div>
            <div className="book-feature-copy">
              <span className="home-eyebrow">À découvrir</span><h3>{presentation.bookTitle || 'Lire mon histoire'}</h3>
              <p>{presentation.bookText || 'Mon livre est disponible sur Amazon.'}</p>
              <a href={presentation.bookLink || 'https://www.amazon.fr/dp/B0GZFSF16W'} target="_blank" rel="noopener noreferrer" className="home-text-link">{presentation.bookLinkText || 'Découvrir le livre'} <span aria-hidden="true">↗</span></a>
            </div>
          </aside>
        </div>
      </section>

      <section className="home-offerings-section">
        <div className="home-offerings-inner">
          <div className="home-offerings-heading">
            <span className="home-eyebrow">{presentation.offeringsEyebrow || 'Explorer'}</span>
            <h2>{presentation.offeringsTitle || 'Des chemins pour vous accompagner'}</h2>
            <p>{presentation.offeringsText || 'Choisissez l’expérience qui résonne avec votre cheminement.'}</p>
          </div>
          <div className="home-card-grid">
            {cards.map((card, index) => <Card key={`${card.title}-${index}`} title={card.title} description={card.description} buttonText={card.buttonText} buttonLink={card.buttonLink} isDark isCentered backgroundImage={card.image} />)}
          </div>
        </div>
      </section>
    </main>
  );
}
