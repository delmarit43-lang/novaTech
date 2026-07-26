import { z } from 'zod';

export const createBlogSchema = z.object({
  body: z.object({
    title: z.string().min(2, 'Title is required'),
    category: z.string().optional(),
    featuredImage: z.string().optional(),
    content: z.string().min(10, 'Content must be at least 10 characters'),
    author: z.string().min(2, 'Author is required'),
    tags: z.union([z.array(z.string()), z.string()]).transform((val) => {
      if (typeof val === 'string') {
        try {
          return JSON.parse(val);
        } catch {
          return val.split(',').map((s) => s.trim());
        }
      }
      return val;
    }).optional(),
    status: z.enum(['DRAFT', 'PUBLISHED', 'ARCHIVED']).optional(),
  }),
});

export const updateBlogSchema = z.object({
  params: z.object({
    id: z.string().uuid('Invalid Blog ID'),
  }),
  body: z.object({
    title: z.string().min(2).optional(),
    category: z.string().optional(),
    featuredImage: z.string().optional(),
    content: z.string().min(10).optional(),
    author: z.string().min(2).optional(),
    tags: z.union([z.array(z.string()), z.string()]).transform((val) => {
      if (typeof val === 'string') {
        try {
          return JSON.parse(val);
        } catch {
          return val.split(',').map((s) => s.trim());
        }
      }
      return val;
    }).optional(),
    status: z.enum(['DRAFT', 'PUBLISHED', 'ARCHIVED']).optional(),
  }),
});
