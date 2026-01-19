import React from 'react';
import { getEntries } from '@/features/dictionary/services/dictionaryService';
import KnowledgeBaseList from './KnowledgeBaseList';

const KnowledgeBase = async () => {
    const articles = await getEntries();

    if (!articles || articles.length === 0) {
        return null;
    }

    // Generate JSON-LD for SEO
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": articles.map((article, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "url": `https://pandastudioteam.com/baza-wiedzy/${article.slug.current}`,
            "name": article.title
        }))
    };

    return (
        <section className="knowledge-base">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="wrapper">
                <div className="knowledge-base__header">
                    <h2 className="heading-h3">CENTRUM WIEDZY PANDA</h2>
                    <p className="text-medium-normal">
                        Eksperckie artykuły, porady żywieniowe i techniki treningowe,
                        które pomogą Ci zrozumieć Twoje ciało.
                    </p>
                </div>

                <KnowledgeBaseList articles={articles} initialVisibleCount={20} />
            </div>
        </section>
    );
};

export default KnowledgeBase;
