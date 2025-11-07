import { defineCollection, z } from 'astro:content';

const logsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    location: z.string(),
    purpose: z.string().optional(),
    tags: z.array(z.string()).default([]),
    description: z.string().optional(),
  }),
});

export const collections = {
  logs: logsCollection,
};
