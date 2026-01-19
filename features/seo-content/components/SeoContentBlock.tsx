"use client";

import { useState } from "react";
import { PortableText } from "@portabletext/react";
import { SeoSection } from "../types";

interface SeoContentBlockProps {
    data: SeoSection | null;
}

export default function SeoContentBlock({ data }: SeoContentBlockProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    if (!data) return null;

    return (
        <section className="seo-content">
            <div className="wrapper">
                <h2 className="seo-content__title heading-h5">{data.heading}</h2>

                <div className={`seo-content__text-wrapper ${isExpanded ? "is-expanded" : ""}`}>
                    <div className="seo-content__rich-text text-small-normal">
                        <PortableText value={data.content} />
                    </div>
                    {/* Gradient overlay only visible when NOT expanded */}
                    {!isExpanded && <div className="seo-content__overlay"></div>}
                </div>

                <div className="seo-content__actions">
                    <button onClick={() => setIsExpanded(!isExpanded)} className="seo-content__trigger">
                        {isExpanded ? "Zwiń" : "Rozwiń"}
                    </button>
                </div>
            </div>
        </section>
    );
}
