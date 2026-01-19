import { MetadataRoute } from 'next';
import { getPosts } from '@/features/blog/services/blogService';
import { getEntries } from '@/features/dictionary/services/dictionaryService';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://pandastudioteam.com';

    // Static routes
    const staticRoutes = [
        '',
        '/cennik',
        '/trening',
        '/masaz',
        '/contact',
        '/blog',
        '/baza-wiedzy',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Blog posts
    const posts = await getPosts();
    const blogRoutes = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug.current}`,
        lastModified: new Date(post.publishedAt),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    // Knowledge base entries
    const entries = await getEntries();
    const dictionaryRoutes = entries.map((entry) => ({
        url: `${baseUrl}/baza-wiedzy/${entry.slug.current}`,
        lastModified: new Date(entry.publishedAt),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    return [...staticRoutes, ...blogRoutes, ...dictionaryRoutes];
}
