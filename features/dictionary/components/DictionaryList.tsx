import Link from "next/link";
import { DictionaryEntry } from "../types";

interface DictionaryListProps {
    entries: DictionaryEntry[];
}

export default function DictionaryList({ entries }: DictionaryListProps) {
    if (!entries || entries.length === 0) {
        return (
            <div className="dictionary-empty">
                <p>Nie znaleziono haseł spełniających kryteria wyszukiwania.</p>
            </div>
        );
    }

    return (
        <div className="dictionary-grid">
            {entries.map((entry) => (
                <Link
                    key={entry._id}
                    href={`/baza-wiedzy/${entry.slug.current}`}
                    className="dictionary-link"
                >
                    {entry.title}
                </Link>
            ))}
        </div>
    );
}
