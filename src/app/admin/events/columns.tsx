import { EventSchema } from "@/shared/types";
import { z } from "zod";
import { ColumnDef } from "@tanstack/react-table"

export const EventsColumns: ColumnDef<z.infer<typeof EventSchema>>[] = [
    {
            accessorKey: "name",
            header: "Name"
        },
        {
            accessorKey: "description",
            header: "Description"
        },
        {
            accessorKey: "hosts",
            header: "Hosts"
        },
        {
            accessorKey: "latitude",
            header: "Latitude"
        },
        {
            accessorKey: "longitude",
            header: "Longitude"
        },
        {
            accessorKey: "imageUrl",
            header: "Image"
        },
        {
            accessorKey: "date",
            header: "Date"
        },
        {
            accessorKey: "timeStart",
            header: "Start Time"
        },
        {
            accessorKey: "timeEnd",
            header: "End Time"
        },

]