import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://pandastudio.rzeszow.pl';

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/studio/',
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
