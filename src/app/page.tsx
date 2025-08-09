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
      setTimeout(() => setLoading(false), 2000); 
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
      <div className="CardContainer">
        <Card
          title="Platon"
          description={`-On ne peut guérir la partie sans soigner le tout.
-On ne doit pas soigner le corps séparé de l'âme,
et pour que l'esprit et le corps retrouvent la santé,
il faut commencer par soigner l'âme.`}
          isDark={false}
          isCentered
        />
        <Card
          title="Quisque et justo in ligula"
          description="Quisque et justo in ligula. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          buttonText="Découvrir"
          buttonLink="#"
          isDark={true}
          backgroundImage="/bg2.jpg" // Exemple d'image de fond
        />
      </div>
    </main>
  );
}
