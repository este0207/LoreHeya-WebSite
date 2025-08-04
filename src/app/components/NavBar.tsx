"use client";
import React from "react";
import Link from "next/link";
import { Search, ShoppingCart } from "lucide-react";

export default function NavBar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4 items-center justify-center bg">
        {/* Liens gauche */}
        <ul className="flex gap-6 text-sm font-medium text-gray-800 uppercase">
          <li><Link href="/formations" className="hover:text-emerald-700">Formations</Link></li>
          <li><Link href="/stages" className="hover:text-emerald-700">Stages</Link></li>
          <li><Link href="/soins" className="hover:text-emerald-700">Soins</Link></li>
        </ul>

        {/* Logo centré */}
        <div className="text-3xl font-serif text-gray-900">
          <Link href="/">LoreHeya</Link>
        </div>

        {/* Liens droite + icônes */}
        {/* <div className="flex items-center gap-6">
          <ul className="flex gap-6 text-sm font-medium text-gray-800 uppercase">
            <li><Link href="/faq" className="hover:text-emerald-700">FAQ</Link></li>
            <li><Link href="/contact" className="hover:text-emerald-700">Contact</Link></li>
          </ul>
          <div className="flex items-center gap-4 ml-4 text-gray-700">
            <Search className="w-5 h-5 hover:text-emerald-700 cursor-pointer" />
            <ShoppingCart className="w-5 h-5 hover:text-emerald-700 cursor-pointer" />
          </div>
        </div> */}
      </nav>
    </header>
  );
}
