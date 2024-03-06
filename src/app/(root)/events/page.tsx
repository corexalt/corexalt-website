
import getEventData from "@/shared/data/event-data";
import { Badge } from "@/components/ui/badge";

export default function EventsPage() {
    return (
        <section className="mt-[-80px] flex-center min-h-screen w-full bg-fixed pt-36 lg:pt-40 pb-36 lg:pb-40 overflow-hidden bg-[#0D215C]">
            <div className="wrapper">
                <div className="flex flex-center w-full flex-col">
                    <a href="/events" className="pb-10 text-center text-white text-4xl font-semibold ">Events</a>
                    <div className="flex flex-col flex-center gap-5">

                    {
                        getEventData.map((event)=>
                            <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <img className="object-cover w-full rounded-t-lg h-96 md:w-48 md:h-48 md:rounded-none md:rounded-s-lg" src={event.imageUrl} alt="image" />
                                <div className="flex flex-col justify-between p-4 leading-normal gap-2">
                                    <div className="flex flex-row gap-2">
                                        <div className="flex flex-col md:rounded bg-indigo-400 px-[10px] text-white flex-center font-semibold">
                                            <p className="text-sm" >{new Date(event.startDate).getDate()}</p>
                                            <p className="text-sm" >{new Date(event.startDate).toLocaleString('default', { month: 'short' })}</p>
                                        </div>
                                        <h5 className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">{event.title}</h5>
                                    </div>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3">{event.description}</p>
                                    <div className="flex flex-row w-auto">
                                        <Badge className="bg-indigo-400" >{event.location}</Badge>
                                    </div>
                                </div>
                            </a>
                        )
                    }
                    
                    </div>
                </div>
            </div>
        </section>
    );
}