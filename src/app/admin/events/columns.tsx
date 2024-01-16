import { EventSchema } from "@/shared/schemas/EventSchema";
import { z } from "zod";
import { ColumnDef } from "@tanstack/react-table"

export const EventsColumns: ColumnDef<z.infer<typeof EventSchema>>[] = [
    {
        accessorKey: "name",
        header: "Name"
    },
    {
        accessorKey: "date",
        header: "Date"
    },
    {
        accessorKey: "hosts",
        header: "Hosts"
    },
    {
        accessorKey: "description",
        header: "Description"
    }
]