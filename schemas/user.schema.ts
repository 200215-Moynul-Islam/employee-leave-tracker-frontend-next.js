import z from "zod";
import { emailSchema, nameSchema, passwordSchema } from "./base";
import { VALIDATION_MESSAGES } from "@/messages/validation.messages";

export const userCreateSchema = z.object({
  email: emailSchema,
  name: nameSchema,
  password: passwordSchema,
});

export const userUpdateSchema = z.object({
  email: emailSchema,
  name: nameSchema,
});

export const passwordUpdateSchema = z
  .object({
    newPassword: passwordSchema,
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message:
      VALIDATION_MESSAGES.AUTH.CONFIRM_PASSWORD.PASSWORDS_MISMATCH,
    path: ["confirmPassword"],
  });


// Type for the schemas
export type UserCreateSchemaType = z.infer<typeof userCreateSchema>;
export type UserUpdateSchemaType = z.infer<typeof userUpdateSchema>;
export type PasswordUpdateSchemaType = z.infer<typeof passwordUpdateSchema>;