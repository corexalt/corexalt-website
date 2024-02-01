import { Input } from "@/components/ui/input"
import Image from "next/image"

const Footer = () => {
    return (
        
        <section className="w-full min-h-[300px] flex-center py-5 bg-blue-950 flex-col justify-items-stretch inline-flex font-['Poppins']">
            <div className="2xl:w-[1400px] flex-col  gap-10 grid grid-flow-cols-1 md:grid-cols-3">
                <div className="flex-col items-center gap-6 inline-flex">
                    <div className="justify-start items-center inline-flex">
                        <div className="text-white text-3xl font-medium font-['Poppins']">Corexalt</div>
                    </div>
                    <div className="flex-col items-center justify-center gap-2 flex">
                        <div className="text-slate-50 text-sm font-normal font-['Poppins'] leading-tight">Copyright © 2020 Nexcent ltd.</div>
                        <div className="text-slate-50 text-sm font-normal font-['Poppins'] leading-tight">All rights reserved</div>
                    </div>
                    <div className="justify-start sm:items-start items-center gap-4 inline-flex">
                        <div className="w-30 h-30 relative">
                            <Image src="/ig.svg" width={30}
                            height={30} alt="Instagram" />
                        </div>
                        <div className="w-30 h-30 relative">
                            <Image src="/twitter.svg" width={30}
                            height={30} alt="Twitter" />
                        </div>
                        <div className="w-30 h-30 relative">
                            <Image src="/yt.svg" width={30}
                            height={30} alt="YouTube" />
                        </div>
                    </div>
                </div>
                <div className="flex-col  items-center gap-6 inline-flex pb-4">
                    <div className="w-40 text-white text-xl font-semibold  text-center">Company</div>
                    <div className="flex-col justify-start sm:items-start items-center gap-3 flex text-center">
                        <div className="w-40 text-slate-50 text-sm font-normal  leading-tight">About us</div>
                        <div className="w-40 text-slate-50 text-sm font-normal  leading-tight">Blog</div>
                        <div className="w-40 text-slate-50 text-sm font-normal  leading-tight">Contact us</div>
                        <div className="w-40 text-slate-50 text-sm font-normal  leading-tight">Pricing</div>
                        <div className="w-40 text-slate-50 text-sm font-normal  leading-tight">Testimonials</div>
                    </div>
                </div>
                <div className=" flex-col items-center gap-6 inline-flex">
                    <div className=" text-white text-xl font-semibold">Stay up to date</div>
                    <Input type="email" className="opacity-40 bg-white rounded-lg text-white max-w-[250px] text-center" placeholder="Your email address" />
                </div>
            </div>
        </section>
       
    )
}

export default Footer