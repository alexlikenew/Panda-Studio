import { DictionaryEntry } from "./types";
import DictionaryEntryView from "./components/DictionaryEntryView";
import Link from "next/link";
import RandomNews from "../blog/components/RandomNews";
import RandomDictionaryEntries from "./components/RandomDictionaryEntries";

interface DictionaryPostPageProps {
    entry: DictionaryEntry;
}

export default function DictionaryPostPage({ entry }: DictionaryPostPageProps) {
    return (
        <>
            <main className="dictionary-page">
                <div className="wrapper">
                    <Link href="/baza-wiedzy" className="dictionary-article__back">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M19 12H5" />
                            <path d="M12 19l-7-7 7-7" />
                        </svg>
                        Wróć do bazy wiedzy
                    </Link>

                    <DictionaryEntryView entry={entry} />

                </div>
            </main>
            <RandomNews />
            <RandomDictionaryEntries />
        </>
    );
}
