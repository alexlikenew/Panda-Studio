'use client';

import KnowledgeBaseList from "./components/KnowledgeBaseList";
import { DictionaryEntry } from "./types";

interface DictionaryIndexPageProps {
    entries: DictionaryEntry[];
}

export default function DictionaryIndexPage({ entries }: DictionaryIndexPageProps) {
    return (
        <div className="dictionary-page">
            <div className="wrapper">
                <header className="dictionary-header">
                    <h1 className="dictionary-header__title heading-h1">Baza Wiedzy</h1>
                    <p className="dictionary-header__subtitle text-medium-normal">
                        Poznaj terminologię treningową i dietetyczną.
                    </p>
                </header>

                <KnowledgeBaseList articles={entries} initialVisibleCount={100} />
            </div>
        </div>
    );
}
