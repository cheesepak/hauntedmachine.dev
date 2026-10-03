import { glob } from "astro/loaders"; // Import the glob loader
import { defineCollection } from "astro:content"; // Import utilities from `astro:content`
import { z } from "astro/zod"; // Import Zod

// Define a `loader` and `schema` for each collection
const blog = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/blog" }),
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }),
      tags: z.array(z.string())
    })
});

const work = defineCollection({
    loader: glob({ pattern: '**/[^_]*.mdx', base: "./src/work" }),
    schema: ({ image }) => z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.date(),
      //image: image(), 
      tags: z.array(z.string())
    })
});

// Export a single `collections` object to register your collection(s)
export const collections = { blog, work };