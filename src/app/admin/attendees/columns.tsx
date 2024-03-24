import { z } from "zod";
import { ColumnDef } from "@tanstack/react-table"
import { AttendeeSchema } from "@/shared/types/attendee";

export const AttendeesColumns: ColumnDef<z.infer<typeof AttendeeSchema>>[] = [
    {
        accessorKey: "email",
        header: "Email"
    },
    {
        accessorKey: "phone",
        header: "Phone Number"
    }
]