import Link from "next/link";
import { KnowledgeEntry } from "../types";

interface Props {
    entries: KnowledgeEntry[];
}

export default function DictionaryList({ entries }: Props) {
    if (!entries || entries.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="mb-4 text-gray-300">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="64"
                        height="64"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                    </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-600">
                    Baza wiedzy jest aktualizowana.
                </h3>
                <p className="mt-2 text-gray-500">Zajrzyj do nas wkrótce!</p>
            </div>
        );
    }

    return (
        <div className="dictionary-grid">
            {entries.map((entry) => (
                <Link href={`/baza-wiedzy/${entry.slug.current}`} key={entry._id} className="dictionary-card" title={`Czytaj więcej: ${entry.title}`}>
                    <div className="dictionary-card__content">
                        <h2 className="dictionary-card__title">{entry.title}</h2>
                        {entry.tags && entry.tags.length > 0 && (
                            <div className="dictionary-card__tags">
                                {entry.tags.map(tag => <span key={tag} className="dictionary-card__tag">#{tag}</span>)}
                            </div>
                        )}
                        <div className="dictionary-card__date">
                            {new Date(entry.publishedAt).toLocaleDateString('pl-PL', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}
