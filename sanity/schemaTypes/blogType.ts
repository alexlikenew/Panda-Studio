import { defineField, defineType } from 'sanity'

export const postType = defineType({
    name: 'blog',
    title: 'Blog',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: { source: 'title' },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: { type: 'author' },
        }),
        defineField({
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'category' } }],
        }),
        defineField({
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags',
            },
        }),
        defineField({
            name: 'publishedAt',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'image',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'excerpt',
            title: 'Krótki opis (SEO)',
            description: 'Streszczenie wyświetlane w Google i na liście wpisów. Max 160 znaków zalecane.',
            type: 'text',
            rows: 3,
            validation: (rule) => rule.max(200).warning('Zalecane jest mniej niż 160 znaków dla SEO.'),
        }),
        defineField({
            name: 'faq',
            title: 'Sekcja FAQ (SEO Rich Snippets)',
            description: 'Pytania i odpowiedzi, które mogą pojawić się w wynikach wyszukiwania.',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({ name: 'question', type: 'string', title: 'Pytanie' }),
                        defineField({ name: 'answer', type: 'text', title: 'Odpowiedź' }),
                    ],
                },
            ],
        }),
        defineField({
            name: 'relatedServices',
            title: 'Powiązane usługi (CTA)',
            description: 'Linki do oferty, np. "Masaż Tkanek Głębokich" -> "/masaz"',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({ name: 'title', type: 'string', title: 'Tekst linku (np. Umów Masaż)' }),
                        defineField({ name: 'url', type: 'string', title: 'Link (np. /contact lub https://booksy...)' }),
                    ],
                },
            ],
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'array',
            of: [
                { type: 'block' },
                {
                    type: 'image',
                    options: { hotspot: true },
                },
            ],
        }),
    ],
})