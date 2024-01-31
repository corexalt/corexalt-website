import { z } from "zod";
import { ColumnDef } from "@tanstack/react-table"
import { AttendeeSchema } from "@/shared/types/attendee";

export const AttendeesColumns: ColumnDef<z.infer<typeof AttendeeSchema>>[] = [
    {
        accessorKey: "firstName",
        header: "First Name"
    },
    {
        accessorKey: "lastName",
        header: "Last Name"
    },
    {
        accessorKey: "email",
        header: "Email"
    },
    {
        accessorKey: "phoneNumber",
        header: "Phone Number"
    }
]