import { defineField, defineType } from "sanity";

export default defineType({
    name : 'post',
    title : 'Post',
    type : 'document',

    fields : [
        defineField({
            title : 'Title',
            name : 'title',
            type : 'string',
            validation : Rule => Rule.required().max(60).min(20)
        }),
    
        defineField({
            title : 'Text',
            name : 'text',
            type : 'text',
            validation : Rule => Rule.required()
        }),

        defineField({
            title : 'slug',
            name : 'slug',
            type : 'slug',
            options : {
                source : 'Read More',
                maxLength:200,
                slugify: input => input
                .toLowerCase()
                .replace(/\s+/g, '-')
                .slice(0, 200)
            }
        }),

        defineField({
            type : 'array',
            title : 'Content',
            name : 'content',
            of : [{type:'block'}]
        }),

        defineField({
            name : 'image',
            type : 'image',
            title : 'Image',
            validation : Rule => Rule.required()
        }),

        defineField({
            name : 'auther',
            title : "Auther",
            type : 'reference',
            to : [{type : 'auther'}]
        })

    ]
})