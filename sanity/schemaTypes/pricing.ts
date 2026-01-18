import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'pricingCategory',
    title: 'Cennik - Kategorie',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Tytuł kategorii',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'subtitle',
            title: 'Podtytuł',
            type: 'string',
        }),
        defineField({
            name: 'type',
            title: 'Typ usługi',
            type: 'string',
            options: {
                list: [
                    { title: 'Trening (Modal)', value: 'training' },
                    { title: 'Masaż (Link zewnętrzny)', value: 'massage' },
                ],
            },
            validation: Rule => Rule.required(),
            initialValue: 'training',
        }),
        defineField({
            name: 'bookingUrl',
            title: 'Link do rezerwacji (tylko dla masażu/zewnętrznych)',
            type: 'url',
            hidden: ({ document }) => document?.type !== 'massage',
        }),
        defineField({
            name: 'packages',
            title: 'Pakiety / Usługi',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'name',
                            title: 'Nazwa pakietu',
                            type: 'string',
                            validation: Rule => Rule.required(),
                        }),
                        defineField({
                            name: 'price',
                            title: 'Cena',
                            type: 'string',
                            validation: Rule => Rule.required(),
                        }),
                        defineField({
                            name: 'features',
                            title: 'Cechy / Opis',
                            type: 'array',
                            of: [{ type: 'string' }],
                        }),
                        defineField({
                            name: 'isPopular',
                            title: 'Wyróżniony (Najczęściej wybierany)',
                            type: 'boolean',
                            initialValue: false,
                        }),
                    ],
                    preview: {
                        select: {
                            title: 'name',
                            subtitle: 'price',
                        },
                    },
                },
            ],
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'type',
        },
    },
})
