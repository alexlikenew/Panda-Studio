import { DocumentTextIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const knowledgeBaseType = defineType({
    name: 'knowledgeBase',
    title: 'Baza Wiedzy', // Zmieniłem na PL dla czytelności w Studio
    type: 'document',
    icon: DocumentTextIcon,
    fields: [
        defineField({
            name: 'title',
            title: 'Tytuł pojęcia',
            type: 'string',
            validation: (rule) => rule.required(), // Wymagane
        }),
        defineField({
            name: 'slug',
            title: 'Slug (Adres URL)',
            type: 'slug',
            options: {
                source: 'title',
            },
            validation: (rule) => rule.required(), // Wymagane
        }),
        defineField({
            name: 'content',
            title: 'Treść definicji',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'block',
                    styles: [
                        { title: 'Normal', value: 'normal' },
                        // USUNIĘTO H1 - Tytuł strony jest H1. W treści tylko H2+
                        { title: 'H2', value: 'h2' },
                        { title: 'H3', value: 'h3' },
                        { title: 'H4', value: 'h4' },
                        { title: 'Cytat', value: 'blockquote' },
                    ],
                    lists: [{ title: 'Lista punktowa', value: 'bullet' }, { title: 'Lista numerowana', value: 'number' }],
                }),
                defineArrayMember({
                    type: 'image',
                    options: { hotspot: true },
                }),
            ],
        }),
        defineField({
            name: 'excerpt',
            title: 'Krótki opis (SEO / Meta Description)',
            description: 'Streszczenie wyświetlane w Google i na liście wpisów. Max 160 znaków zalecane.',
            type: 'text',
            rows: 3,
            validation: (rule) => rule.max(200).warning('Zalecane jest mniej niż 160 znaków dla SEO.'),
        }),
        defineField({
            name: 'mainImage',
            title: 'Zdjęcie główne / Social Media',
            description: 'Nawet jeśli nie wyświetlamy go w artykule, przyda się przy udostępnianiu na FB/LinkedIn.',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'tags',
            title: 'Tagi',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags',
            },
        }),
        defineField({
            name: 'faq',
            title: 'Sekcja FAQ (SEO Rich Snippets)',
            description: 'Pytania i odpowiedzi, które mogą pojawić się w wynikach wyszukiwania.',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'object',
                    icon: DocumentTextIcon,
                    fields: [
                        defineField({ name: 'question', type: 'string', title: 'Pytanie' }),
                        defineField({ name: 'answer', type: 'text', title: 'Odpowiedź' }),
                    ],
                }),
            ],
        }),
        defineField({
            name: 'relatedServices',
            title: 'Powiązane usługi (CTA)',
            description: 'Linki do oferty, np. "Masaż Tkanek Głębokich" -> "/masaz"',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'object',
                    fields: [
                        defineField({ name: 'title', type: 'string', title: 'Tekst linku (np. Umów Masaż)' }),
                        defineField({ name: 'url', type: 'string', title: 'Link (np. /contact lub https://booksy...)' }),
                    ],
                }),
            ],
        }),
        defineField({
            name: 'relatedTerms',
            title: 'Zobacz także (Linki wewnętrzne)',
            description: 'Inne definicje powiązane z tym tematem.',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'reference',
                    to: [{ type: 'knowledgeBase' }],
                }),
            ],
        }),
        defineField({
            name: 'publishedAt',
            title: 'Data publikacji',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'excerpt',
        },
    },
})