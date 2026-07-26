import { z } from 'zod';

export const createProjectRequestSchema = z.object({
  body: z.object({
    name: z.string().min(2, 'Name is required'),
    email: z.string().email('Invalid email address'),
    phone: z.string().optional(),
    company: z.string().optional(),
    projectType: z.string().optional(),
    budget: z.string().optional(),
    timeline: z.string().optional(),
    description: z.string().min(10, 'Project description must be at least 10 characters'),
  }),
});

export const updateProjectRequestStatusSchema = z.object({
  params: z.object({
    id: z.string().uuid('Invalid Request ID'),
  }),
  body: z.object({
    status: z.enum(['PENDING', 'IN_REVIEW', 'CONTACTED', 'COMPLETED']),
  }),
});
