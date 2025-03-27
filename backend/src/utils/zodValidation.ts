import { z } from 'zod';

export const createUserSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2, 'Name should have at least 2 characters'),
  password: z.string().min(6, 'Password should have at least 6 characters'),
});