import Image from 'next/image';

const nutritionData = {
    title: "What You Eat Fuels How You Train",
    cards: [
        {
            id: 'eat-more',
            badge: "Eat More",
            badgeType: 'good',
            imageSrc: '/img/nutrition/eat-more.png',
            imageAlt: 'Healthy meal prep with fresh lean protein and vegetables',
            textP1: "Fitness is only one part of the equation—nutrition plays a crucial role. Your body needs quality fuel to perform and recover.",
            textP2: "Incorporating lean proteins, complex carbs, fiber-rich vegetables, and healthy fats can help you maximize workout results. Staying hydrated is equally important."
        },
        {
            id: 'eat-less',
            badge: "Eat Less",
            badgeType: 'bad',
            imageSrc: '/img/nutrition/eat-less.png',
            imageAlt: 'Fast food burger and soda to avoid',
            textP1: "On the flip side, consuming too many sugary drinks, processed snacks, or fast food can hinder your progress.",
            textP2: "A good rule of thumb? Eat real, whole foods and avoid empty calories. Balanced nutrition supports energy, recovery, and long-term health."
        }
    ]
};

export default function NutritionTipsSection() {
    return (
        <section className="nutrition-tips">
            <div className="nutrition-tips__wrapper">
                <header className="nutrition-tips__header">
                    <h2>{nutritionData.title}</h2>
                </header>

                <div className="nutrition-tips__grid">
                    {nutritionData.cards.map((card) => (
                        <article key={card.id} className={`nutrition-tips__card nutrition-tips__card--${card.badgeType}`}>

                            <div className="nutrition-tips__image-container">
                                <div className="nutrition-tips__image-wrapper">
                                    <Image
                                        src={card.imageSrc}
                                        alt={card.imageAlt}
                                        fill
                                        className="nutrition-tips__image"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                            </div>

                            <div className="nutrition-tips__content">
                                <div className={`nutrition-tips__badge nutrition-tips__badge--${card.badgeType}`}>
                                    {card.badgeType === 'good' ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" /><path d="M12 14v6" /><path d="M12 8h.01" /><path d="M8 8a4 4 0 1 0 8 0" /></svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="15" x2="9" y1="9" y2="15" /><line x1="9" x2="15" y1="9" y2="15" /></svg>
                                    )}
                                    <span>{card.badge}</span>
                                </div>

                                <div className="nutrition-tips__text">
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
