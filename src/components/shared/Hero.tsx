import MaxWidthWrapper from "./MaxWidthWrapper"

const Hero = () => {
    return (
        <section className="mt-[-80px] flex-center min-h-screen w-full bg-center bg-cover bg-fixed bg-[url('/hero.jpeg')] bg-opacity-60 pt-36 lg:pt-40 pb-36 lg:pb-40 overflow-hidden bg-blend-overlay bg-[#0D215C]">
            <div className="wrapper">
                <div className="flex-center w-full h-full">
                        <div className="md:max-w-6xl">
                            <h1 className="text-4xl md:text-6xl font-semibold font-['Poppins'] text-white"><span className="text-white">Your future starts <span className="text-[#F2FF5F]">from within.</span></span></h1>
                        </div>
                </div>
            </div>
        </section>
    )    
}

export default Hero