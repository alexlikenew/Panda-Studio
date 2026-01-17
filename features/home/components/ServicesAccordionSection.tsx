"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const servicesData = [
    {
        id: '01',
        title: 'POPRAWA SYLWETKI',
        description: 'Ten program to kompleksowe podejście do budowy wymarzonej sylwetki. Skupia się na spalaniu tkanki tłuszczowej, modelowaniu mięśni oraz poprawie ogólnej sprawności.',
    },
    {
        id: '02',
        title: 'TRENING FUNKCJONALNY',
        description: 'Ten program pomoże Ci wzmocnić całe ciało, poprawić stabilność, mobilność i koordynację. Trening funkcjonalny opiera się na naturalnych ruchach.',
    },
    {
        id: '03',
        title: 'TRENING W PARACH',
        description: 'Trening w parach to świetny sposób na wspólną motywację i zabawę podczas ćwiczeń! Ćwiczenia angażują całe ciało, wykorzystując współpracę.',
    },
    {
        id: '04',
        title: 'TRENING PO KONTUZJACH',
        description: 'Program stworzony z myślą o bezpiecznym powrocie do pełnej sprawności. Skupia się na wzmacnianiu osłabionych obszarów i poprawie mobilności.',
    },
    {
        id: '05',
        title: 'MASAŻ',
        description: 'Naszym celem jest pomaganie klientom w osiąganiu stanu głębokiego relaksu, ulgi od bólu oraz poprawy ogólnego samopoczucia.',
    }
];

const ServicesAccordionSection = () => {
    const [activeId, setActiveId] = useState('01');

    return (
        <section className="services-accordion-section">
            <div className="services-accordion__wrapper">

                {/* Left Column: Sticky Content */}
                <div className="services-accordion__left-column">
                    <div className="services-accordion__sticky-content">
                        <div className="services-accordion__badge">
                            NASZA OFERTA
                        </div>
                        <h2 className="heading-h2 services-accordion__title">
                            <span className="services-accordion__title-span">NIE TYLKO TRENING.</span><br />
                            KOMPLEKSOWE PODEJŚCIE.
                        </h2>

                        <div className="services-accordion__buttons">
                            <Link href="/oferta" className="btn-primary-pill">
                                SPRAWDŹ OFERTĘ
                            </Link>
                            <button className="btn-secondary-play">
                                ZOBACZ WIDEO <span className="icon-play">▶</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Column: Accordion List */}
                <div className="services-accordion__right-column">
                    {servicesData.map((service) => (
                        <div
                            key={service.id}
                            className={`services-accordion__item ${activeId === service.id ? 'active' : ''}`}
                            onClick={() => setActiveId(service.id)}
                        >
                            <div className="services-accordion__item-row">
                                <div className="services-accordion__item-info">
                                    <h3 className="heading-h5 services-accordion__item-title">
                                        {service.title}
                                    </h3>
                                    <div className={`services-accordion__item-description-wrapper ${activeId === service.id ? 'open' : ''}`}>
                                        <p className="text-regular-normal services-accordion__item-description">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="services-accordion__item-visuals">
                                    <span className="services-accordion__ghost-number">{service.id}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ServicesAccordionSection;
