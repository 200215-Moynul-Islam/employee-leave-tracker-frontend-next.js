import { z } from "zod";
import { emailSchema, passwordSchema } from "./base";

export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

// Types for the schemas
export type LoginSchemaType = z.infer<typeof loginSchema>;