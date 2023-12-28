import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import Icons from "./Icons"
import Image from "next/image"

const Navbar = () => {
    return (
        <header className="h-20 top-8 z-10 w-full bg-transparent">
            <div className="wrapper flex-between">
                <Link href="/" className="w-36">
                    {/* <Icons.logo height={45} width={127} /> */}
                    <Image 
                        src="/vercel.svg"
                        width={127}
                        height={45}
                        alt="Corexalt logo" 
                    />
                </Link>
                <nav className="md:flex-between hidden gap-12 font-semibold">
                    <Link href="/">
                        <span className="text-white text-base font-medium font-['Poppins'] leading-normal">Home</span>
                    </Link>
                    <Link href="/">
                        <span className="text-white text-base font-medium font-['Poppins'] leading-normal">About</span>
                    </Link>
                    <Link href="/">
                        <span className="text-white text-base font-medium font-['Poppins'] leading-normal">Services</span>
                    </Link>
                    <Link href="/">
                        <span className="text-white text-base font-medium font-['Poppins'] leading-normal">Events</span>
                    </Link>
                    <Link href="/">
                        <span className="text-white text-base font-medium font-['Poppins'] leading-normal">Contact</span>
                    </Link>
                </nav>
                <div className="flex items-center gap-2.5">
                    <div>
                        <Link href="/">
                            <span>Events</span>
                        </Link>
                    </div>
                    <div>
                        <Link href="/">
                            <span>Contact</span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar