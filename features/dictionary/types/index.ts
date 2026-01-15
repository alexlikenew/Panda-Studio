import { PortableTextBlock } from "sanity";

export interface KnowledgeEntry {
    _id: string;
    title: string;
    slug: {
        current: string;
    };
    content: PortableTextBlock[];
    publishedAt: string;
    tags?: string[]; // Assuming tags/categories might exist as string array or objects? keeping generic for now or based on schema "categories"
}
