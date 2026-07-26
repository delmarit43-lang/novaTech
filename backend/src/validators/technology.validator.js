import { z } from 'zod';

export const createTechnologySchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Technology name is required'),
    logo: z.string().optional(),
    category: z.string().optional(),
    status: z.enum(['ACTIVE', 'INACTIVE']).optional(),
  }),
});

export const updateTechnologySchema = z.object({
  params: z.object({
    id: z.string().uuid('Invalid ID'),
  }),
  body: z.object({
    name: z.string().min(1).optional(),
    logo: z.string().optional(),
    category: z.string().optional(),
    status: z.enum(['ACTIVE', 'INACTIVE']).optional(),
  }),
});
