'use client';

import Card from "./components/Card";
import Header from "./components/Header";
import LoadingScreen from "./components/LoadingScreen";
import { useState, useEffect } from "react";

export default function Page() {
  const [loading, setLoading] = useState(true);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadingOut(true);
      setTimeout(() => setLoading(false), 500); 
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newMargin = Math.max(0, 10 - scrollY / 20);
      document.documentElement.style.margin = `${newMargin}px`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (loading) {
    return <LoadingScreen isFadingOut={fadingOut} />;
  }

  return (
    <main>
      <Header></Header>
      <section className="section">
          <div className="book-banner" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#f5f0e8', padding: '16px', borderRadius: 8, marginBottom: 20, backgroundColor: '#ffffff', margin: '0 40px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 16}}>
              <img src="/livre.jpg" alt="Couverture du livre" style={{width: 96, height: 'auto', borderRadius: 6, objectFit: 'cover'}} />
              <div style={{display: 'flex', flexDirection: 'column'}}>
                <strong style={{fontSize: 18, color: '#1a4314'}}>Lire Mon Histoire</strong>
                <span style={{fontSize: 14, color: '#1a4314'}}>Mon livre disponible sur Amazon</span>
              </div>
            </div>
            <a href="https://www.amazon.fr/dp/B0GZFSF16W" target="_blank" rel="noopener noreferrer" style={{background: '#ffffff', color: '#28691E', padding: '10px 16px', borderRadius: 6, textDecoration: 'none' , border: '1px solid #28691E'}}>Voir le livre</a>
          </div>
        <div className="container home-story">
          

          <h2>Mon parcours</h2>
          <p className="home-story-content">{`Enfant je voyais l'avenir, les défunts, ressentais les blessures des autres... sans comprendre qui j'etais ni quoi faire de ces capacités. 

          Ce n'est que des années plus tard que tout est devenu clair lorsque 4 chamans traditionnels m ont reconnu comme "chamane de naissance" m'expliquant que certains ancetres chamans marquent un de leur descendant comme leur successeur.  Celui ci devra suivre une longue formation afin de perpétuer les traditions ancestrales. 

          C'est ainsi qu'a commencé mon enseignement, en France et en Mongolie vers un chemin qu'il me semble n'avoir jamais quitté. 

          Aujourd’hui, à travers mon enseignement, mon rôle est de transmettre et d'intégrer en chacun de nous la sagesse ancestrale des peuples autochtones, en créant un pont entre leurs valeurs profondes et notre monde moderne qui s'en est progressivement éloigné.

          Depuis des millénaires, ces traditions portent une compréhension subtile de l'être humain, de la nature et des lois invisibles qui régissent la vie. Elles nous rappellent l'importance de l'équilibre, du respect du vivant, de l'écoute de l'intuition et de la responsabilité individuelle dans notre évolution.

          En m'appuyant sur les enseignements du chamanisme sibérien et mongol reçus auprès de différents maîtres chamans, je propose des outils concrets permettant à chacun de se reconnecter à son essence, de guérir ses blessures intérieures et de retrouver sa souveraineté énergétique.

          Mon approche ne vise pas à former des chamans, mais à rendre ces connaissances accessibles afin que chacun puisse devenir acteur de sa propre transformation et avancer vers une vie plus consciente, alignée et harmonieuse.
          
          Mon travail consiste ainsi à réintroduire dans notre société moderne les valeurs fondamentales de sagesse, d'équilibre et de respect du vivant, afin de participer à l'émergence d'un monde plus juste, plus conscient et profondément relié à la nature.`}</p>
          </div>
      </section>
      <div className="home-card-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 40, margin: '40px 0' }}>
        <Card
          title="Voyages en Mongolie"
          description="Immersion chamanique au cœur des steppes."
          buttonText="Découvrir le voyage"
          buttonLink="/Voyage_Mongolie"
          isDark={true}
          isCentered
          backgroundImage="/home_cards/mongolie.jpg"
          backgroundPosition="center 30%"
        />
        <Card
          title="Formations"
          description="Devenez praticien.ne en chamanisme."
          buttonText="Accéder a la plateforme"
          buttonLink="https://ecoledechamanisme.teachizy.fr/?fbclid=IwY2xjawMhSCdleHRuA2FlbQIxMQABHlWoY6FFy1X422fKeZ0IHsXekwJeUbHhxtWzfDTNjrf_AU2jrEYgIKeEsvrU_aem_8rnFE32QyzZcQ9ahw2S5cQ"
          isDark
          isCentered
          backgroundImage="/home_cards/plateforme.jpeg"
        />
        <Card
          title="Retraites chamaniques"
          description="Séjours au cœur de la nature sauvage en Suède."
          buttonText="Découvrir les Voyages"
          buttonLink="/retraite"
          isDark={true}
          isCentered
          backgroundImage="/home_cards/formation.jpeg"
          backgroundPosition="center 40%"
        />
        <Card
          title="Stages"
          description="Expériences collectives, transformation profonde."
          buttonText="Voir les stages"
          buttonLink="/stages"
          isDark={true}
          isCentered
          backgroundImage="/home_cards/stages.jpeg"
        />
      </div>
    </main>
  );
}
