"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useUIContext } from "@/providers/UIContext";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openModal } = useUIContext();

  const toggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`nav ${isScrolled ? "nav--scrolled" : ""}`}>
      <div className="wrapper">
        <div className="navigation">
          {/* Logo */}
          <Link className="navigation__logo" href="/" title="Strona główna Panda Studio">
            <img
              alt="Logo niedźwiedzia"
              title="Logo niedźwiedzia"
              className="navigation__logo__panda"
              src="/img/pandastuio_logo_png.png"
            />
            <img alt="Logo FIT" title="Logo FIT" src="/img/pandastudio_logo_text_png.png" />
          </Link>
          {/* Mobile navigation bars */}
          <button
            aria-label="Otwórz menu nawigacji"
            className="burger-btn"
            id="burgerButton"
            onClick={toggleMenu}
          >
            <div className="burger-btn__box">
              <div className="burger-btn__bars"></div>
            </div>
          </button>
          {/* Desktop navigation */}
          <div className="navigation__desktop-menu">
            <ul className="navigation__desktop-menu__ul">
              <li>
                <Link href="/cennik" title="Zobacz cennik" className="text-small-semi-bold">
                  Cennik
                </Link>
              </li>
              <li>
                <Link href="/trening" title="Oferta treningowa" className="text-small-semi-bold">
                  Trening
                </Link>
              </li>
              <li>
                <Link href="/masaz" title="Oferta masażu" className="text-small-semi-bold">
                  Masaż
                </Link>
              </li>
              <li>
                <Link href="/baza-wiedzy" title="Baza wiedzy" className="text-small-semi-bold">
                  Baza wiedzy
                </Link>
              </li>
              <li>
                <Link href="/blog" title="Czytaj naszego bloga" className="text-small-semi-bold">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" title="Skontaktuj się z nami" className="text-small-semi-bold">
                  Kontakt
                </Link>
              </li>
              <li className="navigation__separator">|</li>
              <li>
                <button
                  aria-label="Spróbuj teraz - otwórz formularz"
                  className="navigation__cta-btn text-small-bold"
                  data-dialog="dialogOne"
                  onClick={openModal}
                >
                  SPRÓBUJ!
                </button>
              </li>
            </ul>
          </div>
          {/* Mobile navigation */}
          <div
            className={`navigation__mobile-menu ${isMobileMenuOpen ? "active" : ""
              }`}
          >
            <ul className="navigation__mobile-menu__ul">
              <Link className="navigation__logo" href="/" title="Strona główna Panda Studio">
                <img
                  alt="Logo niedźwiedzia"
                  title="Logo niedźwiedzia"
                  className="navigation__logo__panda"
                  src="/img/pandastuio_logo_png.png"
                />
                <img alt="Logo FIT" title="Logo FIT" src="/img/pandastudio_logo_text_png.png" />
              </Link>
              <li>
                <Link href="/cennik" title="Zobacz cennik">
                  Cennik
                </Link>
              </li>
              <li>
                <Link href="/trening" title="Oferta treningowa">
                  Trening
                </Link>
              </li>
              <li>
                <Link href="/masaz" title="Oferta masażu">
                  Masaż
                </Link>
              </li>
              <li>
                <Link href="/baza-wiedzy" title="Baza wiedzy">
                  Baza wiedzy
                </Link>
              </li>
              <li>
                <Link href="/blog" title="Czytaj naszego bloga">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" title="Skontaktuj się z nami">
                  Kontakt
                </Link>
              </li>
              <li>
                <button
                  aria-label="Spróbuj teraz - otwórz formularz"
                  className="text"
                  data-dialog="dialogOne"
                  onClick={() => {
                    openModal();
                    setIsMobileMenuOpen(false);
                  }}
                >
                  SPRÓBUJ!
                </button>
              </li>
              <li>
                <p className="text__content">
                  <a
                    className="navigation__mobile-menu__contact"
                    href="https://g.co/kgs/P3n3EtW"
                    title="Zobacz treningi w Mapach Google"
                  >
                    <strong>Treningi:</strong>
                    Myśliwska 255, Rzeszów, PL 35-242
                  </a>
                </p>
              </li>
              <li>
                <p className="text__content">
                  <a
                    className="navigation__mobile-menu__contact"
                    href="https://g.co/kgs/MBEjdC3"
                    title="Zobacz masaże w Mapach Google"
                  >
                    <strong>Masaże:</strong>
                    Podkarpacka 12a, Rzeszów, PL 35-082
                  </a>
                </p>
              </li>
              <li>
                <p className="text__content">
                  <a
                    className="navigation__mobile-menu__contact"
                    href="tel:694 906 749"
                    title="Zadzwoń do nas: 694 906 749"
                  >
                    <strong>Kontakt:</strong>
                    +48 694 906 749
                  </a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
