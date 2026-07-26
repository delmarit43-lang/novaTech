import { z } from 'zod';

export const updateAboutSchema = z.object({
  body: z.object({
    title: z.string().min(2, 'Title is required'),
    description: z.string().min(5, 'Description is required'),
    mission: z.string().optional(),
    vision: z.string().optional(),
    image: z.string().optional(),
  }),
});
