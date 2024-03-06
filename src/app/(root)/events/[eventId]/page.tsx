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
        // <section className="mt-[-80px] w-full flex flex-col justify-center antialiased bg-blue-950 text-gray-200 min-h-screen">
        //     <div className={style.header}>
        //         <div className={style.header_img_cont}>
        //             <img src={event.imageUrl} alt="event" />
        //         </div>
        //         <div className={style.header_title}>
        //             <h2>{event.title}</h2>
        //             {/* <p>{event.location}</p> */}
        //             <div>
        //                 <Button className="bg-[#F2FF5F] text-gray-900 mt-2" >Join Event</Button>
        //             </div>
        //         </div>
        //     </div>
        //    <div className={style.container}>
        //         <div className={style.left_sect}>
        //             <div className={style.right_sect_card}>
        //                 <h2>Description</h2>
        //                 <p>{event.description}</p>
        //             </div>
        //         </div>
        //         <div className={style.right_sect}>
        //             <div className={style.schedule_card}>
        //                 <div className={style.schedule_card_date}>
        //                     <div>
        //                         <div className={style.card_date_title}>
        //                             <SewingPinFilledIcon className="mt-1 h-4 w-4"  />
        //                             <h3>{event.location}</h3>
        //                         </div>
        //                     </div>
        //                     <div>
        //                         <div className={style.card_date_title}>
        //                             <CalendarIcon className="mt-1 h-4 w-4"  />
        //                             <h3>Start Date</h3>
        //                         </div>
        //                         <h3>{event.startDate.toUTCString()}</h3>
        //                     </div>
        //                     <div>
        //                         <div className={style.card_date_title}>
        //                             <CalendarIcon className="mt-1 h-4 w-4"  />
        //                             <h3>End Date</h3>
        //                         </div>
        //                         <h3>{event.endDate.toUTCString()}</h3>
        //                     </div>
        //                 </div>
        //                 {/* <div className={style.schedule_card_location}><h3>{event.location}</h3></div> */}
        //             </div>
        //         </div>
        //    </div>
        //    <div className={style.sticky_event}></div>
        // </section>
        // w-full flex flex-col justify-center 
        <section className="mt-[-80px] w-full flex flex-col justify-center antialiased bg-blue-950 text-gray-200 min-h-screen">


            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-blue-950 text-gray-200 min-h-screen antialiased ">
            <div className="grid sm:grid-cols-2 sm:items-center gap-8">
                <div className="sm:order-2">
                <div className="relative pt-[50%] sm:pt-[100%] rounded-lg">
                <img src={event.imageUrl} alt="event" />
                    {/* <img className="size-full absolute top-0 start-0 object-cover rounded-lg" src="https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80" alt="Image Description"> */}
                </div>
                </div>

                <div className="sm:order-1">
                <p className="mb-5 inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                    Comingsoon
                </p>

                <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight text-gray-800 dark:text-gray-200">
                    <a className="hover:text-blue-600 dark:text-gray-300 dark:hover:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                    How to get buy-in and budget for direct hiring
                    </a>
                </h2>

                <div className="mt-6 sm:mt-10 flex items-center">
                    <div className="flex-shrink-0">
                    {/* <img className="size-10 sm:h-14 sm:w-14 rounded-full" src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description"> */}
                    </div>

                    <div className="ms-3 sm:ms-4">
                    <p className="sm:mb-1 font-semibold text-gray-800 dark:text-gray-200">
                        Louise Donadieu
                    </p>
                    <p className="text-xs text-gray-500">
                        Strategic Marketing Consultant
                    </p>
                    </div>
                </div>

                <div className="mt-5">
                    <a className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                    Read more
                    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    </a>
                </div>
                </div>
            </div>

            </div>
        </section>

    );
}

export default EventDetailPage;