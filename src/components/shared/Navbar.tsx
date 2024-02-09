import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import Icons from "./Icons"
import Image from "next/image"
import { Button } from "../ui/button"
import { DrawerTrigger } from "../ui/drawer"
import MobileNav from "./MobileNav"
import NavItems from "./NavItems"

const Navbar = () => {
    return (
        <header className="h-20 top-8 z-10 w-full bg-transparent">
            <div className="wrapper inline-flex flex-between justify-center items-center">
                <Link href="/" className="grid grid-cols-2 items-center">
                    {/* <Icons.logo height={45} width={127} /> */}
                    <Image 
                        alt="Corexalt logo" 
                        src="/corexalt_typo.svg"
                        width={50}
                        height={50}
                        className="md:w-40"
                    />
                    {/* <span className="text-white md:text-2xl font-medium  justify-center items-center">orexalt</span> */}
                </Link>
                <nav className="md:flex-between hidden gap-12 font-semibold">
                    <NavItems />
                </nav>
                <MobileNav />
                {/* <div className="hidden flex items-center gap-2.5">
                    
                </div> */}
            </div>
        </header>
    )
}

export default Navbar