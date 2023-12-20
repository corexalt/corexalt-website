import MaxWidthWrapper from "./MaxWidthWrapper"

const Hero = () => {
    return (
        <section className="mt-[-80px] flex items-center min-h-screen w-full bg-center bg-cover bg-[url('/hero.jpeg')] bg-opacity-40 pt-36 lg:pt-40 pb-36 lg:pb-40 overflow-hidden bg-blend-overlay bg-[#0D215C]">
            <MaxWidthWrapper className="mx-36">
                <div className="flex items-center w-full h-full">
                        <div className="md:max-w-6xl">
                            <h1 className="text-4xl md:text-6xl font-semibold font-['Poppins'] text-white"><span className="text-gray-300">Your future starts <span className="text-yellow-300">from within.</span></span></h1>
                        </div>
                </div>
            </MaxWidthWrapper>
        </section>
    )    
}

export default Hero