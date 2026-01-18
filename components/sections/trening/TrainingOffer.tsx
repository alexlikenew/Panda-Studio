"use client";

import Image from "next/image";
import { useUIContext } from "@/providers/UIContext";

export default function TrainingOffer() {
    const { openModal } = useUIContext();

    return (
        <section className="testimonials testimonials--training">
            <div className="wrapper">
                <div className="testimonials__heading">
                    <p>O f e r t a &nbsp; t r e n i n g o w a </p>
                    <h2>Zadbaj o swoje zdrowie</h2>
                </div>
                <div className="testimonials__box">
                    {/* Block 1 */}
                    <div className="testimonials__box__block">
                        <div className="testimonials__box__block__text">
                            <h2>Poprawa sylwetki</h2>
                            <p>
                                Ten program to kompleksowe podejście do budowy wymarzonej
                                sylwetki. Skupia się na spalaniu tkanki tłuszczowej, modelowaniu
                                mięśni oraz poprawie ogólnej sprawności. Dzięki zróżnicowanym
                                ćwiczeniom, które angażują całe ciało, oraz planowi
                                dostosowanemu do Twoich możliwości, szybko zobaczysz efekty.
                                Idealny dla osób, które chcą poczuć się pewniej we własnym ciele
                                i zyskać nową energię.
                            </p>
                            <button aria-label="UMÓW SIĘ" onClick={openModal}>UMÓW SIĘ</button>
                        </div>
                        <div className="testimonials__box__block__image">
                            <Image
                                alt="Dziewczyna trenuje Crossfit"
                                title="Trening spalający tkankę tłuszczową - Panda Studio"
                                src="/img/panda_studio_spalania.png"
                                width={500}
                                height={350}
                                style={{ width: "100%", height: "auto" }}
                            />
                        </div>
                    </div>

                    {/* Block 2 */}
                    <div className="testimonials__box__block">
                        <div className="testimonials__box__block__image">
                            <Image
                                alt="Mężczyzna wykonuje trening funkcjonalny"
                                title="Trening funkcjonalny budujący siłę i sprawność"
                                src="/img/panda_studio_bodybuilding.png"
                                width={500}
                                height={350}
                                style={{ width: "100%", height: "auto" }}
                            />
                        </div>
                        <div className="testimonials__box__block__text">
                            <h2>Trening funkcjonalny</h2>
                            <p>
                                Ten program pomoże Ci wzmocnić całe ciało, poprawić stabilność,
                                mobilność i koordynację. Trening funkcjonalny opiera się na
                                naturalnych ruchach, które angażują wiele partii mięśniowych
                                jednocześnie, przygotowując organizm do codziennych aktywności.
                                To doskonały wybór, jeśli chcesz poprawić swoją sprawność
                                fizyczną, uniknąć kontuzji i cieszyć się lepszą jakością życia i
                                zdrowia na co dzień.
                            </p>
                            <button aria-label="UMÓW SIĘ" onClick={openModal}>UMÓW SIĘ</button>
                        </div>
                    </div>

                    {/* Block 3 */}
                    <div className="testimonials__box__block">
                        <div className="testimonials__box__block__text">
                            <h2>Trening w parach</h2>
                            <p>
                                Trening w parach to świetny sposób na wspólną motywację i zabawę
                                podczas ćwiczeń! Ćwiczenia angażują całe ciało, wykorzystując
                                współpracę, dynamiczne ruchy i elementy rywalizacji. To idealna
                                opcja dla przyjaciół, par i rodzin, którzy chcą razem osiągać
                                swoje cele fitness i spędzać czas aktywnie!
                            </p>
                            <button aria-label="UMÓW SIĘ" onClick={openModal}>UMÓW SIĘ</button>
                        </div>
                        <div className="testimonials__box__block__image">
                            <Image
                                alt="Trening dwóch osób w parach"
                                title="Wspólny trening w parach (Duo) w Panda Studio"
                                src="/img/panda_studio_crossfit.png"
                                width={500}
                                height={350}
                                style={{ width: "100%", height: "auto" }}
                            />
                        </div>
                    </div>

                    {/* Block 4 */}
                    <div className="testimonials__box__block">
                        <div className="testimonials__box__block__image">
                            <Image
                                alt="Zdjęcie rehabilitacji mężczyzny"
                                title="Rehabilitacja ruchowa i powrót do sprawności po kontuzji"
                                src="/img/panda_studio_rehabiltacja.jpg"
                                width={500}
                                height={350}
                                style={{ width: "100%", height: "auto" }}
                            />
                        </div>
                        <div className="testimonials__box__block__text">
                            <h2>Trening po kontuzjach</h2>
                            <p>
                                Program stworzony z myślą o bezpiecznym powrocie do pełnej
                                sprawności. Skupia się na wzmacnianiu osłabionych obszarów,
                                poprawie mobilności i zapobieganiu nawrotom urazów. Idealny dla
                                osób, które chcą wrócić do aktywności fizycznej w zdrowy i
                                zrównoważony sposób.
                            </p>
                            <button aria-label="UMÓW SIĘ" onClick={openModal}>UMÓW SIĘ</button>
                        </div>
                    </div>

                    {/* Block 5 */}
                    <div className="testimonials__box__block">
                        <div className="testimonials__box__block__text">
                            <h2>Zajęcia w małych grupach</h2>
                            <p>
                                <span>Zdrowy kręgosłup</span> – dla wsparcia i wzmocnienia
                                układu ruchu, redukcji bólu pleców i poprawy postawy.
                            </p>
                            <p>
                                <span>Full Body Workout</span> – dla kompleksowego treningu
                                całego ciała, spalania kalorii i wzmacniania mięśni.
                            </p>
                            <p>
                                <span>Aktywny Senior </span>– aby zachować sprawność, poprawić
                                równowagę i cieszyć się radością z ruchu na każdym etapie życia.
                            </p>
                            <button aria-label="UMÓW SIĘ" onClick={openModal}>UMÓW SIĘ</button>
                        </div>
                        <div className="testimonials__box__block__image">
                            <Image
                                alt="Zdjęcie masażu mężczyzny"
                                title="Zajęcia grupowe i indywidualne w studiu"
                                src="/img/panda_studio_grupy.jpg"
                                width={500}
                                height={350}
                                style={{ width: "100%", height: "auto" }}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
