import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import Icons from "./Icons"

const Navbar = () => {
    return (
        <MaxWidthWrapper>
                <header className="h-20 top-8 z-10 relative bg-transparent">
                    <div className="flex flex-row items-center justify-between">
                        <div className="flex">
                            <div>
                                <Link href="/">
                                    <Icons.logo height={45} width={127} />
                                </Link>
                            </div>
                        </div>
                        <div className="flex items-center gap-12">
                            <div>
                                <Link href="/">
                                    <span className="text-white text-base font-medium font-['Poppins'] leading-normal">Home</span>
                                </Link>
                            </div>
                            <div>
                                <Link href="/">
                                    <span className="text-white text-base font-medium font-['Poppins'] leading-normal">About</span>
                                </Link>
                            </div>
                            <div>
                                <Link href="/">
                                    <span className="text-white text-base font-medium font-['Poppins'] leading-normal">Services</span>
                                </Link>
                            </div>
                            <div>
                                <Link href="/">
                                    <span className="text-white text-base font-medium font-['Poppins'] leading-normal">Events</span>
                                </Link>
                            </div>
                            <div>
                                <Link href="/">
                                    <span className="text-white text-base font-medium font-['Poppins'] leading-normal">Contact</span>
                                </Link>
                            </div>
                        </div>
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
        </MaxWidthWrapper>
    )
}

export default Navbar