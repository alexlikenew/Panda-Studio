import { getEntry } from "@/features/dictionary/services/dictionaryService";
import DictionaryPostPage from "@/features/dictionary/DictionaryPostPage";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const entry = await getEntry(slug);
    if (!entry) {
        return {
            title: "Wpis nie znaleziony - FIT Panda Studio",
        };
    }
    return {
        title: `${entry.title} - Baza Wiedzy Panda Studio`,
        description: `Dowiedz się więcej o ${entry.title} w bazie wiedzy FIT Panda Studio.`
    };
}

export default async function KnowledgeBaseEntryPage({ params }: Props) {
    const { slug } = await params;
    const entry = await getEntry(slug);

    if (!entry) {
        notFound();
    }

    return <DictionaryPostPage entry={entry} />;
}
