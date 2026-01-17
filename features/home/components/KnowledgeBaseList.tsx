"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { DictionaryEntry } from '@/features/dictionary/types';

interface KnowledgeBaseListProps {
    articles: DictionaryEntry[];
}

const KnowledgeBaseList: React.FC<KnowledgeBaseListProps> = ({ articles }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const INITIAL_VISIBLE_COUNT = 20;

    return (
        <>
            <div className="knowledge-base__grid">
                {articles.map((article, index) => {
                    const isHidden = !isExpanded && index >= INITIAL_VISIBLE_COUNT;
                    return (
                        <Link
                            key={article.slug.current}
                            href={`/baza-wiedzy/${article.slug.current}`}
                            className={`knowledge-base__link ${isHidden ? 'visually-hidden' : ''}`}
                            tabIndex={isHidden ? -1 : 0}
                        >
                            {article.title}
                        </Link>
                    );
                })}
            </div>

            {articles.length > INITIAL_VISIBLE_COUNT && (
                <div className="knowledge-base__actions">
                    <button
                        className="btn-secondary"
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        {isExpanded ? 'POKAŻ MNIEJ' : 'POKAŻ WIĘCEJ'}
                    </button>
                </div>
            )}
        </>
    );
};

export default KnowledgeBaseList;
