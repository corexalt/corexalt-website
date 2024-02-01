import { DataTable } from "@/components/shared/DataTable"
import { EventsColumns } from "./columns"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const data = [
  {
    name: "something",
    host: "Bobby and Ravi",
    description: "Cool event",
    imageUrl: "google.com",
    date: "10 Dec 2024"
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
        {/* <DataTable columns={ EventsColumns } data={ data } /> */}
      </section>
    )
  }
  
  export default page