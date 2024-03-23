'use client'

import EventPage from "@/components/shared/EventPage";
import { useSearchParams } from 'next/navigation'

const EditEvent = () => {

    const eventData = useSearchParams()
    
    return (
        <EventPage title="Edit Event" type="Edit" formData={eventData}/>
    )
}

export default EditEvent;