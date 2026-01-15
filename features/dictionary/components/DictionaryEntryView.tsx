import { PortableText } from "@portabletext/react";
import { KnowledgeEntry } from "../types";

interface Props {
    entry: KnowledgeEntry;
}

export default function DictionaryEntryView({ entry }: Props) {
    return (
        <article className="dictionary-entry">
            <header className="dictionary-entry__header">
                <h1 className="dictionary-entry__title">{entry.title}</h1>
                <div className="dictionary-entry__meta">
                    <time dateTime={entry.publishedAt}>
                        {new Date(entry.publishedAt).toLocaleDateString("pl-PL", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                        })}
                    </time>
                    {entry.tags && entry.tags.length > 0 && (
                        <div className="dictionary-entry__tags">
                            {entry.tags.map(tag => <span key={tag} className="dictionary-entry__tag">#{tag}</span>)}
                        </div>
                    )}
                </div>
            </header>

            <div className="dictionary-entry__separator"></div>

            <div className="dictionary-entry__content">
                <PortableText value={entry.content} />
            </div>
        </article>
    );
}
