import { z } from 'zod';

export const createTestimonialSchema = z.object({
  body: z.object({
    clientName: z.string().min(2, 'Client name is required'),
    company: z.string().optional(),
    position: z.string().optional(),
    photo: z.string().optional(),
    rating: z.preprocess((val) => parseInt(val, 10), z.number().min(1).max(5)).optional(),
    review: z.string().min(5, 'Review must be at least 5 characters'),
    status: z.enum(['ACTIVE', 'INACTIVE']).optional(),
  }),
});

export const updateTestimonialSchema = z.object({
  params: z.object({
    id: z.string().uuid('Invalid Testimonial ID'),
  }),
  body: z.object({
    clientName: z.string().min(2).optional(),
    company: z.string().optional(),
    position: z.string().optional(),
    photo: z.string().optional(),
    rating: z.preprocess((val) => parseInt(val, 10), z.number().min(1).max(5)).optional(),
    review: z.string().min(5).optional(),
    status: z.enum(['ACTIVE', 'INACTIVE']).optional(),
  }),
});
