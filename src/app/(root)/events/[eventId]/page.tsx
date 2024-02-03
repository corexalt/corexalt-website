import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import getEventData from "@/shared/data/event-data";
import { CalendarClock, CalendarCheck } from "lucide-react";
import Link from "next/link";

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
            <div className="max-w-6xl mx-auto p-4 sm:px-6 h-full">

                <article className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-start mt-[100px]">
                    <div className="flex flex-col">
                        <a className="relative block group mt-[35px]" href="#0">
                            <div className="absolute inset-0 bg-gray-600 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none" aria-hidden="true"></div>
                            <figure className="relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                                <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src={event.imageUrl} alt="image" width="540" height="303" />
                            </figure>
                        </a>
                        <Alert className="mt-[70px]">
                          <CalendarClock className="h-4 w-4" />
                          <AlertTitle>Start</AlertTitle>
                          <AlertDescription>
                            {new Date(event.startDate).toDateString()}
                          </AlertDescription>
                        </Alert>
                        <Alert className="mt-2">
                          <CalendarCheck className="h-4 w-4" />
                          <AlertTitle>End</AlertTitle>
                          <AlertDescription>
                            {new Date(event.endDate).toDateString()}
                          </AlertDescription>
                        </Alert>
                    </div>
                    <div>
                        <header>
                            <div className="mb-3">
                                <ul className="flex flex-wrap text-xs font-medium -m-1">
                                    <li className="m-1">
                                        {/* <a className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out" href="#0">{new Date(event.startDate).toTimeString()}</a> */}
                                    </li>
                                    <li className="m-1">
                                        {/* <a className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out" href="#0">{new Date(event.endDate).toTimeString()}</a> */}
                                    </li>
                                </ul>
                            </div>
                            <h3 className="text-2xl lg:text-3xl font-bold leading-tight mb-2">
                                <a className="hover:text-gray-100 transition duration-150 ease-in-out" href="#0">{event.title}</a>
                            </h3>
                        </header>
                        <footer className="flex items-center mt-4 mb-8">
                            <div>
                                <span className="font-medium text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out">{event.location}</span>
                                <span className="text-gray-700"> - </span>
                                <span className="text-gray-500">{new Date(event.endDate).toTimeString()}</span>
                            </div>
                        </footer>
                        <p className="text-lg text-gray-400 flex-grow">{event.description}</p>
                    </div>
                </article>    
            </div>
        </section>
    );
}

export default EventDetailPage;