import Link from 'next/link';
import Image from 'next/image';

const classesData = [
    {
        id: 1,
        title: 'HEAVY WEIGHT',
        description: 'Join our Heavy Weight class for strong muscle.',
        imageSrc: '/img/classes/heavy-weight.png',
        linkUrl: '/classes/heavy-weight',
    },
    {
        id: 2,
        title: 'INDOOR CYCLING',
        description: 'Join our Indoor Cycling class for cardio endurance.',
        imageSrc: '/img/classes/indoor-cycling.png',
        linkUrl: '/classes/indoor-cycling',
    },
    {
        id: 3,
        title: 'WEIGHT LOSS',
        description: 'Join our Weight Loss class for a healthier you.',
        imageSrc: '/img/classes/weight-loss.png',
        linkUrl: '/classes/weight-loss',
    },
    {
        id: 4,
        title: 'BODY BUILDING',
        description: 'Join our Body Building class for ultimate strength.',
        imageSrc: '/img/classes/body-building.png',
        linkUrl: '/classes/body-building',
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
                                <div>
                                    <h3 className="classes-section__card-title">
                                        {item.title}
                                    </h3>
                                    <p className="classes-section__card-description">
                                        {item.description}
                                    </p>
                                </div>

                                <div className="classes-section__card-action">
                                    <span className="classes-section__link">
                                        Learn More
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
