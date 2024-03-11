import { z } from "zod";

export const signupInput = z.object({
  email: z.string(),
  name: z.string().optional(),
  password: z.string(),
});

export type SignupInput = z.infer<typeof signupInput>;
