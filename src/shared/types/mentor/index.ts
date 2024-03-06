import { z } from "zod";

export const MentorSchema = z.object({
    id: z.string().uuid(),
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    phoneNumber: z.string(),
})

export interface Mentor extends z.infer<typeof MentorSchema> {}