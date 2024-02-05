import { z } from "zod";

export const AttendeeSchema = z.object({
    id: z.string().uuid(),
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    phoneNumber: z.string(),
})

export interface Attendee extends z.infer<typeof AttendeeSchema> {}