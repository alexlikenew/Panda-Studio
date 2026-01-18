"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { DictionaryEntry } from '@/features/dictionary/types';

interface KnowledgeBaseListProps {
    articles: DictionaryEntry[];
    initialVisibleCount?: number;
}

export default function KnowledgeBaseList({ articles, initialVisibleCount = 20 }: KnowledgeBaseListProps) {
    const [searchQuery, setSearchQuery] = useState("");
    const [isExpanded, setIsExpanded] = useState(false);

    // Filter Logic
    const filteredArticles = useMemo(() => {
        if (!searchQuery) return articles;
        return articles.filter(article =>
            article.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [articles, searchQuery]);

    // Slice Logic
    const visibleArticles = isExpanded ? filteredArticles : filteredArticles.slice(0, initialVisibleCount);

    return (
        <div className="knowledge-base-container">
            {/* --- Integrated Search Section --- */}
            <div className="dictionary-search" style={{ marginBottom: '40px' }}>
                <div className="dictionary-search__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </div>
                <input
                    type="text"
                    className="dictionary-search__input"
                    placeholder="Wyszukaj pojęcie..."
                    value={searchQuery}
                    onChange={(e) => {
                        setSearchQuery(e.target.value);
                        if (isExpanded) setIsExpanded(false); // Optional: reset view on search
                    }}
                />
                {searchQuery && (
                    <button onClick={() => setSearchQuery('')} className="dictionary-search__clear">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                )}
            </div>

            {/* --- Grid Section --- */}
            <div className="knowledge-base__grid">
                {visibleArticles.length > 0 ? (
                    visibleArticles.map((article) => (
                        <Link
                            key={article.slug.current}
                            href={`/baza-wiedzy/${article.slug.current}`}
                            className="knowledge-base__link"
                        >
                            {article.title}
                        </Link>
                    ))
                ) : (
                    <p className="text-medium-normal text-center w-full">Nie znaleziono haseł spełniających kryteria.</p>
                )}
            </div>

            {/* --- Actions Section --- */}
            {filteredArticles.length > initialVisibleCount && (
                <div className="knowledge-base__actions">
                    <button
                        className="btn-secondary"
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        {isExpanded ? 'POKAŻ MNIEJ' : 'POKAŻ WIĘCEJ'}
                    </button>
                </div>
            )}
        </div>
    );
}
