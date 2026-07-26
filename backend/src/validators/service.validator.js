import { z } from 'zod';

export const createServiceSchema = z.object({
  body: z.object({
    title: z.string().min(2, 'Title must be at least 2 characters'),
    description: z.string().min(5, 'Description must be at least 5 characters'),
    icon: z.string().optional(),
    image: z.string().optional(),
    category: z.string().optional(),
    featured: z.preprocess((val) => val === 'true' || val === true, z.boolean()).optional(),
    status: z.enum(['ACTIVE', 'INACTIVE']).optional(),
  }),
});

export const updateServiceSchema = z.object({
  params: z.object({
    id: z.string().uuid('Invalid Service ID'),
  }),
  body: z.object({
    title: z.string().min(2).optional(),
    description: z.string().min(5).optional(),
    icon: z.string().optional(),
    image: z.string().optional(),
    category: z.string().optional(),
    featured: z.preprocess((val) => val === 'true' || val === true, z.boolean()).optional(),
    status: z.enum(['ACTIVE', 'INACTIVE']).optional(),
  }),
});
