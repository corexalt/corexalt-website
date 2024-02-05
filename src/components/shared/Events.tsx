'use client'
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import EventCardItem from "../event/event-card-item";
import getEventData from "@/shared/data/event-data";

const Events = () => {
    return (
      <div className="w-full flex-col bg-blue-950 items-center justify-center inline-flex py-20 px-20 sm:px-20 2xl:px-96">
        <div className="w-full mx-auto items-center flex-center flex-col justify-center">
          <a href="/events" className="pb-10 text-center text-white text-4xl font-semibold font-['Poppins']">Events</a>
          <Carousel className="w-full pb-10 max-w-[1300px] justify-center items-center sm:inline-flex rounded-xl">
            <CarouselContent>
              {
                getEventData.length > 0 ? getEventData.map(( event ) => {
                  return (
                    <EventCardItem key={ event.id } event={ event } />
                  )
                }) : <></>
              }
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>  
        </div>
      </div>
    )
}

export default Events