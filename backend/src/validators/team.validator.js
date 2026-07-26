import { z } from 'zod';

export const createTeamSchema = z.object({
  body: z.object({
    name: z.string().min(2, 'Name is required'),
    position: z.string().min(2, 'Position is required'),
    bio: z.string().optional(),
    skills: z.union([z.array(z.string()), z.string()]).transform((val) => {
      if (typeof val === 'string') {
        try {
          return JSON.parse(val);
        } catch {
          return val.split(',').map((s) => s.trim());
        }
      }
      return val;
    }).optional(),
    photo: z.string().optional(),
    email: z.string().email().optional().or(z.literal('')),
    linkedin: z.string().optional(),
    github: z.string().optional(),
    status: z.enum(['ACTIVE', 'INACTIVE']).optional(),
  }),
});

export const updateTeamSchema = z.object({
  params: z.object({
    id: z.string().uuid('Invalid Team Member ID'),
  }),
  body: z.object({
    name: z.string().min(2).optional(),
    position: z.string().min(2).optional(),
    bio: z.string().optional(),
    skills: z.union([z.array(z.string()), z.string()]).transform((val) => {
      if (typeof val === 'string') {
        try {
          return JSON.parse(val);
        } catch {
          return val.split(',').map((s) => s.trim());
        }
      }
      return val;
    }).optional(),
    photo: z.string().optional(),
    email: z.string().email().optional().or(z.literal('')),
    linkedin: z.string().optional(),
    github: z.string().optional(),
    status: z.enum(['ACTIVE', 'INACTIVE']).optional(),
  }),
});
