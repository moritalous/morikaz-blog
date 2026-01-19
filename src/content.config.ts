import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    pubDate: z.string().or(z.date()),
    tags: z.array(z.string()).optional(),
    description: z.string().optional(),
    originalUrl: z.string().optional(),
  }),
});

export const collections = { blog };
