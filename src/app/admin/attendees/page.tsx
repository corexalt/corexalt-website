"use client"

import { DataTable } from "@/components/shared/DataTable"
import { AttendeesColumns } from "./columns"
import { useEffect, useState } from "react";
import { supabase } from "@/lib/initSupabase";

// const data = [
//   {
//     firstName: "Ravi",
//     lastName: "Hidayat",
//     email: "ravi@corexalt.com",
//     phoneNumber: "010101010101"
//   }
// ]

const page = () => {

  const [users, setUsers] = useState<any>([]);

  useEffect(() => {
    // Function to fetch data from Supabase
    const fetchEvents = async () => {
      try {
        const { data , error } = await supabase.auth.admin.listUsers()

        if (error) {
          throw error;
        }
        
        setUsers(data);
      } catch (error:any) {
        console.error('Error fetching events:', error.message);
      }
    };

    // Call the fetchEvents function
    fetchEvents();
  }, []); // Empty dependency array means this effect runs once when the component mounts

    return (
      <div className="w-full">
        <DataTable columns={ AttendeesColumns } data={ users } value={null}/>
      </div>
    )
  }
  
  export default page