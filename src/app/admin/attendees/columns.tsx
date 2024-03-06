import { ColumnDef } from "@tanstack/react-table"
import { Attendee } from "@/shared/types/attendee";

export const AttendeesColumns: ColumnDef<Attendee>[] = [
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