import { z } from "zod";
import { ColumnDef } from "@tanstack/react-table"
import { Mentor } from "@/shared/types";

export const MentorsColumns: ColumnDef<Mentor>[] = [
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