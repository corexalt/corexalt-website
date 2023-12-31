import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import Icons from "./Icons"
import Image from "next/image"

const Navbar = () => {
    return (
        <header className="h-20 top-8 z-10 w-full bg-transparent">
            <div className="wrapper inline-flex flex-between justify-center items-center">
                <Link href="/" className="w-16 md:w-24 grid grid-cols-2 items-center">
                    {/* <Icons.logo height={45} width={127} /> */}
                    <Image 
                        src="/logo_white.svg"
                        width={35}
                        height={25}
                        alt="Corexalt logo" 
                        className="md:w-40"
                    />
                    <span className="text-white md:text-2xl font-medium font-['Poppins'] justify-center items-center">orexalt</span>
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