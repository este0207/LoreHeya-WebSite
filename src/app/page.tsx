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
        <div className="container home-story">
          <h2>Mon parcours</h2>
          <p className="home-story-content">{`Enfant je voyais l avenir, les défunts, ressentais les blessures des autres... sans comprendre qui j etais ni quoi faire de ces capacités. 

          Ce n'est que des annes plus tard que tout est devenu clair lorsque 4 chamans traditionnels m ont reconnu comme "chamane de naissance" m expliquant que certains ancetres chamans marquent un de leur descendant comme leur successeur.  Celui ci devra suivre une longue formation afin de perpétuer les traditions ancestrales. 

          C'est ainsi qu a commencé mon enseignement, en France et en Mongolie vers un chemin qu il me semble n avoir jamais quitté. 

          Aujourd'hui je suis dévouée aux autres afin de transmettre toutes ces connaissances de mes Maîtres Chamans en faisant le pont entre le pays berceau du chamanisme et la France qui a perdu ses traditions. 

          Je propose des formations a distance et en présence pour ceux qui sont désignés Chamans mais aussi a tous ceux qui souhaitent devenir praticien en chamanisme et/ou se guérir de leurs propres blessures,
          Des soins, des guidances, et des voyages vers la Mongolie afin de rencontrer des Chamans traditionnels. `}</p>
        </div>
      </section>
      <div className="home-card-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 40, margin: '40px 0' }}>
        <Card
          title="Voyage en Mongolie"
          description="Immersion chamanique au cœur des steppes."
          buttonText="Découvrir le voyage"
          buttonLink="/Voyage_Mongolie"
          isDark={true}
          isCentered
          backgroundImage="/home_cards/mongolie.jpg"
        />
        <Card
          title="Plateforme de formation"
          description="Rééquilibrage, libération, ancrage."
          buttonText="Voir les soins"
          buttonLink="/soins"
          isDark
          isCentered
          backgroundImage="/home_cards/plateforme.jpeg"
        />
        <Card
          title="Formations"
          description="Devenez praticien·ne, développez vos dons."
          buttonText="Découvrir les formations"
          buttonLink="/formations"
          isDark={true}
          isCentered
          backgroundImage="/home_cards/formation.jpeg"
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
