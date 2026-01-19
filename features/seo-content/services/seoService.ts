import { client } from "@/sanity/lib/client";
import { SeoSection } from "../types";

export async function getSeoSection(slug: string): Promise<SeoSection | null> {
    const query = `*[_type == "seoSection" && slug.current == $slug][0]{
    _id,
    title,
    heading,
    content,
    "slug": slug
  }`;

    try {
        const data = await client.fetch(query, { slug });
        return data;
    } catch (error) {
        console.error("Error fetching SEO section:", error);
        return null;
    }
}
