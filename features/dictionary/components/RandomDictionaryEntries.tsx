import Link from 'next/link';
import { getRandomDictionaryEntries } from '../services/dictionaryService';

interface RandomDictionaryEntriesProps {
    count?: number;
}

export default async function RandomDictionaryEntries({ count = 20 }: RandomDictionaryEntriesProps) {
    const entries = await getRandomDictionaryEntries(count);

    if (!entries || entries.length === 0) {
        return null;
    }

    return (
        <section className="random-dictionary">
            <div className="wrapper">
                <h2 className="random-dictionary__header heading-h4">
                    WARTO WIEDZIEĆ
                </h2>

                <div className="random-dictionary__grid">
                    {entries.map((entry) => (
                        <Link
                            key={entry.slug.current}
                            href={`/baza-wiedzy/${entry.slug.current}`}
                            className="random-dictionary__link"
                        >
                            {entry.title}
                        </Link>
                    ))}
                </div>

                <div className="random-dictionary__footer">
                    <Link href="/baza-wiedzy" className="text-large-normal random-dictionary__view-all">
                        ZOBACZ PEŁNĄ BAZĘ WIEDZY &rarr;
                    </Link>
                </div>
            </div>
        </section>
    );
}
