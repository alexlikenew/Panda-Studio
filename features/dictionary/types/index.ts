import { PortableTextBlock } from "sanity";

export interface DictionaryEntry {
    _id: string;
    title: string;
    slug: {
        current: string;
    };
    content: PortableTextBlock[];
    publishedAt: string;
    tags?: string[];
    excerpt?: string;
    faq?: {
        question: string;
        answer: string;
    }[];
    relatedServices?: {
        title: string;
        url: string;
    }[];
    relatedTerms?: {
        title: string;
        slug: string;
    }[];
}
