import NavBar from "./NavBar";
import Image from 'next/image';

export default function Header() {
    return (
        <header className="home-hero">
            <Image
                src="/bg5.jpg"
                alt=""
                fill
                sizes="100vw"
                className="home-hero-image"
                priority
            />
            <NavBar />

            <div className="header-cta">
                <span className="hero-eyebrow">Soins · Transmission · Voyages</span>
                <h2 className="header-cta-title">Harmonie du corps et de l'âme</h2>
                <p className="header-cta-subtitle">Réservez une guidance ou découvrez les formations</p>
                <div className="header-cta-actions">
                    <a href="/soins" className="btn btn-primary">Réserver une guidance</a>
                    <a href="/formations" className="btn btn-hero-ghost">Découvrir les formations</a>
                </div>
            </div>
        </header>
    );
  }
