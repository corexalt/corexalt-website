import { DataTable } from "@/components/shared/DataTable"
import { AttendeesColumns } from "./columns"

const data = [
  {
    firstName: "Ravi",
    lastName: "Hidayat",
    email: "ravi@corexalt.com",
    phoneNumber: "010101010101"
  }
]

const page = () => {
    return (
      <div className="w-full">
        <DataTable columns={ AttendeesColumns } data={ data } />
      </div>
    )
  }
  
  export default page