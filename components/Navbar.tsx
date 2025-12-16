import React from 'react';

export function Navbar(props) {
    return (
        <nav className = "nav">
            <div className = "wrapper">
                <div className = "navigation">
                    <a className = "navigation__logo" href = "index.html">
                        <img
                            alt = "Logo niedzwiedzia" className = "navigation__logo__panda"
                            src = "img/pandastuio_logo_png.png"
                        />
                        <img alt = "Logo FIT" src = "img/pandastudio_logo_text_png.png"/>
                    </a>
                    <button aria-label = "Otworz menu" className = "burger-btn" id = "burgerButton">
                        <div className = "burger-btn__box">
                            <div className = "burger-btn__bars"></div>
                        </div>
                    </button>
                    <div className = "navigation__desktop-menu">
                        <ul className = "navigation__desktop-menu__ul">
                            <li><a href = "cennik.html" title = "Trening">Cennik</a></li>
                            <li><a href = "blog.html" title = "Blog">Blog</a></li>
                            <li><a href = "trening.html" title = "Trening">Trening</a></li>
                            <li><a href = "masaz.html" title = "Masaż">Masaż</a></li>
                         
                            <li><a href = "contact.html" title = "Kontakt">Kontakt</a></li>
                            <li>
                                <button
                                    aria-label = "SPRÓBUJ!" className = "text" data-dialog = "dialogOne"
                                >SPRÓBUJ!
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className = "navigation__mobile-menu">
                        <ul className = "navigation__mobile-menu__ul">
                            <a className = "navigation__logo" href = "index.html">
                                <img
                                    alt = "Logo niedzwiedzia" className = "navigation__logo__panda"
                                    src = "img/pandastuio_logo_png.png"
                                />
                                <img alt = "Logo FIT" src = "img/pandastudio_logo_text_png.png"/>
                            </a>
                            <li><a href = "cennik.html" title = "Trening">Cennik</a></li>
                            <li><a href = "blog.html" title = "Blog">Blog</a></li>
                            <li><a href = "trening.html" title = "Trening">Trening</a></li>
                            <li><a href = "masaz.html" title = "Masaż">Masaż</a></li>
                    
                            <li><a href = "contact.html" title = "Kontakt">Kontakt</a></li>
                            <li>
                                <button
                                    aria-label = "SPRÓBUJ!" className = "text" data-dialog = "dialogOne"
                                >SPRÓBUJ!
                                </button>
                            </li>
                            <li><p className = "text__content"><a
                                className = "navigation__mobile-menu__contact"
                                href = "https://g.co/kgs/P3n3EtW"
                                title = "Adres"
                            ><strong>Treningi:</strong>
                                Myśliwska 255,
                                Rzeszów,
                                PL
                                35-242</a></p></li>
                            <li><p className = "text__content"><a
                                className = "navigation__mobile-menu__contact"
                                href = "https://g.co/kgs/MBEjdC3"
                            ><strong>Masaże:</strong>
                                Podkarpacka 12a,
                                Rzeszów, PL
                                35-082</a></p></li>
                            <li><p className = "text__content"><a
                                className = "navigation__mobile-menu__contact" href = "tel:694 906 749"
                                title = "694 906 749"
                            ><strong>Kontakt:</strong>
                                +48 694 906 749
                            </a></p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;