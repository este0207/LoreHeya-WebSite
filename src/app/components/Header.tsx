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
                src="/bg8.jpg"
                alt="Header Background"
                layout="fill"
                objectFit="cover"
                quality={100}
                priority
            />
            <NavBar></NavBar>    
            <button>next</button>
        </header>
    );
  }
  