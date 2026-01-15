import { client } from "@/sanity/lib/client";
import { KnowledgeEntry } from "../types";

export async function getEntries(): Promise<KnowledgeEntry[]> {
    const query = `
    *[_type == "knowledgeBase"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      tags
    }
  `;
    return client.fetch(query, {}, { next: { revalidate: 3600 } });
}

export async function getEntry(slug: string): Promise<KnowledgeEntry | null> {
    const query = `
    *[_type == "knowledgeBase" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      content,
      publishedAt,
      tags
    }
  `;
    return client.fetch(query, { slug }, { next: { revalidate: 3600 } });
}
