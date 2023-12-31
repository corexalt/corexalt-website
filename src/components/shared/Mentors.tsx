"use client"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import * as React from "react"
const Mentors = () => {

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )
    return (
        <div className="py-20 w-full h-full justify-center items-center sm:min-h-[500px] flex-center flex-col relative bg-gradient-to-r from-[#F2FF5F] to-white">
        <div className="pb-10 text-center text-blue-950 text-4xl font-semibold font-['Poppins'] tracking-tight">Our Mentors</div>
          <Carousel
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          className="w-full 2xl:max-w-[1400px] px-10 pb-10 justify-center items-center  sm:inline-flex rounded-full">
            <CarouselContent>
              <CarouselItem>
                <a href="#" className="flex flex-col items-center bg-blue-950 rounded-lg md:flex-row">
                  <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-auto md:rounded-none md:rounded-s-lg" src="https://via.placeholder.com/269x367" alt="" />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white font-['Poppins']">Bunga Bianca</h5>
                    <p className="opacity-50 text-neutral-200 font-normal font-['Poppins'] tracking-tight">UX/UI Designer at Tokopedia</p>
                    <p className="mb-3 mt-4 md:min-w-[300px] md:max-w-[1000px] opacity-80 text-sm text-neutral-200 font-thin font-['Poppins'] leading-loose tracking-tight">Lörem ipsum tes labelt: än exonera i öliga. Agibel kavurtad såväl som anteporade pyrade trevis. Biol mikrorell. Doraling nebere pasedohet är kamåning. Sysa belingar. Vilogi sobegyrar och paravis ravänas att rajåberen. Famangen prens renyl. Stenoteda nipur rupreren. Vande avis, jåt för beplare.
                    </p>
                  </div>
                </a>
              </CarouselItem>
              <CarouselItem>
                <a href="#" className="flex flex-col items-center bg-blue-950 rounded-lg md:flex-row">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-auto md:rounded-none md:rounded-s-lg" src="https://via.placeholder.com/269x367" alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white font-['Poppins']">Latisha Alaya</h5>
                  <p className="opacity-50 text-neutral-200 font-normal font-['Poppins'] tracking-tight">Lead Database Engineer at Shopee</p>
                  <p className="mb-3 mt-4 md:min-w-[300px] md:max-w-[1000px] opacity-80 text-sm text-neutral-200 font-normal font-['Poppins'] leading-loose tracking-tight">Lörem ipsum tes labelt: än exonera i öliga. Agibel kavurtad såväl som anteporade pyrade trevis. Biol mikrorell. Doraling nebere pasedohet är kamåning. Sysa belingar. Vilogi sobegyrar och paravis ravänas att rajåberen. Famangen prens renyl. Stenoteda nipur rupreren. Vande avis, jåt för beplare.
                  </p>
                </div>
                </a>
              </CarouselItem>
              <CarouselItem>
                <a href="#" className="flex flex-col items-center bg-blue-950 rounded-lg md:flex-row">
                  <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-auto md:rounded-none md:rounded-s-lg" src="https://via.placeholder.com/269x367" alt="" />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white font-['Poppins']">Ravi Alifian</h5>
                    <p className="opacity-50 text-neutral-200 font-normal font-['Poppins'] tracking-tight">CTO at Corexalt</p>
                    <p className="mb-3 mt-4 md:min-w-[300px] md:max-w-[1000px] opacity-80 text-sm text-neutral-200 font-normal font-['Poppins'] leading-loose tracking-tight">Lörem ipsum tes labelt: än exonera i öliga. Agibel kavurtad såväl som anteporade pyrade trevis. Biol mikrorell. Doraling nebere pasedohet är kamåning. Sysa belingar. Vilogi sobegyrar och paravis ravänas att rajåberen. Famangen prens renyl. Stenoteda nipur rupreren. Vande avis, jåt för beplare.
                    </p>
                  </div>
                </a>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
    </div>
    )
}

export default Mentors