interface DictionarySearchProps {
    value: string;
    onChange: (value: string) => void;
}

export default function DictionarySearch({ value, onChange }: DictionarySearchProps) {
    return (
        <div className="dictionary-search">
            <div className="dictionary-search__icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
            </div>
            <input
                type="text"
                className="dictionary-search__input"
                placeholder="Wyszukaj pojęcie..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
            {value && (
                <button
                    onClick={() => onChange('')}
                    className="dictionary-search__clear"
                    aria-label="Wyczyść wyszukiwanie"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            )}
        </div>
    );
}
