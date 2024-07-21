import { defineField, defineType } from "sanity";

export default defineType({
    name : 'auther',
    title : 'auther',
    type : 'document',

    fields : [
        defineField({
            name : 'name',
            title : 'Name',
            type : 'string',
            validation : Rule => Rule.required()
        }),

        defineField({
            name : 'bio',
            title : 'Bio',
            type : 'text',
            validation : Rule => Rule.required()
        }),

        defineField({
            name : 'image',
            title : 'Image',
            type : 'image',
            validation : Rule => Rule.required(),
            options: {
                hotspot: true // <-- Defaults to false
              },
        }),
    ]
})