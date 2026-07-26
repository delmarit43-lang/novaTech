import { z } from 'zod';

export const createGallerySchema = z.object({
  body: z.object({
    image: z.string().optional(),
    title: z.string().optional(),
    category: z.string().optional(),
    status: z.enum(['ACTIVE', 'INACTIVE']).optional(),
  }),
});

export const updateGallerySchema = z.object({
  params: z.object({
    id: z.string().uuid('Invalid ID'),
  }),
  body: z.object({
    image: z.string().optional(),
    title: z.string().optional(),
    category: z.string().optional(),
    status: z.enum(['ACTIVE', 'INACTIVE']).optional(),
  }),
});
