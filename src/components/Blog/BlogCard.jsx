'use client'
import Image from "next/image";
import Link from "next/link";
import watch from '../../asserts/watch.jpg'
import { urlFor } from "@/sanity/lib/image";
export default function BlogCard({posts}) {
  return (
    <section className="w-[30%] mt-1 flex flex-col justify-between h-[480px] rounded bg-light/90 dark:bg-dark/40 shadow-md shadow-gray-300 dark:shadow-black/80 group hover:scale-105 transition-transform ease-out duration-700">
      {/* Image Section*/}
      <div className="relative max-h-76 flex-1">
        <Image
          src={urlFor(posts.image)}
          alt="AI for everyone"
          fill
          className="object-cover rounded-t"
        />
      </div>

      {/* Title and Summary */}
      <div className="flex flex-col justify-between gapx-y-4  p-4">
        <h2 className="text-lg font-semibold line-clamp-2 text-dark dark:text-light leading-tight mb-2">
          {posts.title}
        </h2>
        <p className="text-dark/70 dark:text-light/70 line-clamp-3">
         {posts.text}
        </p>

        {/* Read More dynamic Link */}
        <Link
          href={`/blog/${posts.slug.current}`}
          className="block px-4 py-1 text-center bg-accentDarkSecondary  rounded text-dark font-semibold mt-4 cursor-pointer border-2"
        >
          Read More
        </Link>
      </div>
    </section>
  );
}