import { z } from "zod";
import { VALIDATION_MESSAGES } from "@/messages/validation.messages";

export const leaveRequestCreateSchema = z
  .object({
    startDate: z.coerce.date({
      message: VALIDATION_MESSAGES.LEAVE_REQUEST.START_DATE.REQUIRED,
    }),
    endDate: z.coerce.date({
      message: VALIDATION_MESSAGES.LEAVE_REQUEST.END_DATE.REQUIRED,
    }),
  })
  .refine((data) => data.endDate >= data.startDate, {
    message: VALIDATION_MESSAGES.LEAVE_REQUEST.END_DATE.INVALID,
    path: ["endDate"],
  });

// Type for the schemas
export type LeaveRequestCreateSchemaType = z.infer<typeof leaveRequestCreateSchema>;