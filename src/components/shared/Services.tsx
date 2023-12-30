import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  

const Services = () => {
    return (
        
        <section className="w-full h-full min-h-[300px] pb-8 bg-gradient-to-l from-yellow-300 to-white flex-col justify-center items-center gap-2.5 inline-flex">
            <h2 className="text-center text-blue-950 text-4xl font-semibold font-['Poppins'] leading-[44px] py-8">Services</h2>
            <div className="flex-col justify-center items-center gap-10 grid grid-flow-cols-1 md:grid-cols-2">   
                <div className="min-w-[350px] bg-blue-950 rounded-[10px] justify-center items-center pb-10">
                <h3 className="text-center text-white text-xl font-normal font-['Poppins'] py-5">Careers</h3>
                <Accordion type="single" collapsible className="w-full max-w-[350px] px-5 text-white text-md font-extralight font-['Poppins'] ">
                    <AccordionItem value="item-1" className="open:text-yellow-300">
                      <AccordionTrigger>Is it accessible?</AccordionTrigger>
                      <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Is it styled?</AccordionTrigger>
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
                <div className="min-w-[350px] bg-blue-950 rounded-[10px] justify-center items-center pb-10">
                <h3 className="text-center text-white text-xl font-normal font-['Poppins'] py-5">Entrepreneur</h3>
                <Accordion type="single" collapsible className="w-full max-w-[350px] px-5 text-white text-md font-extralight font-['Poppins'] open:text-yellow-300">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Is it accessible?</AccordionTrigger>
                      <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Is it styled?</AccordionTrigger>
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