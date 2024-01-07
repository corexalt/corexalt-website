"use client"

import Link from "next/link"



const NavLinks = [
    {
        label: "Home",
        route: "/"
    },
    {
        label: "About",
        route: "/#about"
    },
    {
        label: "Services",
        route: "/#services"
    },
    {
        label: "Events",
        route: "/#events"
    },
    {
        label: "Mentors",
        route: "/#mentors"
    },
    {
        label: "Contact Us",
        route: "/#contactUs"
    }
]

{/* <Link href="/">
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
                        <span className="text-white text-base font-medium font-['Poppins'] leading-normal">Mentors</span>
                    </Link>
                    <Link href="/">
                        <span className="text-white text-base font-medium font-['Poppins'] leading-normal">Contact</span>
                    </Link> */}

const NavItems = () => {
  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-10 md:flex-row">
        {
            NavLinks.map((link) => {
                return (
                    <li 
                        key={ link.label }
                    >
                        <Link href={ link.route }>
                            <span className="text-white text-base font-medium font-['Poppins'] leading-normal">{ link.label }</span>
                        </Link>
                    </li>
                )
            })
        }
    </ul>
  )
}

export default NavItems