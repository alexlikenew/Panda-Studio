import { PortableTextBlock } from "sanity";

export interface SeoSection {
    _id: string;
    title: string;
    slug: { current: string };
    heading: string;
    content: PortableTextBlock[];
}
