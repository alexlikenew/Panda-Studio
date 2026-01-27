import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'voucherPage',
    title: 'Voucher Page (Boutique)',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            initialValue: 'Voucher prezentowy',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 3,
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'imageFront',
            title: 'Voucher Front Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'imageBack',
            title: 'Voucher Back Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'infoParams',
            title: 'Info Parameters',
            description: 'List of features (e.g. "60/90/120 min", "Ważność 2 mies")',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'phoneNumber',
            title: 'Phone Number (CTA)',
            type: 'string',
            initialValue: '694 906 749',
            validation: (Rule) => Rule.required(),
        }),
    ],
    preview: {
        select: {
            title: 'title',
        },
        prepare({ title }) {
            return {
                title: title || 'Voucher Page',
                subtitle: 'Singleton Configuration',
            }
        },
    },
})
