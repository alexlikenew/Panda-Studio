"use client";
import { useState } from 'react';

export default function SeoContentSection({ title, children }: { title: string, children: React.ReactNode }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className="seo-content">
            <div className="wrapper">
                <h2 className="seo-content__title heading-h2">{title}</h2>

                <div className={`seo-content__text-wrapper ${isExpanded ? 'is-expanded' : ''}`}>
                    <div className="seo-content__rich-text text-medium-normal">
                        {children}
                    </div>
                    {/* Gradient overlay only visible when NOT expanded */}
                    {!isExpanded && <div className="seo-content__overlay"></div>}
                </div>

                <div className="seo-content__actions">
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="seo-content__trigger"
                    >
                        {isExpanded ? 'Zwiń' : 'Rozwiń'}
                    </button>
                </div>
            </div>
        </section>
    );
}
