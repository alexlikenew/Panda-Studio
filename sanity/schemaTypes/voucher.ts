import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'voucher',
    title: 'Voucher',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'price',
            title: 'Price',
            type: 'string',
            description: 'e.g. "150 PLN"',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'buyLink',
            title: 'Buy Link',
            type: 'url',
            validation: Rule => Rule.required()
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'price',
            media: 'image',
        },
    },
})
