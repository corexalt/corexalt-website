"use client"

import Link from "next/link"



const NavLinks = [
    {
        label: "Home",
        path: "/"
    },
    {
        label: "About",
        path: "/#about"
    },
    {
        label: "Services",
        path: "/#services"
    },
    {
        label: "Events",
        path: "/#events"
    },
    {
        label: "Mentors",
        path: "/#mentors"
    },
    {
        label: "Contact Us",
        path: "/#contactUs"
    }
]

const NavItems = () => {
  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-10 md:flex-row">
        {
            NavLinks.map((link) => {
                return (
                    <li 
                        key={ link.path }
                    >
                        <Link href={ link.path }>
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