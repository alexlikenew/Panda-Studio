import { defineField, defineType } from 'sanity'
import { ImagesIcon } from '@sanity/icons'

export const socialReel = defineType({
    name: 'socialReel',
    title: 'Social Media Reel',
    type: 'document',
    icon: ImagesIcon,
    fields: [
        defineField({
            name: 'caption',
            title: 'Caption',
            type: 'string',
            description: 'Title or description of the reel',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'username', // Changed from authorHandle
            title: 'Username',
            type: 'string',
            description: 'e.g., @panda.studio',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'platform',
            title: 'Platform',
            type: 'string',
            options: {
                list: [
                    { title: 'Instagram', value: 'Instagram' },
                    { title: 'TikTok', value: 'TikTok' },
                    { title: 'Facebook', value: 'Facebook' },
                    { title: 'YouTube', value: 'YouTube' },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'thumbnail',
            title: 'Thumbnail (Poster)',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                defineField({
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                    validation: (Rule) => Rule.required(),
                }),
            ],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'videoFile',
            title: 'Video File (MP4)',
            description: 'Optional. Upload a short video for auto-play.',
            type: 'file',
            options: {
                accept: 'video/mp4,video/*',
                storeOriginalFilename: true,
            },
        }),
        defineField({
            name: 'link', // Changed from url
            title: 'Social Link',
            type: 'url',
            description: 'Link to the original post',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published At',
            type: 'datetime',
            initialValue: (new Date()).toISOString(),
            validation: (Rule) => Rule.required(),
        }),
    ],
    preview: {
        select: {
            title: 'caption',
            subtitle: 'username',
            media: 'thumbnail',
        },
    },
})
