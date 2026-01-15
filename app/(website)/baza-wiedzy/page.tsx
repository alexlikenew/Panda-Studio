import { getEntries } from "@/features/dictionary/services/dictionaryService";
import DictionaryIndexPage from "@/features/dictionary/DictionaryIndexPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Baza Wiedzy - FIT Panda Studio",
    description: "Baza wiedzy o treningu, zdrowiu i technice ćwiczeń.",
};

export default async function KnowledgeBasePage() {
    const entries = await getEntries();

    return <DictionaryIndexPage entries={entries} />;
}
