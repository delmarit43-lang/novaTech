import { z } from 'zod';

export const createPortfolioSchema = z.object({
  body: z.object({
    title: z.string().min(2, 'Title is required'),
    industry: z.string().optional(),
    client: z.string().optional(),
    description: z.string().min(5, 'Description is required'),
    challenge: z.string().optional(),
    solution: z.string().optional(),
    result: z.string().optional(),
    technologies: z.union([z.array(z.string()), z.string()]).transform((val) => {
      if (typeof val === 'string') {
        try {
          return JSON.parse(val);
        } catch {
          return val.split(',').map((s) => s.trim());
        }
      }
      return val;
    }).optional(),
    image: z.string().optional(),
    gallery: z.union([z.array(z.string()), z.string()]).transform((val) => {
      if (typeof val === 'string') {
        try {
          return JSON.parse(val);
        } catch {
          return val.split(',').map((s) => s.trim());
        }
      }
      return val;
    }).optional(),
    featured: z.preprocess((val) => val === 'true' || val === true, z.boolean()).optional(),
    projectUrl: z.string().optional(),
    status: z.enum(['ACTIVE', 'INACTIVE']).optional(),
  }),
});

export const updatePortfolioSchema = z.object({
  params: z.object({
    id: z.string().uuid('Invalid Portfolio ID'),
  }),
  body: z.object({
    title: z.string().min(2).optional(),
    industry: z.string().optional(),
    client: z.string().optional(),
    description: z.string().min(5).optional(),
    challenge: z.string().optional(),
    solution: z.string().optional(),
    result: z.string().optional(),
    technologies: z.union([z.array(z.string()), z.string()]).transform((val) => {
      if (typeof val === 'string') {
        try {
          return JSON.parse(val);
        } catch {
          return val.split(',').map((s) => s.trim());
        }
      }
      return val;
    }).optional(),
    image: z.string().optional(),
    gallery: z.union([z.array(z.string()), z.string()]).transform((val) => {
      if (typeof val === 'string') {
        try {
          return JSON.parse(val);
        } catch {
          return val.split(',').map((s) => s.trim());
        }
      }
      return val;
    }).optional(),
    featured: z.preprocess((val) => val === 'true' || val === true, z.boolean()).optional(),
    projectUrl: z.string().optional(),
    status: z.enum(['ACTIVE', 'INACTIVE']).optional(),
  }),
});
