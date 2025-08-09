

"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav aria-label="Navigation principale">
      <div className="title">
        <h1>Lore Heya Chamane</h1>
      </div>

      <button
        className="burger"
        aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        aria-expanded={isMenuOpen}
        aria-controls="primary-navigation"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        {isMenuOpen ? (
          <FaTimes aria-hidden="true" focusable="false" />
        ) : (
          <FaBars aria-hidden="true" focusable="false" />
        )}
      </button>

      <div id="primary-navigation" className={`links ${isMenuOpen ? 'open' : ''}`} onClick={closeMenu}>
        <button className="mobile-close" aria-label="Fermer le menu" onClick={closeMenu}>
          <FaTimes aria-hidden="true" focusable="false" />
        </button>
        <ul onClick={(e) => e.stopPropagation()}>
          <li>
            <Link href="/formations" onClick={closeMenu}>FORMATIONS</Link>
          </li>
          <li>
            <Link href="/stages" onClick={closeMenu}>STAGES</Link>
          </li>
          <li>
            <Link href="/soins" onClick={closeMenu}>SOINS</Link>
          </li>
          <li>
            <Link href="/faq" onClick={closeMenu}>FAQ</Link>
          </li>
          <li>
            <Link href="/contact" onClick={closeMenu}>CONTACT</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
  