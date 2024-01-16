import { DataTable } from "@/components/shared/DataTable"
import { EventsColumns } from "./columns"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const data = [
  {
    name: "something",
    hosts: "Bobby and Ravi",
    description: "Cool event",
    imageUrl: "google.com",
    date: "10 Dec 2024"
  }
]

const page = () => {
    return (
      <div className="w-full">
        <div className="flex items-center py-4">
          <Input
            placeholder="Filter events..."
            className="max-w-sm"
          />
          <Button variant="outline" className="ml-auto">
            Create Event
          </Button>
        </div>
        <DataTable columns={ EventsColumns } data={ data } />
      </div>
    )
  }
  
  export default page