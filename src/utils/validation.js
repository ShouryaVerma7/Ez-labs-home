import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(1, 'Name is required').min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits').regex(/^\d+$/, 'Phone number must contain only digits'),
  message: z.string().min(1, 'Message is required').min(10, 'Message must be at least 10 characters')
});