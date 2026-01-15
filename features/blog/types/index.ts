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
    mainImage?: any;
    categories?: {
        title: string;
    }[];
    publishedAt: string;
    body: PortableTextBlock[];
}
