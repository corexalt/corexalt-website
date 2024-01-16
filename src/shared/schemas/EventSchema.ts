import { z } from "zod";

export const EventSchema = z.object({
    name: z.string(),
    hosts: z.string(),
    description: z.string(),
    imageUrl: z.string().url(),
    date: z.string()
})