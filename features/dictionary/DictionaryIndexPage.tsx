'use client';

import DictionaryList from "./components/DictionaryList";
import DictionarySearch from "./components/DictionarySearch";
import { useDictionarySearch } from "./hooks/useDictionarySearch";
import { DictionaryEntry } from "./types";

interface DictionaryIndexPageProps {
    entries: DictionaryEntry[];
}

export default function DictionaryIndexPage({ entries }: DictionaryIndexPageProps) {
    const { searchQuery, setSearchQuery, filteredEntries } = useDictionarySearch(entries);

    return (
        <div className="dictionary-page">
            <div className="wrapper">
                <header className="dictionary-header">
                    <h1 className="dictionary-header__title">Baza Wiedzy</h1>
                    <p className="dictionary-header__subtitle">
                        Poznaj terminologię treningową i dietetyczną.
                    </p>

                    <DictionarySearch
                        value={searchQuery}
                        onChange={setSearchQuery}
                    />
                </header>

                <DictionaryList entries={filteredEntries} />
            </div>
        </div>
    );
}
