import Image from "next/image";
import Link from "next/link";

export default function Services() {
    return (
        <section className="services">
            <div className="wrapper">
                {/* Services Heading */}
                <div className="services__heading">
                    <h3 className="heading-h4">
                        <span>Aktywność fizyczna </span> to fundament zdrowia, który wspiera
                        prawidłowe funkcjonowanie układu ruchu, harmonizuje napięcia
                        mięśniowe i daje ciału szansę na regenerację oraz pełnię sprawności.
                    </h3>
                </div>
                {/* Services box section */}
                <div className="services__box">
                    {/* Block 1 */}
                    <Link className="services__box__link" href="/trening" title="Zobacz ofertę: Poprawa sylwetki">
                        <div className="services__box__link__block">
                            <div className="services__box__link__block__title">
                                <div className="services__box__link__block__title__image">
                                    <Image
                                        alt="Dziewczyna trenuje Crossfit"
                                        title="Dziewczyna trenuje Crossfit"
                                        src="/img/panda_studio_spalania.png"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="services__box__link__block__title__heading">
                                    Poprawa sylwetki
                                </div>
                            </div>
                            <div className="services__box__link__block__text">
                                <p>
                                    Ten program to kompleksowe podejście do budowy wymarzonej
                                    sylwetki. Skupia się na spalaniu tkanki tłuszczowej,
                                    modelowaniu mięśni oraz poprawie ogólnej sprawności.
                                </p>
                            </div>
                        </div>
                    </Link>
                    {/* Block 2 */}
                    <Link className="services__box__link" href="/trening" title="Zobacz ofertę: Trening funkcjonalny">
                        <div className="services__box__link__block">
                            <div className="services__box__link__block__title">
                                <div className="services__box__link__block__title__image">
                                    <Image
                                        alt="Mezczyzna robi trening funkcjonalny"
                                        title="Mężczyzna robi trening funkcjonalny"
                                        src="/img/panda_studio_bodybuilding.png"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="services__box__link__block__title__heading">
                                    Trening funkcjonalny
                                </div>
                            </div>
                            <div className="services__box__link__block__text">
                                <p>
                                    Ten program pomoże Ci wzmocnić całe ciało, poprawić
                                    stabilność, mobilność i koordynację. Trening funkcjonalny
                                    opiera się na naturalnych ruchach, które angażują wiele partii
                                    mięśniowych jednocześnie, przygotowując organizm do
                                    codziennych aktywności.
                                </p>
                            </div>
                        </div>
                    </Link>
                    {/* Block 3 */}
                    <Link className="services__box__link" href="/trening" title="Zobacz ofertę: Trening w parach">
                        <div className="services__box__link__block">
                            <div className="services__box__link__block__title">
                                <div className="services__box__link__block__title__image">
                                    <Image
                                        alt="Trening dwoch osob w parach"
                                        title="Trening dwóch osób w parach"
                                        src="/img/panda_studio_crossfit.png"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="services__box__link__block__title__heading">
                                    Trening w parach
                                </div>
                            </div>
                            <div className="services__box__link__block__text">
                                <p>
                                    Trening w parach to świetny sposób na wspólną motywację i
                                    zabawę podczas ćwiczeń! Ćwiczenia angażują całe ciało,
                                    wykorzystując współpracę, dynamiczne ruchy i elementy
                                    rywalizacji. To idealna opcja dla przyjaciół, par i rodzin,
                                    którzy chcą razem osiągać swoje cele fitness!
                                </p>
                            </div>
                        </div>
                    </Link>
                    {/* Block 4 */}
                    <Link className="services__box__link" href="/trening" title="Zobacz ofertę: Trening po kontuzjach">
                        <div className="services__box__link__block">
                            <div className="services__box__link__block__title">
                                <div className="services__box__link__block__title__image">
                                    <Image
                                        alt="Zdjecie rechabilitacji mezczyzny"
                                        title="Zdjęcie rehabilitacji mężczyzny"
                                        src="/img/panda_studio_rehabiltacja.jpg"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="services__box__link__block__title__heading">
                                    Trening po kontuzjach
                                </div>
                            </div>
                            <div className="services__box__link__block__text">
                                <p>
                                    Program stworzony z myślą o bezpiecznym powrocie do pełnej
                                    sprawności. Skupia się na wzmacnianiu osłabionych obszarów,
                                    poprawie mobilności i zapobieganiu nawrotom urazów. Idealny
                                    dla osób, które chcą wrócić do aktywności fizycznej w zdrowy i
                                    zrównoważony sposób.
                                </p>
                            </div>
                        </div>
                    </Link>
                    {/* Block 5 */}
                    <Link className="services__box__link" href="/trening" title="Zobacz ofertę: Zajęcia w małych grupach">
                        <div className="services__box__link__block">
                            <div className="services__box__link__block__title">
                                <div className="services__box__link__block__title__image">
                                    <Image
                                        alt="Zdjecie masazu mezczyzny"
                                        title="Zdjęcie masażu mężczyzny"
                                        src="/img/panda_studio_grupy.jpg"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="services__box__link__block__title__heading">
                                    Zajęcia <br /> w małych grupach
                                </div>
                            </div>
                            <div className="services__box__link__block__text">
                                <p>
                                    <span>Zdrowy kręgosłup</span> – dla wsparcia i wzmocnienia
                                    układu ruchu.
                                </p>
                                <p>
                                    <span>Full Body Workout</span> – dla kompleksowego treningu
                                    całego ciała.
                                </p>
                                <p>
                                    <span>Aktywny Senior </span>– aby zachować sprawność i radość
                                    z ruchu na każdym etapie życia.
                                </p>
                            </div>
                        </div>
                    </Link>
                    {/* Block 6 */}
                    <Link className="services__box__link" href="/masaz" title="Zobacz ofertę: Masaż">
                        <div className="services__box__link__block">
                            <div className="services__box__link__block__title">
                                <div className="services__box__link__block__title__image">
                                    <Image
                                        alt="Zdjecie masazu mezczyzny"
                                        title="Zdjęcie masażu mężczyzny"
                                        src="/img/panda_studio_massage_mini.jpg"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="services__box__link__block__title__heading heading-h5">
                                    Masaż
                                </div>
                            </div>
                            <div className="services__box__link__block__text text-small-normal">
                                <p>
                                    Naszym celem jest pomaganie klientom w osiąganiu stanu
                                    głębokiego relaksu, ulgi od bólu oraz poprawy ogólnego
                                    samopoczucia poprzez profesjonalne usługi masażu.
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
