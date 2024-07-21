import myPortableTextComponents from '@/components/myPortableTextComponents'
import auther from '@/sanity/auther'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { PortableText } from 'next-sanity'
import Image from 'next/image'
import React from 'react'
 
export const revalidate = 10
const page = async ({params: {slug}}) => {
   
    const query = `*[_type == 'post' && slug.current == '${slug}']{
  auther->{
    image,name,bio
  },
    title,image,text,auther,content,slug
}[0]`
let posts = await client.fetch(query)
 
 
  return (
    <section className='container mt-20 mx-auto'>
        <h1 className='text-xl font-bold my-4'>{posts.title}</h1>
        <p>{posts.text}</p>

        <Image className='mt-5' src={urlFor(posts.image)} width={400} height={300} />

        <section className='mt-20'>
             <PortableText value={posts.content} components={myPortableTextComponents} />
        </section>
    </section>
  )
}

export default page