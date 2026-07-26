import { z } from 'zod';

export const updateSettingsSchema = z.object({
  body: z.object({
    companyName: z.string().optional(),
    logo: z.string().optional(),
    favicon: z.string().optional(),
    email: z.string().email().optional().or(z.literal('')),
    phone: z.string().optional(),
    address: z.string().optional(),
    workingHours: z.string().optional(),
    facebook: z.string().optional(),
    linkedin: z.string().optional(),
    instagram: z.string().optional(),
    github: z.string().optional(),
    youtube: z.string().optional(),
    footerDescription: z.string().optional(),
  }),
});
