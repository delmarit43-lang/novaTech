import { z } from 'zod';

export const subscribeNewsletterSchema = z.object({
  body: z.object({
    email: z.string().email('Invalid subscriber email address'),
  }),
});

export const updateNewsletterStatusSchema = z.object({
  params: z.object({
    id: z.string().uuid('Invalid Subscriber ID'),
  }),
  body: z.object({
    status: z.enum(['SUBSCRIBED', 'UNSUBSCRIBED']),
  }),
});
