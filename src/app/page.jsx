import BlogCard from "@/components/Blog/BlogCard";
import { client } from "@/sanity/lib/client";
import Image from "next/image";

export default async function Home() {
  let query = `*[_type == 'post']{
  image,title,text,slug
}`
let post = await client.fetch(query)
// console.log(post)
  return (
    <div className="container mx-auto relative mt-40">
      <div className="flex items-center gap-6">
      {post.map((items,index) => <BlogCard key={index} posts={items} />)}
      </div>
    </div>
  );
}
