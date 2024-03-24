"use client"

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Button } from "@/components/ui/button"

import Link from "next/link"
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode, useState } from "react"
import { supabase } from "@/lib/initSupabase"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: any
  value: any
}

export function DataTable<TData, TValue>({
  columns,
  data,
  value,
}: DataTableProps<TData, TValue>) {

  const [showConfirmation, setShowConfirmation] = useState(false);

  const [selectedId, setSelectedId]:any = useState(null);

    function displayDelete(id:any) {
        setSelectedId(id)
        setShowConfirmation(true)
    }

    const handleDelete = async () => {
        // Logic to delete the item
        if(selectedId===null){
          
        }
        else{
          try {
            
            const { error } = await supabase
              .from('event')
              .delete()
              .eq('id', selectedId)

            setSelectedId(null)
          } catch (error) {
            
          }
        }
        setShowConfirmation(false);
        if(selectedId===null){
          
        }
        else{
          try {
            
            window.location.reload();
          } catch (error) {
            
          }
        }
    };

  if(value==="event"){

    const cellArray:any = Object.values(data);

    // const actionColumn: ColumnDef<TData, TValue> = {
    //   id: "actionColumn",
    //   header: "Action Column",
    //   cell: ({ cell,row }) => (
    //     <div className="flex">
    //       <Button variant="outline">
    //         <Link href="/admin/events/edit">
    //           <span>{cellArray[0]}</span>
    //         </Link>
    //       </Button>
    //       <Button variant="outline" className="ml-1">
    //         <Link href="/admin/events/delete">
    //           <span>Delete</span>
    //         </Link>
    //       </Button>
    //     </div>
    //   ),
    // };

    const actionColumns: JSX.Element[] = data.map((item:any, index:any) => (
      <div key={index} className="flex">
        <Button variant="outline">
          <Link href={{
                  pathname: `/admin/events/edit/`,
                  query: item
                }}>
            <span>Edit</span>
          </Link>
        </Button>
        <Button variant="outline" className="ml-1" onClick={()=> displayDelete(item.id)}>
          <span>Delete</span>
        </Button>
      </div>
    ));

    const actionColumn: ColumnDef<TData, TValue> = {
      id: "actionColumn",
      header: "Action Column",
      cell: ({ cell }) => actionColumns[cell.row.index],
    };

    columns = [...columns,actionColumn]
  }

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
            {showConfirmation && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded shadow-lg">
                        <p>Confirm to delete?</p>
                        <div className="flex justify-center mt-4">
                            <Button onClick={handleDelete}>Yes</Button>
                            <Button className="ml-2" onClick={() => setShowConfirmation(false)}>No</Button>
                        </div>
                    </div>
                </div>
            )}
    </div>
  )
}
