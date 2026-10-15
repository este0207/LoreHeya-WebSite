import Card from './components/Card';
import Header from './components/Header';

const story = [
  "Enfant, je voyais l'avenir et les défunts, et ressentais les blessures des autres, sans comprendre qui j'étais ni quoi faire de ces capacités.",
  'Des années plus tard, quatre chamans traditionnels m’ont reconnue comme « chamane de naissance ». Ils m’ont expliqué que certains ancêtres chamans désignent un descendant comme successeur, appelé à suivre une longue formation pour perpétuer les traditions.',
  "C'est ainsi qu'a commencé mon enseignement, en France et en Mongolie, sur un chemin que j'ai le sentiment de n'avoir jamais quitté.",
  "Aujourd’hui, à travers mon enseignement, mon rôle est de transmettre et d'intégrer en chacun de nous la sagesse ancestrale des peuples autochtones, en créant un pont entre leurs valeurs profondes et notre monde moderne qui s'en est progressivement éloigné.",
  "Depuis des millénaires, ces traditions portent une compréhension subtile de l'être humain, de la nature et des lois invisibles qui régissent la vie. Elles nous rappellent l'importance de l'équilibre, du respect du vivant, de l'écoute de l'intuition et de la responsabilité individuelle dans notre évolution.",
  "En m'appuyant sur les enseignements du chamanisme sibérien et mongol reçus auprès de différents maîtres chamans, je propose des outils concrets permettant à chacun de se reconnecter à son essence, de guérir ses blessures intérieures et de retrouver sa souveraineté énergétique.",
  "Mon approche ne vise pas à former des chamans, mais à rendre ces connaissances accessibles afin que chacun puisse devenir acteur de sa propre transformation et avancer vers une vie plus consciente, alignée et harmonieuse.",
  "Mon travail consiste ainsi à réintroduire dans notre société moderne les valeurs fondamentales de sagesse, d'équilibre et de respect du vivant, afin de participer à l'émergence d'un monde plus juste, plus conscient et profondément relié à la nature.",
];

export default function Page() {
  return (
    <main className="home-page">
      <Header />

      <section className="home-story-section">
        <div className="home-story-layout">
          <div className="home-story-copy">
            <span className="home-eyebrow">Un chemin de transmission</span>
            <h2>Mon parcours</h2>
            <div className="home-story-content">
              {story.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>

          <aside className="book-feature" aria-label="Le livre de Lore Heya">
            <div className="book-cover-wrap">
              <img src="/livre.jpg" alt="Couverture du livre de Lore Heya" className="book-cover" />
            </div>
            <div className="book-feature-copy">
              <span className="home-eyebrow">À découvrir</span>
              <h3>Lire mon histoire</h3>
              <p>Mon livre est disponible sur Amazon.</p>
              <a href="https://www.amazon.fr/dp/B0GZFSF16W" target="_blank" rel="noopener noreferrer" className="home-text-link">
                Découvrir le livre <span aria-hidden="true">↗</span>
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="home-offerings-section">
        <div className="home-offerings-inner">
          <div className="home-offerings-heading">
            <span className="home-eyebrow">Explorer</span>
            <h2>Des chemins pour vous accompagner</h2>
            <p>Choisissez l’expérience qui résonne avec votre cheminement.</p>
          </div>

          <div className="home-card-grid">
            <Card
              title="Voyages en Mongolie"
              description="Immersion chamanique au cœur des steppes."
              buttonText="Découvrir le voyage"
              buttonLink="/Voyage_Mongolie"
              isDark
              isCentered
              backgroundImage="/home_cards/mongolie.jpg"
              backgroundPosition="center 30%"
            />
            <Card
              title="Formations"
              description="Devenez praticien.ne en chamanisme."
              buttonText="Accéder à la plateforme"
              buttonLink="https://ecoledechamanisme.teachizy.fr/"
              isDark
              isCentered
              backgroundImage="/home_cards/plateforme.jpeg"
            />
            <Card
              title="Retraites chamaniques"
              description="Séjours au cœur de la nature sauvage en Suède."
              buttonText="Découvrir les retraites"
              buttonLink="/retraite"
              isDark
              isCentered
              backgroundImage="/home_cards/formation.jpeg"
              backgroundPosition="center 40%"
            />
            <Card
              title="Stages"
              description="Expériences collectives, transformation profonde."
              buttonText="Voir les stages"
              buttonLink="/stages"
              isDark
              isCentered
              backgroundImage="/home_cards/stages.jpeg"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
