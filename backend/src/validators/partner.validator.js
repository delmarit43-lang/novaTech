import { z } from 'zod';

export const createPartnerSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Partner name is required'),
    logo: z.string().optional(),
    website: z.string().optional(),
    status: z.enum(['ACTIVE', 'INACTIVE']).optional(),
  }),
});

export const updatePartnerSchema = z.object({
  params: z.object({
    id: z.string().uuid('Invalid ID'),
  }),
  body: z.object({
    name: z.string().min(1).optional(),
    logo: z.string().optional(),
    website: z.string().optional(),
    status: z.enum(['ACTIVE', 'INACTIVE']).optional(),
  }),
});
