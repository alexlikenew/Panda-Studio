import Link from 'next/link';
import Image from 'next/image';

const classesData = [
    {
        id: 1,
        title: 'TRENING SIŁOWY',
        description: 'Zbuduj maksymalną siłę i wytrzymałość mięśniową dzięki pracy z wolnymi ciężarami.',
        imageSrc: '/img/classes/trening_silowy.jpg',
        linkUrl: '/classes/heavy-weight',
    },
    {
        id: 2,
        title: 'INDOOR CYCLING',
        description: 'Intensywny trening cardio budujący żelazną kondycję w rytm energetycznej muzyki.',
        imageSrc: '/img/classes/indoor-cycling.webp',
        linkUrl: '/classes/indoor-cycling',
    },
    {
        id: 3,
        title: 'SPALANIE & REDUKCJA',
        description: 'Dynamiczne zajęcia nastawione na szybką utratę tkanki tłuszczowej i poprawę metabolizmu.',
        imageSrc: '/img/classes/weight-loss.png',
        linkUrl: '/classes/weight-loss',
    },
    {
        id: 4,
        title: 'MOBILNOŚĆ',
        description: 'Bezpieczny powrót do sprawności, poprawa zakresu ruchu i eliminacja bólu pod okiem fizjoterapeuty.',
        imageSrc: '/img/classes/body-building.png', // Tu warto docelowo dać zdjęcie kogoś rozciągającego się/na macie
        linkUrl: '/classes/mobility',
    },
];
export default function ClassesCategorySection() {
    return (
        <section className="classes-section">
            <div className="classes-section__wrapper">
                <div className="classes-section__grid">
                    {classesData.map((item) => (
                        <Link
                            key={item.id}
                            href={item.linkUrl}
                            className="classes-section__card"
                        >
                            <div className="classes-section__card-content">
                                <div className="classes-section__card-content">
                                    <h3 className="classes-section__card-title heading-h4">
                                        {item.title}
                                    </h3>
                                    <p className="classes-section__card-description text-small-normal md:text-regular-normal">
                                        {item.description}
                                    </p>
                                </div>

                                <div className="classes-section__card-action">
                                    <span className="classes-section__link text-small-bold">
                                        Więcej
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2}
                                            stroke="currentColor"
                                            className="classes-section__link-icon"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>

                            <div className="classes-section__card-image">
                                <div className="classes-section__card-overlay" />
                                <Image
                                    src={item.imageSrc}
                                    alt={`${item.title} class`}
                                    fill
                                    className="classes-section__image"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
