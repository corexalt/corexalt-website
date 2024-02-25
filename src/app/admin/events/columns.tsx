import { EventSchema } from "@/shared/types";
import { z } from "zod";
import { ColumnDef } from "@tanstack/react-table"

export const EventsColumns: ColumnDef<z.infer<typeof EventSchema>>[] = [
    {
        accessorKey: "name",
        header: "Name"
    },
    {
        accessorKey: "startDateTime",
        header: "Starting Date and Time"
    },
    {
        accessorKey: "endDateTime",
        header: "Ending Date and Time"
    },
    {
        accessorKey: "hosts",
        header: "Hosts"
    },
    {
        accessorKey: "description",
        header: "Description"
    },
    {
        accessorKey: "imageURL",
        header: "Image url"
    },
    {
        header: "Action"
    }
]