import Image from "next/image";

export default function MassageOffer() {
    return (
        <section className="services">
            <div className="wrapper">
                <div className="services__heading">
                    <h3>
                        <span>Nasza oferta </span>
                    </h3>
                </div>
                <div className="services__box">
                    {/* Block 1 */}
                    <a
                        className="services__box__link"
                        href="https://booksy.com/pl-pl/17197_panda-masaz_masaz_10729_rzeszow"
                        target="_blank" rel="noopener noreferrer"
                    >
                        <div className="services__box__link__block">
                            <div className="services__box__link__block__title">
                                <div className="services__box__link__block__title__image">
                                    <Image alt="Masaż leczniczy" src="/img/masaz_leczniczy.jpg" width={60} height={60} />
                                </div>
                                <div className="services__box__link__block__title__heading">
                                    Masaż leczniczy
                                </div>
                            </div>
                            <div className="services__box__link__block__text">
                                <p>
                                    Skierowany na rozwiązywanie problemów związanych z bólem i
                                    dyskomfortem w ciele. Pomaga w niwelowaniu napięć i
                                    przywracaniu sprawności układu ruchu. Doskonały dla osób
                                    zmagających się z urazami czy przewlekłymi dolegliwościami.
                                </p>
                            </div>
                        </div>
                    </a>

                    {/* Block 2 */}
                    <a
                        className="services__box__link"
                        href="https://booksy.com/pl-pl/17197_panda-masaz_masaz_10729_rzeszow"
                        target="_blank" rel="noopener noreferrer"
                    >
                        <div className="services__box__link__block">
                            <div className="services__box__link__block__title">
                                <div className="services__box__link__block__title__image">
                                    <Image alt="Masaż sportowy" src="/img/masaze-sportowe-kontuzje.jpg" width={60} height={60} />
                                </div>
                                <div className="services__box__link__block__title__heading">
                                    Masaż sportowy
                                </div>
                            </div>
                            <div className="services__box__link__block__text">
                                <p>
                                    Idealny dla osób aktywnych fizycznie, wspomaga regenerację po
                                    treningach, poprawia wydolność i pomaga zapobiegać kontuzjom.
                                    To nieodzowny element zdrowego trybu życia każdego sportowca.
                                </p>
                            </div>
                        </div>
                    </a>

                    {/* Block 3 */}
                    <a
                        className="services__box__link"
                        href="https://booksy.com/pl-pl/17197_panda-masaz_masaz_10729_rzeszow"
                        target="_blank" rel="noopener noreferrer"
                    >
                        <div className="services__box__link__block">
                            <div className="services__box__link__block__title">
                                <div className="services__box__link__block__title__image">
                                    <Image alt="Masaż relaksacyjny" src="/img/masazach-relaksacyjny.jpg" width={60} height={60} />
                                </div>
                                <div className="services__box__link__block__title__heading">
                                    Masaż relaksacyjny
                                </div>
                            </div>
                            <div className="services__box__link__block__text">
                                <p>
                                    Chwila absolutnego spokoju i odprężenia. Redukuje stres,
                                    poprawia jakość snu i pozwala zyskać nową energię do
                                    codziennych wyzwań.
                                </p>
                            </div>
                        </div>
                    </a>

                    {/* Block 4 */}
                    <a
                        className="services__box__link"
                        href="https://booksy.com/pl-pl/17197_panda-masaz_masaz_10729_rzeszow"
                        target="_blank" rel="noopener noreferrer"
                    >
                        <div className="services__box__link__block">
                            <div className="services__box__link__block__title">
                                <div className="services__box__link__block__title__image">
                                    <Image alt="Masaż klasyczny" src="/img/masaz_klasyczny.jpg" width={60} height={60} />
                                </div>
                                <div className="services__box__link__block__title__heading">
                                    Masaż klasyczny
                                </div>
                            </div>
                            <div className="services__box__link__block__text">
                                <p>
                                    Uniwersalna technika, która łączy elementy relaksu i terapii,
                                    poprawiając krążenie, elastyczność mięśni oraz ogólną
                                    kondycję ciała.
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}
