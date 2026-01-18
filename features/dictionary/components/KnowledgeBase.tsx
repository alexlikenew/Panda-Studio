import React from 'react';
import { getEntries } from '@/features/dictionary/services/dictionaryService';
import KnowledgeBaseList from './KnowledgeBaseList';

const KnowledgeBase = async () => {
    const articles = await getEntries();

    if (!articles || articles.length === 0) {
        return null;
    }

    return (
        <section className="knowledge-base">
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
