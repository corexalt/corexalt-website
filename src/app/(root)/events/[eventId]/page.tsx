import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import getEventData from "@/shared/data/event-data";
import { CalendarClock, CalendarCheck } from "lucide-react";
import Link from "next/link";
import style from "../../../../styles/events/EventDetail.module.css"
import { CalendarIcon, SewingPinFilledIcon } from "@radix-ui/react-icons";

const EmptyEvent = () => {
    return (
        <section className="mt-[-80px] w-full flex flex-col justify-center antialiased bg-blue-950 text-gray-200 min-h-screen">
            <div className="flex flex-col items-center">
                <h2 className="mb-12 font-bold text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out">Nothing to see here</h2>
                <Button className="bg-[#F2FF5F] px-10 text-gray-600 text-md" >
                    <Link href="/events">
                      <span>Back to Events</span>
                    </Link>
                </Button>
            </div>
        </section>
    )
}

const EventDetailPage = ({ params } : {params: { eventId : number }}) => {
    var event = getEventData[params.eventId-1];
    if(params.eventId > getEventData.length || params.eventId < 1) {
        return (
            <EmptyEvent />
        )
    }
    return (
        <section className="mt-[-80px] w-full flex flex-col justify-center antialiased bg-blue-950 text-gray-200 min-h-screen">
            <div className={style.header}>
                <div className={style.header_img_cont}>
                    <img src={event.imageUrl} alt="event" />
                </div>
                <div className={style.header_title}>
                    <h2>{event.title}</h2>
                    {/* <p>{event.location}</p> */}
                    <div>
                        <Button className="bg-[#F2FF5F] text-gray-900 mt-2" >Join Event</Button>
                    </div>
                </div>
            </div>
           <div className={style.container}>
                <div className={style.left_sect}>
                    <div className={style.right_sect_card}>
                        <h2>Description</h2>
                        <p>{event.description}</p>
                    </div>
                </div>
                <div className={style.right_sect}>
                    <div className={style.schedule_card}>
                        <div className={style.schedule_card_date}>
                            <div>
                                <div className={style.card_date_title}>
                                    <SewingPinFilledIcon className="mt-1 h-4 w-4"  />
                                    <h3>{event.location}</h3>
                                </div>
                            </div>
                            <div>
                                <div className={style.card_date_title}>
                                    <CalendarIcon className="mt-1 h-4 w-4"  />
                                    <h3>Start Date</h3>
                                </div>
                                <h3>{event.startDate.toUTCString()}</h3>
                            </div>
                            <div>
                                <div className={style.card_date_title}>
                                    <CalendarIcon className="mt-1 h-4 w-4"  />
                                    <h3>End Date</h3>
                                </div>
                                <h3>{event.endDate.toUTCString()}</h3>
                            </div>
                        </div>
                        {/* <div className={style.schedule_card_location}><h3>{event.location}</h3></div> */}
                    </div>
                </div>
           </div>
           <div className={style.sticky_event}></div>
        </section>
    );
}

export default EventDetailPage;