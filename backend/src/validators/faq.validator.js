import { z } from 'zod';

export const createFaqSchema = z.object({
  body: z.object({
    question: z.string().min(5, 'Question must be at least 5 characters'),
    answer: z.string().min(5, 'Answer must be at least 5 characters'),
    category: z.string().optional(),
    status: z.enum(['ACTIVE', 'INACTIVE']).optional(),
  }),
});

export const updateFaqSchema = z.object({
  params: z.object({
    id: z.string().uuid('Invalid FAQ ID'),
  }),
  body: z.object({
    question: z.string().min(5).optional(),
    answer: z.string().min(5).optional(),
    category: z.string().optional(),
    status: z.enum(['ACTIVE', 'INACTIVE']).optional(),
  }),
});
