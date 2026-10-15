import Link from "next/link";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

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
            <li><Link href="/soins">Guidances</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
        <div className="footer-col">
          <h4 className="footer-heading">Contact</h4>
          <ul className="footer-contact">
            <li><FaEnvelope aria-hidden="true" /> <Link href="/contact">Me contacter</Link></li>
            <li><FaEnvelope aria-hidden="true" /> <Link href="/contact">Demander un rendez-vous</Link></li>
            <li><FaMapMarkerAlt aria-hidden="true" /> Roquebrune-sur-Argens · À distance</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {year} Lore Heya. Tous droits réservés.</p>
        <p className="footer-legal"><Link href="/mentions-legales">Mentions légales</Link></p>
      </div>
    </footer>
  );
}
