'use client'

import EventPage from "@/components/shared/EventPage";
import { useSearchParams } from 'next/navigation'

const EditEvent = () => {

    const id = useSearchParams().get("id")
    const name = useSearchParams().get("name")
    const desc = useSearchParams().get("description")
    const hosts = useSearchParams().get("hosts")
    const lat = useSearchParams().get("latitude")
    const long = useSearchParams().get("longitude")
    const image = useSearchParams().get("imageUrl")
    const date = useSearchParams().get("date")
    const start = useSearchParams().get("timeStart")
    const end = useSearchParams().get("timeEnd")

    const eventData = [id,name,desc,hosts,lat,long,image,date,start,end]

    return (
        <EventPage title="Edit Event" type="Edit" formData={eventData}/>
    )
}

export default EditEvent;