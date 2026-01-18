import { client } from "@/sanity/lib/client";
import { DictionaryEntry } from "../types";

// Pobieranie listy wpisów (dodajemy 'excerpt' do listy, żeby ładnie wyglądało)
export async function getEntries(): Promise<DictionaryEntry[]> {
  const query = `
    *[_type == "knowledgeBase"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      tags
    }
  `;
  return client.fetch(query, {}, { next: { revalidate: 3600 } });
}

// Pobieranie pojedynczego wpisu (NAPRAWIONE ZAPYTANIE)
export async function getEntry(slug: string): Promise<DictionaryEntry | null> {
  const query = `
    *[_type == "knowledgeBase" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      content,
      tags,
      mainImage {
        asset->{
          _id,
          url
        },
        alt
      },
      faq[] {
        question,
        answer
      },
      relatedServices[] {
        title,
        url
      },
      "relatedTerms": relatedTerms[]->{
        title,
        "slug": slug.current
      }
    }
  `;
  return client.fetch(query, { slug }, { next: { revalidate: 3600 } });
}

export async function getRandomDictionaryEntries(count: number = 20): Promise<DictionaryEntry[]> {
  const query = `
      *[_type == "knowledgeBase"] | order(publishedAt desc)[0...100] {
        title,
        slug
      }
    `;

  const entries: DictionaryEntry[] = await client.fetch(query, {}, { next: { revalidate: 60 } });

  if (!entries || entries.length === 0) {
    return [];
  }

  // Shuffle
  for (let i = entries.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [entries[i], entries[j]] = [entries[j], entries[i]];
  }

  return entries.slice(0, count);
}