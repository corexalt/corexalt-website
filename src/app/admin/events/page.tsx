"use client"

import { DataTable } from "@/components/shared/DataTable"
import { EventsColumns } from "./columns"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"
import { supabase } from "@/lib/initSupabase"
import { table } from "console"

// const data = [
//   {
//     name: "something",
//     host: "Bobby and Ravi",
//     description: "Cool event",
//     imageUrl: "google.com",
//     date: "10 Dec 2024"
//   },
// ]

const page = () => {

  const [events, setEvents] = useState<any>([]);

  useEffect(() => {
    // Function to fetch data from Supabase
    const fetchEvents = async () => {
      try {
        const { data, error } = await supabase
          .from('event')
          .select('*');

        if (error) {
          throw error;
        }

        setEvents(data);
      } catch (error:any) {
        console.error('Error fetching events:', error.message);
      }
    };

    // Call the fetchEvents function
    fetchEvents();
  }, []); // Empty dependency array means this effect runs once when the component mounts

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
        <DataTable columns={ EventsColumns } data={ events } />
      </section>
    )
  }
  
  export default page;