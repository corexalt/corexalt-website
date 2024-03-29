import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


const Events = () => {
    return (
      <div className="w-full flex-col bg-blue-950 items-center justify-center inline-flex py-20 px-20 sm:px-20 2xl:px-96">
        <div className="w-full mx-auto items-center flex-center flex-col justify-center">
            <div className="pb-10 text-center text-white text-4xl font-semibold font-['Poppins']">Events</div>
            <Carousel className="w-full pb-10 max-w-[1300px] justify-center items-center sm:inline-flex rounded-xl">
              <CarouselContent>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-white rounded-lg flex flex-col justify-center md:max-w-[400px]">
                <img
                  src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  className="w-full mb-3"
                />
                <div className="p-4 pt-2">
                  <div className="mb-3">
                    <a
                      href="#"
                      className="text-neutral-900 font-semibold font-['Poppins'] text-lg mb-2 hover:text-indigo-800 inline-block"
                    >
                      Material Design 3.0 Gets a Mixed Response
                    </a>
                    <p className="text-gray-700 text-base font-normal font-['Poppins'] leading-7 pb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 inline pr-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
          </svg>

                      Tue, Dec 19
                      <br className="" />
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 inline pr-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>

                      08.00 PM WIB
                    </p>
                    <Button className="bg-[#F2FF5F] px-10 text-gray-600 text-md">Join</Button> 
                  </div>
                </div>
              </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-white rounded-[10px] flex flex-col justify-center md:max-w-[400px]">
                <img
                  src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  className="w-full mb-3"
                />
                <div className="p-4 pt-2">
                  <div className="mb-3">
                    <a
                      href="#"
                      className="text-neutral-900 font-semibold font-['Poppins'] text-lg mb-2 hover:text-indigo-800 inline-block"
                    >
                      Material Design 3.0 Gets a Mixed Response
                    </a>
                    <p className="text-gray-700 text-base font-normal font-['Poppins'] leading-7 pb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 inline pr-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
          </svg>

                      Tue, Dec 19
                      <br className="" />
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 inline pr-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>

                      08.00 PM WIB
                    </p>
                    <Button className="bg-[#F2FF5F] text-gray-600 px-10 text-md">Join</Button> 
                  </div>
                </div>
              </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-white rounded-[10px] flex flex-col justify-center  md:max-w-[400px]">
                <img
                  src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  className="w-full mb-3"
                />
                <div className="p-4 pt-2">
                  <div className="mb-3">
                    <a
                      href="#"
                      className="text-neutral-900 font-semibold font-['Poppins'] text-lg mb-2 hover:text-indigo-800 inline-block"
                    >
                      Material Design 3.0 Gets a Mixed Response
                    </a>
                    <p className="text-gray-700 text-base font-normal font-['Poppins'] leading-7 pb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 inline pr-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
          </svg>

                      Tue, Dec 19
                      <br className="" />
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 inline pr-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>

                      08.00 PM WIB
                    </p>
                    <Button className="bg-[#F2FF5F] text-gray-600 px-10 text-md">Join</Button> 
                  </div>
                </div>
              </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-white rounded-[10px] flex flex-col justify-center md:max-w-[400px]">
                <img
                  src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  className="w-full mb-3"
                />
                <div className="p-4 pt-2">
                  <div className="mb-3">
                    <a
                      href="#"
                      className="text-neutral-900 font-semibold font-['Poppins'] text-lg mb-2 hover:text-indigo-800 inline-block"
                    >
                      Material Design 3.0 Gets a Mixed Response
                    </a>
                    <p className="text-gray-700 text-base font-normal font-['Poppins'] leading-7 pb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 inline pr-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
          </svg>

                      Tue, Dec 19
                      <br className="" />
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 inline pr-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>

                      08.00 PM WIB
                    </p>
                    <Button className="bg-[#F2FF5F] text-gray-600 px-10 text-md">Join</Button> 
                  </div>
                </div>
              </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
              
              
        </div>
      </div>
    )
}

export default Events