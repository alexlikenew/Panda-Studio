import { useState, useMemo } from 'react';
import { DictionaryEntry } from '../types';

export function useDictionarySearch(entries: DictionaryEntry[]) {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredEntries = useMemo(() => {
        if (!searchQuery) return entries;

        return entries.filter(entry =>
            entry.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [entries, searchQuery]);

    return {
        searchQuery,
        setSearchQuery,
        filteredEntries
    };
}
