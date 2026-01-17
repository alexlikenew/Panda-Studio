import React from 'react';

const statsData = [
    {
        id: 1,
        value: "26%",
        title: "Prevent Depression",
        desc: "Individuals who exercise regularly reduce their risk of depression by 26%."
    },
    {
        id: 2,
        value: "30%",
        title: "Sleep Better",
        desc: "Regular movement improves sleep quality by up to 30%."
    },
    {
        id: 3,
        value: "40%",
        title: "Boost Productivity",
        desc: "Physically active people report a 40% boost in productivity."
    },
    {
        id: 4,
        value: "70%",
        title: "Build Confidence",
        desc: "70% of gym-goers say working out improves their self-confidence."
    }
];

export default function ImpactStatsSection() {
    return (
        <section className="impact-stats">
            <div className="impact-stats__wrapper">
                <h2 className="impact-stats__title">Real-World Impact of Staying Fit</h2>

                <ul className="impact-stats__list">
                    {statsData.map((stat) => (
                        <li key={stat.id} className="impact-stats__item">
                            <div className="impact-stats__circle">
                                <span className="impact-stats__value">{stat.value}</span>
                            </div>
                            <div className="impact-stats__content">
                                <span className="impact-stats__badge">{stat.title}</span>
                                <p className="impact-stats__desc">{stat.desc}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
