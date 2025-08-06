"use client";
import { useState, useEffect } from 'react';
import NavBar from "./NavBar";


export default function Header() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Déclenche l'apparition après un court délai pour permettre le rendu initial
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100); // Délai de 100ms

        return () => clearTimeout(timer);
    }, []);

    return (
        <header className={`header-transition ${isVisible ? 'header-visible' : 'header-hidden'}`}>
            <NavBar></NavBar>
        </header>
    );
  }
  