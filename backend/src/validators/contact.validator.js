import { z } from 'zod';

export const createContactSchema = z.object({
  body: z.object({
    name: z.string().min(2, 'Name is required'),
    email: z.string().email('Invalid email address'),
    phone: z.string().optional(),
    company: z.string().optional(),
    service: z.string().optional(),
    subject: z.string().optional(),
    message: z.string().min(5, 'Message must be at least 5 characters'),
  }),
});

export const updateContactStatusSchema = z.object({
  params: z.object({
    id: z.string().uuid('Invalid Message ID'),
  }),
  body: z.object({
    status: z.enum(['UNREAD', 'READ', 'REPLIED', 'ARCHIVED']),
  }),
});
