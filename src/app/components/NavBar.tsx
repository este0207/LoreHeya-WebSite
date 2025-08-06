

"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
// import { Search, ShoppingCart, User } from 'lucide-react';

export default function NavBar() {
    // const [scrolled, setScrolled] = useState(false);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const isScrolled = window.scrollY > 10;
    //         if (isScrolled !== scrolled) {
    //             setScrolled(isScrolled);
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, [scrolled]);

    return (
      <nav>
        <div className="title">
          <h1>LoreHeya</h1>
          {/* <div className="logos">
            <Link href="/search"><Search /></Link>
            <Link href="/cart"><ShoppingCart /></Link>
            <Link href="/login"><User /></Link>
          </div> */}
        </div>
        <div className="links">
          <ul>
            <li><Link href="/formations">FORMATIONS</Link></li>
            <li><Link href="/stages">STAGES</Link></li>
            <li><Link href="/soins">SOINS</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/contact">CONTACT</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
  