import { z } from "zod";

export const EventSchema = z.object({
    name: z.string().min(3, 'Title must be at least 3 characters').max(100, 'Title must be at least 100 characters'),
    host: z.string().min(3, 'Description must be at least 3 characters').max(400, 'Description must be less than 400 characters'),
    description: z.string(),
    latitude: z.string(),
    longitude: z.string(),
    // location: z.string().min(3, 'Location must be at least 3 characters').max(200, 'Location must be less than 200 characters'),
    url: z.string().url(),
    imageUrl: z.string().url(),
    date: z.date(),
    startTime: z.string(),
    endTime: z.string(),
})

export interface Event extends z.infer<typeof EventSchema> {}