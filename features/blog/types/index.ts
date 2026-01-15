import { PortableTextBlock } from '@portabletext/types'

export interface Post {
    _id: string;
    title: string;
    slug: {
        current: string;
    };
    author?: {
        name: string;
        image?: any;
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
    mainImage?: any;
    categories?: string[];
    tags?: string[];
    publishedAt: string;
    body: PortableTextBlock[];
}
