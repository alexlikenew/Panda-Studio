import { getEntries } from "@/features/dictionary/services/dictionaryService";
import DictionaryList from "@/features/dictionary/components/DictionaryList";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Baza Wiedzy - FIT Panda Studio",
    description: "Baza wiedzy o treningu, zdrowiu i technice ćwiczeń.",
};

export default async function KnowledgeBasePage() {
    const entries = await getEntries();

    return (
        <main className="dictionary-listing">
            <div className="dictionary-listing__heading">
                <h1>Baza Wiedzy</h1>
                <p>Dowiedz się więcej o technikach ćwiczeń i zdrowym stylu życia.</p>
            </div>

            <DictionaryList entries={entries} />
        </main>
    );
}
