import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  

const Services = () => {
    return (
        
        <section className="w-full h-full md:min-h-[300px] py-20 bg-gradient-to-l from-[#F2FF5F] to-white flex-col justify-center items-center inline-flex">
            <h2 className="text-center text-blue-950 text-4xl font-semibold  pb-10">Services</h2>
            <div className="flex-col justify-center items-center gap-10 grid grid-flow-cols-1 md:grid-cols-2">   
                <div className="xl:min-w-[600px] bg-blue-950 rounded-[10px] justify-center items-center pb-10">
                <h3 className="text-center text-white text-2xl font-normal  py-5">Careers</h3>
                <Accordion type="single" collapsible className="w-full max-w-[350px] xl:max-w-[600px] px-5 text-white text-sm sm:text-sm md:text-md lg:text-lg font-extralight text-start  ">
                    <AccordionItem value="item-1" className="open:text-yellow-300">
                      <AccordionTrigger>Talent Insight Precision Test</AccordionTrigger>
                      <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Careers Transition Coaching</AccordionTrigger>
                      <AccordionContent>
                        Yes. It comes with default styles that matches the other
                        components&apos; aesthetic.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Personal Branding And Self-Marketing</AccordionTrigger>
                      <AccordionContent>
                        Yes. It&apos;s animated by default, but you can disable it if you
                        prefer.
                      </AccordionContent>
                    </AccordionItem>
                </Accordion>
                </div>
                <div className="min-w-[350px] xl:min-w-[500px] bg-blue-950 rounded-[10px] justify-center items-center pb-10">
                <h3 className="text-center text-white text-2xl font-normal  py-5">Entrepreneur</h3>
                <Accordion type="single" collapsible className="w-full max-w-[350px] xl:max-w-[600px] px-5 text-white text-sm sm:text-sm md:text-md lg:text-lg font-extralight  open:text-yellow-300">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Entrepreneurial Coaching</AccordionTrigger>
                      <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Financial Planning and Management</AccordionTrigger>
                      <AccordionContent>
                        Yes. It comes with default styles that matches the other
                        components&apos; aesthetic.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Is it animated?</AccordionTrigger>
                      <AccordionContent>
                        Yes. It&apos;s animated by default, but you can disable it if you
                        prefer.
                      </AccordionContent>
                    </AccordionItem>
                </Accordion>
                </div>
            </div>
        </section>
       
    )
}

export default Services