import { DataTable } from "@/components/shared/DataTable"
import { EventsColumns } from "./columns"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import React from "react"

const data = [
  {
    // id: "3u1reuv4",
    title: "something",
    host: "Bobby and Ravi",
    description: "Cool event",
    imageUrl: "google.com",
    location: "Jakarta",
    url: "google.com",
    startDate: new Date(Date.parse("2022-02-01")),
    endDate: new Date(Date.parse("2022-01-01")), 
  },
  {
    // id: "3u1reuv4",
    title: "something",
    host: "Bobby and Ravi",
    description: "Cool event",
    imageUrl: "google.com",
    location: "Jakarta",
    url: "google.com",
    startDate: new Date(Date.parse("2022-05-01")),
    endDate: new Date(Date.parse("2022-01-01")), 
  },
  {
    // id: "3u1reuv4",
    title: "something",
    host: "Bobby and Ravi",
    description: "Cool event",
    imageUrl: "google.com",
    location: "Jakarta",
    url: "google.com",
    startDate: new Date(Date.parse("2022-01-01")),
    endDate: new Date(Date.parse("2022-01-01")), 
  },
  {
    // id: "3u1reuv4",
    title: "something",
    host: "Bobby and Ravi",
    description: "Cool event",
    imageUrl: "google.com",
    location: "Jakarta",
    url: "google.com",
    startDate: new Date(Date.parse("2022-01-01")),
    endDate: new Date(Date.parse("2022-01-01")), 
  },
  {
    // id: "3u1reuv4",
    title: "something",
    host: "Bobby and Ravi",
    description: "Cool event",
    imageUrl: "google.com",
    location: "Jakarta",
    url: "google.com",
    startDate: new Date(Date.parse("2022-01-01")),
    endDate: new Date(Date.parse("2022-01-01")), 
  },
  {
    // id: "3u1reuv4",
    title: "something",
    host: "Bobby and Ravi",
    description: "Cool event",
    imageUrl: "google.com",
    location: "Jakarta",
    url: "google.com",
    startDate: new Date(Date.parse("2022-01-01")),
    endDate: new Date(Date.parse("2022-01-01")), 
  },
  {
    // id: "3u1reuv4",
    title: "something",
    host: "Bobby and Ravi",
    description: "Cool event",
    imageUrl: "google.com",
    location: "Jakarta",
    url: "google.com",
    startDate: new Date(Date.parse("2022-01-01")),
    endDate: new Date(Date.parse("2022-01-01")), 
  },
  {
    // id: "3u1reuv4",
    title: "something",
    host: "Bobby and Ravi",
    description: "Cool event",
    imageUrl: "google.com",
    location: "Jakarta",
    url: "google.com",
    startDate: new Date(Date.parse("2022-01-01")),
    endDate: new Date(Date.parse("2022-01-01")), 
  },
  {
    // id: "3u1reuv4",
    title: "something",
    host: "Bobby and Ravi",
    description: "Cool event",
    imageUrl: "google.com",
    location: "Jakarta",
    url: "google.com",
    startDate: new Date(Date.parse("2022-01-01")),
    endDate: new Date(Date.parse("2022-01-01")), 
  },
  {
    // id: "3u1reuv4",
    title: "something",
    host: "Bobby and Ravi",
    description: "Cool event",
    imageUrl: "google.com",
    location: "Jakarta",
    url: "google.com",
    startDate: new Date(Date.parse("2022-01-01")),
    endDate: new Date(Date.parse("2022-01-01")), 
  },
  {
    // id: "3u1reuv4",
    title: "something",
    host: "Bobby and Ravi",
    description: "Cool event",
    imageUrl: "google.com",
    location: "Jakarta",
    url: "google.com",
    startDate: new Date(Date.parse("2022-01-01")),
    endDate: new Date(Date.parse("2022-01-01")), 
  },
  {
    // id: "3u1reuv1",
    title: "abcd",
    host: "Bobby and Ravi",
    description: "Cool event",
    imageUrl: "google.com",
    location: "Jakarta",
    url: "google.com",
    startDate: new Date(Date.parse("2022-01-01")),
    endDate: new Date(Date.parse("2022-01-01")), 
  },
  {
    // id: "3u1reuv2",
    title: "dbashd",
    host: "Bobby and Ravi",
    description: "Cool event",
    imageUrl: "google.com",
    location: "Jakarta",
    url: "google.com",
    startDate: new Date(Date.parse("2022-01-01")),
    endDate: new Date(Date.parse("2022-01-01")), 
  }
]


const page = () => {
    return (
      <section className="w-full">
        <div className="flex items-center py-4">
          <Input
            placeholder="Filter events..."
            className="max-w-sm"
          />
          <Button variant="outline" className="ml-auto">
            <Link href="/admin/events/create">
              <span>Create Event</span>
            </Link>
          </Button>
        </div>
        <DataTable columns={ EventsColumns } data={ data } />
      </section>
    )
  }
  
  export default page