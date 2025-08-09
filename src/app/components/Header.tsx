'use client';
import { useState, useEffect } from 'react';
import NavBar from "./NavBar";
import Image from 'next/image';


export default function Header() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 500); // Délai de 100ms

        return () => clearTimeout(timer);
    }, []);

    return (
        <header className={`header-transition ${isVisible ? 'header-visible' : 'header-hidden'}`}>
            <Image
                src="/bg5.jpg"
                alt="Header Background"
                layout="fill"
                objectFit="cover"
                quality={100}
                priority
            />
            <NavBar />

            <div className="header-cta">
                <h2 className="header-cta-title">Harmonie du corps et de l'âme</h2>
                <p className="header-cta-subtitle">Réservez un soin ou découvrez les formations</p>
                <div className="header-cta-actions">
                    <a href="/soins" className="btn btn-primary">Réserver un soin</a>
                    <a href="/formations" className="btn btn-ghost">Découvrir les formations</a>
                </div>
            </div>
        </header>
    );
  }
  