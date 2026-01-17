import React from 'react';

const statsData = [
    {
        id: 1,
        value: "26%",
        title: "Mniejsze ryzyko depresji",
        desc: "Regularna aktywność fizyczna zmniejsza ryzyko wystąpienia objawów depresji o 26%."
    },
    {
        id: 2,
        value: "30%",
        title: "Lepszy sen",
        desc: "Systematyczny ruch poprawia jakość snu i regenerację organizmu nawet o 30%."
    },
    {
        id: 3,
        value: "40%",
        title: "Większa produktywność",
        desc: "Osoby aktywne fizycznie odnotowują wzrost swojej efektywności w ciągu dnia o 40%."
    },
    {
        id: 4,
        value: "70%",
        title: "Pewność siebie",
        desc: "Aż 70% osób trenujących potwierdza, że regularne ćwiczenia budują ich pewność siebie."
    }
];

export default function ImpactStatsSection() {
    return (
        <section className="impact-stats">
            <div className="impact-stats__wrapper">
                <h2 className="impact-stats__title heading-h3">Wpływ treningu na jakość życia</h2>

                <ul className="impact-stats__list">
                    {statsData.map((stat) => (
                        <li key={stat.id} className="impact-stats__item">
                            <div className="impact-stats__circle">
                                <span className="impact-stats__value heading-h2">{stat.value}</span>
                            </div>
                            <div className="impact-stats__content">
                                <span className="impact-stats__badge heading-tagline">{stat.title}</span>
                                <p className="impact-stats__desc text-small-normal">{stat.desc}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
