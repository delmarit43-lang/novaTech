import { z } from 'zod';

export const updateHeroSchema = z.object({
  body: z.object({
    title: z.string().min(2, 'Title is required'),
    subtitle: z.string().optional(),
    description: z.string().optional(),
    buttonOneText: z.string().optional(),
    buttonOneLink: z.string().optional(),
    buttonTwoText: z.string().optional(),
    buttonTwoLink: z.string().optional(),
    backgroundImage: z.string().optional(),
    status: z.enum(['ACTIVE', 'INACTIVE']).optional(),
  }),
});
