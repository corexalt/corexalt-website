'use client'
import { Event } from "@/shared/types";
import { z } from "zod";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import { CaretSortIcon, DotsHorizontalIcon} from "@radix-ui/react-icons";

export const EventsColumns: ColumnDef<Event>[] = [
    {
        accessorKey: "title",
        header:  ({ column }) => {
            return (
              <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                Title
                <CaretSortIcon className="ml-2 h-4 w-4" />
              </Button>
            )
        },
       
    },
    {
        accessorKey: "host",
        header:  ({ column }) => {
            return (
              <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                Host
                <CaretSortIcon className="ml-2 h-4 w-4" />
              </Button>
            )
        },
    },
    {
        accessorKey: "description",
        header: "Description"
    },
    {
        accessorKey: "location",
        header: "Location"
    },
    {
        accessorKey: "startDate",
        header:  ({ column }) => {
            return (
              <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                Start Date
                <CaretSortIcon className="ml-2 h-4 w-4" />
              </Button>
            )
        },
        cell: ({row})=>{
            const date = new Date(row.getValue("startDate")).toDateString();
            return <div className="capitalize">{date}</div>
        }
    },
    {
        accessorKey: "endDate",
        header:  ({ column }) => {
            return (
              <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                End Date
                <CaretSortIcon className="ml-2 h-4 w-4" />
              </Button>
            )
        },
        cell: ({row})=>{
            const date = new Date(row.getValue("startDate")).toDateString();
            return <div className="capitalize">{date}</div>
        }
    },
    {
        accessorKey: "imageUrl",
        header: "Preview"
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
          const payment = row.original
    
          return (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <DotsHorizontalIcon className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem
                  onClick={() => navigator.clipboard.writeText(payment.title)}
                >
                  Copy payment ID
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>View customer</DropdownMenuItem>
                <DropdownMenuItem>View payment details</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )
        },
    },
]
