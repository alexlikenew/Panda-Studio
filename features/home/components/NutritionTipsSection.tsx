import Image from 'next/image';
const nutritionData = {
    title: "Odżywianie to Twoje Paliwo",
    cards: [
        {
            id: 'eat-more',
            badge: "Wybieraj Świadomie",
            badgeType: 'good',
            imageSrc: '/img/nutrition/eat-more.png',
            // Alt tekst pod SEO: opisuje co jest na zdjęciu + kontekst treningowy
            imageAlt: 'Zdrowy, zbilansowany posiłek z chudym białkiem i warzywami wspierający regenerację',
            textP1: "Trening to tylko połowa sukcesu – kluczową rolę odgrywa odżywianie. Twój organizm potrzebuje wysokiej jakości paliwa, aby budować formę.",
            textP2: "Postaw na chude białko, węglowodany złożone i zdrowe tłuszcze. Taka dieta maksymalizuje efekty ćwiczeń i przyspiesza regenerację mięśni."
        },
        {
            id: 'eat-less',
            badge: "Ograniczaj",
            badgeType: 'bad',
            imageSrc: '/img/nutrition/eat-less.png',
            // Alt tekst pod SEO: konkretne negatywne przykłady
            imageAlt: 'Wysokoprzetworzone jedzenie typu fast food i słodzone napoje gazowane',
            textP1: "Nadmiar cukru, przetworzone przekąski i fast-foody mogą spowolnić Twój metabolizm i zniweczyć wysiłek włożony w trening.",
            textP2: "Złota zasada? Unikaj pustych kalorii. Wybieraj nieprzetworzone produkty, które dają realną energię, a nie tylko chwilowy skok cukru."
        }
    ]
};

export default function NutritionTipsSection() {
    return (
        <section className="nutrition-tips">
            <div className="nutrition-tips__wrapper">
                <header className="nutrition-tips__header">
                    <h2 className="heading-h2">{nutritionData.title}</h2>
                </header>

                <div className="nutrition-tips__grid">
                    {nutritionData.cards.map((card) => (
                        <article key={card.id} className={`nutrition-tips__card nutrition-tips__card--${card.badgeType}`}>

                            <div className="nutrition-tips__image-container">
                                <div className="nutrition-tips__image-wrapper">
                                    <Image
                                        src={card.imageSrc}
                                        alt={card.imageAlt}
                                        title={`Ilustracja porady: ${card.badge}`}
                                        fill
                                        className="nutrition-tips__image"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                            </div>

                            <div className="nutrition-tips__content">
                                <div className={`nutrition-tips__badge nutrition-tips__badge--${card.badgeType} text-small-bold`}>
                                    {card.badgeType === 'good' ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" /><path d="M12 14v6" /><path d="M12 8h.01" /><path d="M8 8a4 4 0 1 0 8 0" /></svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="15" x2="9" y1="9" y2="15" /><line x1="9" x2="15" y1="9" y2="15" /></svg>
                                    )}
                                    <span>{card.badge}</span>
                                </div>

                                <div className="nutrition-tips__text text-regular-normal">
                                    <p>{card.textP1}</p>
                                    <p>{card.textP2}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
