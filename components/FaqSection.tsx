"use client";

import { useState } from "react";

interface FaqItem {
    question: string;
    answer: string;
}

interface FaqSectionProps {
    title?: string;
    subtitle?: string;
    items: FaqItem[];
    className?: string;
    initialCount?: number;
}

export default function FaqSection({
    title = "FAQ",
    subtitle,
    items,
    className = "",
    initialCount = 5
}: FaqSectionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const visibleItems = isExpanded ? items : items.slice(0, initialCount);

    // SEO Schema Generator (JSON-LD)
    // Includes ALL items regardless of visibility
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": items.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    };

    return (
        <section className={`faq-section ${className}`}>
            {/* Inject SEO Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="wrapper">
                <div className="faq-header mb-12 text-center">
                    <h2 className="heading-h2 mb-4">{title}</h2>
                    {subtitle && <p className="text-medium-normal text-gray">{subtitle}</p>}
                </div>

                <div className="faq-list max-w-3xl mx-auto">
                    {visibleItems.map((item, index) => (
                        <div key={index} className={`faq-item ${openIndex === index ? 'is-open' : ''}`}>
                            <button
                                className="faq-question w-full text-left flex justify-between items-center"
                                onClick={() => toggleItem(index)}
                                aria-expanded={openIndex === index}
                            >
                                <span className="text-medium-bold md:text-large-normal pr-4">{item.question}</span>
                                <span className="faq-icon text-green flex-shrink-0">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="12" y1="5" x2="12" y2="19"></line>
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </svg>
                                </span>
                            </button>
                            <div className={`faq-answer-wrapper ${openIndex === index ? 'open' : ''}`} role="region">
                                <div className="faq-answer pt-4 text-medium-normal text-gray-light">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {items.length > initialCount && (
                    <div className="faq-actions text-center mt-8">
                        <button
                            className="btn-secondary"
                            onClick={() => setIsExpanded(!isExpanded)}
                            style={{
                                marginTop: '2rem',
                                padding: '12px 32px',
                                background: 'transparent',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                color: 'white',
                                borderRadius: '30px',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = '#d7fb00';
                                e.currentTarget.style.color = '#d7fb00';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                                e.currentTarget.style.color = 'white';
                            }}
                        >
                            {isExpanded ? "POKAŻ MNIEJ" : "POKAŻ WIĘCEJ PYTAŃ"}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
