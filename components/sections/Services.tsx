"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const SERVICES_DATA = [
    {
        id: 1,
        title: "Poprawa sylwetki",
        image: "/img/panda_studio_spalania.png",
        description: "Ten program to kompleksowe podejście do budowy wymarzonej sylwetki. Skupia się na spalaniu tkanki tłuszczowej, modelowaniu mięśni oraz poprawie ogólnej sprawności."
    },
    {
        id: 2,
        title: "Trening funkcjonalny",
        image: "/img/panda_studio_bodybuilding.png",
        description: "Ten program pomoże Ci wzmocnić całe ciało, poprawić stabilność, mobilność i koordynację. Trening funkcjonalny opiera się na naturalnych ruchach, które angażują wiele partii mięśniowych jednocześnie."
    },
    {
        id: 3,
        title: "Trening w parach",
        image: "/img/panda_studio_crossfit.png",
        description: "Trening w parach to świetny sposób na wspólną motywację i zabawę podczas ćwiczeń! Ćwiczenia angażują całe ciało, wykorzystując współpracę, dynamiczne ruchy i elementy rywalizacji."
    },
    {
        id: 4,
        title: "Trening po kontuzjach",
        image: "/img/panda_studio_rehabiltacja.jpg",
        description: "Program stworzony z myślą o bezpiecznym powrocie do pełnej sprawności. Skupia się na wzmacnianiu osłabionych obszarów, poprawie mobilności i zapobieganiu nawrotom urazów."
    },
    {
        id: 5,
        title: "Zajęcia w małych grupach",
        image: "/img/panda_studio_grupy.jpg",
        description: "Zdrowy kręgosłup – dla wsparcia i wzmocnienia układu ruchu. Full Body Workout – dla kompleksowego treningu całego ciała. Aktywny Senior – aby zachować sprawność i radość z ruchu na każdym etapie życia."
    },
    {
        id: 6,
        title: "Masaż",
        image: "/img/panda_studio_massage_mini.jpg",
        description: "Naszym celem jest pomaganie klientom w osiąganiu stanu głębokiego relaksu, ulgi od bólu oraz poprawy ogólnego samopoczucia poprzez profesjonalne usługi masażu."
    }
];

export default function Services() {
    const [activeItem, setActiveItem] = useState<number | null>(null);

    const toggleItem = (id: number) => {
        if (activeItem === id) {
            setActiveItem(null);
        } else {
            setActiveItem(id);
        }
    };

    return (
        <section className="services">
            <div className="services__wrapper">
                <div className="services__heading">
                    <h3 className="heading-h4">
                        <span>Aktywność fizyczna </span> to fundament zdrowia
                    </h3>
                </div>

                <div className="services__list">
                    {SERVICES_DATA.map((item) => {
                        const isActive = activeItem === item.id;
                        return (
                            <div
                                key={item.id}
                                className={`services__item ${isActive ? 'is-active' : ''}`}
                            >
                                <div
                                    className="services__head"
                                    onClick={() => toggleItem(item.id)}
                                >
                                    <h3 className="services__title heading-h3">
                                        {item.title}
                                    </h3>
                                    <span className="services__icon">
                                        {isActive ? '−' : '+'}
                                    </span>
                                </div>

                                <div className="services__body">
                                    <div className="services__content-inner">
                                        <div className="services__image-wrapper">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                title={`Usługa: ${item.title}`}
                                                fill
                                                style={{ objectFit: 'cover' }}
                                                sizes="(max-width: 768px) 100vw, 800px"
                                            />
                                        </div>
                                        <p className="services__description text-medium-normal">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
