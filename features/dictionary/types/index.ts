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
    author?: {
        name: string;
        image?: any;
        slug: string;
    };
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
