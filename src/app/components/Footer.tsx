"use client";

import Link from "next/link";
import { FaFacebook, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-top">
        <div className="footer-col brand">
          <h3 className="footer-title">Lore Heya Chamane</h3>
          <p className="footer-tagline">Soins chamaniques & énergétiques · Formations</p>
        </div>
        <nav aria-label="Pied de page" className="footer-col">
          <h4 className="footer-heading-1">Navigation</h4>
          <ul className="footer-links">
            <li><Link href="/formations">Formations</Link></li>
            <li><Link href="/stages">Stages</Link></li>
            <li><Link href="/soins">Soins</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
        <div className="footer-col">
          <h4 className="footer-heading">Contact</h4>
          <ul className="footer-contact">
            <li><FaEnvelope aria-hidden /> <a href="/contact">Me contacter</a></li>
            <li><FaPhone aria-hidden /> <a href="/contact">Prendre rendez-vous</a></li>
            <li><FaMapMarkerAlt aria-hidden /> Var · À distance</li>
          </ul>
          <div className="footer-social" aria-label="Réseaux sociaux">
            <a href="#" aria-label="Facebook" className="social-link"><FaFacebook aria-hidden /></a>
            <a href="#" aria-label="Instagram" className="social-link"><FaInstagram aria-hidden /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {year} Lore Heya. Tous droits réservés.</p>
        <p className="footer-legal"><Link href="/mentions-legales">Mentions légales</Link></p>
      </div>
    </footer>
  );
}
