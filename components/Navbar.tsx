'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="wrapper">
        {/* Navigation */}
        <div className="navigation">
          {/* Logo */}
          <Link className="navigation__logo" href="/">
            <img alt="Logo niedzwiedzia" className="navigation__logo__panda" src="/img/pandastuio_logo_png.png" />
            <img alt="Logo FIT" src="/img/pandastudio_logo_text_png.png" />
          </Link>
          {/* Mobile navigation bars */}
          <button aria-label="Otworz menu" className="burger-btn" id="burgerButton">
            <div className="burger-btn__box">
              <div className="burger-btn__bars"></div>
            </div>
          </button>
          {/* Desktop navigation */}
          <div className="navigation__desktop-menu">
            <ul className="navigation__desktop-menu__ul">
              <li><Link href="/cennik" title="Trening">Cennik</Link></li>
              <li><Link href="/blog" title="Blog">Blog</Link></li>
              <li><Link href="/trening" title="Trening">Trening</Link></li>
              <li><Link href="/masaz" title="Masaż">Masaż</Link></li>
              <li><Link href="/contact" title="Kontakt">Kontakt</Link></li>
              <li>
                <button aria-label="SPRÓBUJ!" className="text" data-dialog="dialogOne">SPRÓBUJ!</button>
              </li>
            </ul>
          </div>
          {/* Mobile navigation */}
          <div className="navigation__mobile-menu">
            <ul className="navigation__mobile-menu__ul">
              <Link className="navigation__logo" href="/">
                <img alt="Logo niedzwiedzia" className="navigation__logo__panda" src="/img/pandastuio_logo_png.png" />
                <img alt="Logo FIT" src="/img/pandastudio_logo_text_png.png" />
              </Link>
              <li><Link href="/cennik" title="Trening">Cennik</Link></li>
              <li><Link href="/blog" title="Blog">Blog</Link></li>
              <li><Link href="/trening" title="Trening">Trening</Link></li>
              <li><Link href="/masaz" title="Masaż">Masaż</Link></li>
              <li><Link href="/contact" title="Kontakt">Kontakt</Link></li>
              <li>
                <button aria-label="SPRÓBUJ!" className="text" data-dialog="dialogOne">SPRÓBUJ!</button>
              </li>
              <li><p className="text__content"><a className="navigation__mobile-menu__contact"
                                                  href="https://g.co/kgs/P3n3EtW"
                                                  title="Adres"><strong>Treningi:</strong>
                Myśliwska 255,
                Rzeszów,
                PL
                35-242</a></p></li>
              <li><p className="text__content"><a className="navigation__mobile-menu__contact"
                                                  href="https://g.co/kgs/MBEjdC3"><strong>Masaże:</strong>
                Podkarpacka 12a,
                Rzeszów, PL
                35-082</a></p></li>
              <li><p className="text__content"><a className="navigation__mobile-menu__contact" href="tel:694 906 749"
                                                  title="694 906 749"><strong>Kontakt:</strong>
                +48 694 906 749
              </a></p></li>
            </ul>

          </div>
        </div>
      </div>
    </nav>
  );
}
