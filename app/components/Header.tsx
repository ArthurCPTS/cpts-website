"use client";

import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Logo CPTS Porte de France Moselle"
            width={48}
            height={48}
            className="object-contain"
          />
          <div className="leading-tight">
            <p className="font-bold text-[#6B5B8E] text-sm tracking-wide uppercase">CPTS</p>
            <p className="text-xs text-gray-500 font-medium">Porte de France Moselle</p>
          </div>
        </a>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="/" className="text-sm text-gray-600 hover:text-[#6B5B8E] transition-colors font-medium">
            Accueil
          </a>

          <a href="/actualites" className="text-sm text-gray-600 hover:text-[#6B5B8E] transition-colors font-medium">
            Actualités
          </a>

          {/* Dropdown L'association */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-[#6B5B8E] transition-colors font-medium">
              L&apos;association
              <svg className="w-3 h-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-0 mt-2 w-44 bg-white border border-gray-100 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
              <a
                href="/bureau"
                className="block px-4 py-3 text-sm text-gray-600 hover:text-[#6B5B8E] hover:bg-gray-50 rounded-t-xl transition-colors"
              >
                Le bureau
              </a>
              <a
                href="/equipe"
                className="block px-4 py-3 text-sm text-gray-600 hover:text-[#6B5B8E] hover:bg-gray-50 rounded-b-xl transition-colors"
              >
                L&apos;équipe
              </a>
            </div>
          </div>

          {/* Recherche médecin traitant */}
          <a
            href="https://forms.office.com/Pages/ResponsePage.aspx?id=Ak39WFt7pka5G-9_-84yu7adm23pK9dKuHTJ6xsRsgNUQ1lWTFVSUU1JN0ZDSFZDUkYyMUI4R05QSCQlQCN0PWcu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-600 hover:text-[#6B5B8E] transition-colors font-medium"
          >
            Médecin traitant
          </a>

          {/* Dropdown Ressources */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-[#6B5B8E] transition-colors font-medium">
              Ressources
              <svg className="w-3 h-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-0 mt-2 w-52 bg-white border border-gray-100 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
              <a
                href="/annuaire-pro-sante/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 text-sm text-gray-600 hover:text-[#6B5B8E] hover:bg-gray-50 rounded-t-xl transition-colors"
              >
                Annuaire pro de santé
              </a>
              <a
                href="/annuaire-obesite/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 text-sm text-gray-600 hover:text-[#6B5B8E] hover:bg-gray-50 transition-colors"
              >
                Annuaire obésité
              </a>
              <a
                href="/nomenclature/IDEL_nomenclature.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 text-sm text-gray-600 hover:text-[#6B5B8E] hover:bg-gray-50 rounded-b-xl transition-colors"
              >
                Nomenclature IDEL
              </a>
            </div>
          </div>

          <a
            href="/#contact"
            className="bg-[#6B5B8E] text-white text-sm px-4 py-2 rounded-lg hover:bg-[#5a4a7a] transition-colors font-medium"
          >
            Nous contacter
          </a>
        </nav>

        {/* Bouton hamburger (mobile) */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Ouvrir le menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-700 transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Menu mobile déroulant */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 flex flex-col gap-1">
          <a
            href="/"
            onClick={() => setMenuOpen(false)}
            className="text-sm text-gray-600 hover:text-[#6B5B8E] transition-colors font-medium py-2"
          >
            Accueil
          </a>

          <a
            href="/actualites"
            onClick={() => setMenuOpen(false)}
            className="text-sm text-gray-600 hover:text-[#6B5B8E] transition-colors font-medium py-2 border-t border-gray-100 pt-3 mt-1"
          >
            Actualités
          </a>

          {/* L'association (mobile) */}
          <div className="flex flex-col gap-1 border-t border-gray-100 pt-2 mt-1">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest py-1">L&apos;association</p>
            <a
              href="/bureau"
              onClick={() => setMenuOpen(false)}
              className="text-sm text-gray-600 hover:text-[#6B5B8E] transition-colors font-medium py-2"
            >
              Le bureau
            </a>
            <a
              href="/equipe"
              onClick={() => setMenuOpen(false)}
              className="text-sm text-gray-600 hover:text-[#6B5B8E] transition-colors font-medium py-2"
            >
              L&apos;équipe
            </a>
          </div>

          {/* Médecin traitant (mobile) */}
          <a
            href="https://forms.office.com/Pages/ResponsePage.aspx?id=Ak39WFt7pka5G-9_-84yu7adm23pK9dKuHTJ6xsRsgNUQ1lWTFVSUU1JN0ZDSFZDUkYyMUI4R05QSCQlQCN0PWcu"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="text-sm text-gray-600 hover:text-[#6B5B8E] transition-colors font-medium py-2 border-t border-gray-100 pt-3 mt-1"
          >
            Médecin traitant
          </a>

          {/* Annuaire (mobile) */}
          <div className="flex flex-col gap-1 border-t border-gray-100 pt-2 mt-1">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest py-1">Ressources</p>
            <a
              href="/annuaire-pro-sante/index.html"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="text-sm text-gray-600 hover:text-[#6B5B8E] transition-colors font-medium py-2"
            >
              Annuaire pro de santé
            </a>
            <a
              href="/annuaire-obesite/index.html"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="text-sm text-gray-600 hover:text-[#6B5B8E] transition-colors font-medium py-2"
            >
              Annuaire obésité
            </a>
            <a
              href="/nomenclature/IDEL_nomenclature.html"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="text-sm text-gray-600 hover:text-[#6B5B8E] transition-colors font-medium py-2"
            >
              Nomenclature IDEL
            </a>
          </div>

          <a
            href="/#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-3 bg-[#6B5B8E] text-white text-sm px-4 py-2.5 rounded-lg hover:bg-[#5a4a7a] transition-colors font-medium text-center"
          >
            Nous contacter
          </a>
        </div>
      )}
    </header>
  );
}
