import NavBar from "./NavBar";
import Image from 'next/image';

type HeaderContent = { heroEyebrow?: string; heroTitle?: string; heroSubtitle?: string; heroPrimary?: string; heroPrimaryLink?: string; heroSecondary?: string; heroSecondaryLink?: string; heroImage?: string };

export default function Header({ content = {} }: { content?: HeaderContent }) {
    return (
        <header className="home-hero">
            <Image
                src={content.heroImage || '/bg5.jpg'}
                alt=""
                fill
                sizes="100vw"
                className="home-hero-image"
                priority
            />
            <NavBar />

            <div className="header-cta">
                <span className="hero-eyebrow">{content.heroEyebrow || 'Soins · Transmission · Voyages'}</span>
                <h2 className="header-cta-title">{content.heroTitle || "Harmonie du corps et de l'âme"}</h2>
                <p className="header-cta-subtitle">{content.heroSubtitle || 'Réservez une guidance ou découvrez les formations'}</p>
                <div className="header-cta-actions">
                    <a href={content.heroPrimaryLink || '/soins'} className="btn btn-primary">{content.heroPrimary || 'Réserver une guidance'}</a>
                    <a href={content.heroSecondaryLink || '/formations'} className="btn btn-hero-ghost">{content.heroSecondary || 'Découvrir les formations'}</a>
                </div>
            </div>
        </header>
    );
  }
