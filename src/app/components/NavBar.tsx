import { FaSearch } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import React from "react";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center py-4 px-8">
      <ul className="flex gap-8 text-lg font-medium">
        <li><Link href="/formations">Formations</Link></li>
        <li><Link href="/stages">Stages</Link></li>
        <li><Link href="/soins">Soins</Link></li>
        <li><Link href="/faq">FAQ</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
      <div className="flex gap-6 items-center text-xl">
        <button aria-label="Recherche"><FaSearch /></button>
        <button aria-label="Panier ou profil"><FiShoppingCart /></button>
      </div>
    </nav>
  );
}