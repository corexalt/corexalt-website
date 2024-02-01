import { CalendarIcon, GroupIcon, HomeIcon, UsersIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'
import Image from 'next/image';
const AdminSidebar = () => {
  return (
    <nav className="relative min-h-screen bg-blue-950 border-r md:w-72 px-4 pb-10">
        <div className="flex flex-col items-start">
          <div className="p-2 rounded-2xl">
            <Link href="/">
              <Image
                alt="Corexalt logo"
                className="w-36 h-36"
                height="50"
                width="50"
                src="/corexalt_typo.svg"
                style={{
                  aspectRatio: "16/9",
                  objectFit: "contain",
                }}
              />
            </Link>
          </div>
          <div className="flex flex-col gap-8 w-full">
            <Link
              className="flex items-center text-white focus:text-[#F2FF5F] gap-4 text-sm font-medium md:text-sm hover:bg-[#1e316b] focus:bg-[#1e316b] rounded-lg p-2"
              href="/admin"
            >
              <HomeIcon className="w-4 h-4 dark:text-gray-400" />
              <span className="hidden lg:block">Home</span>
            </Link>
            <Link
              className="flex items-center text-white focus:text-[#F2FF5F] gap-4 text-sm font-medium md:text-sm hover:bg-[#1e316b] focus:bg-[#1e316b] rounded-lg p-2"
              href="/admin/attendees"
            >
              <UsersIcon className="w-4 h-4 dark:text-gray-400" />
              <span className="hidden lg:block">Attendees</span>
            </Link>
            <Link
              className="flex items-center text-white focus:text-[#F2FF5F] gap-4 text-sm font-medium md:text-sm hover:bg-[#1e316b] focus:bg-[#1e316b] rounded-lg p-2"
              href="/admin/events"
            >
              <CalendarIcon className="w-4 h-4 dark:text-gray-400" />
              <span className="hidden lg:block">Events</span>
            </Link>
            <Link
              className="flex items-center text-white focus:text-[#F2FF5F] gap-4 text-sm font-medium md:text-sm hover:bg-[#1e316b] focus:bg-[#1e316b] rounded-lg p-2"
              href="/admin/mentors"
            >
              <GroupIcon className="w-4 h-4 dark:text-gray-400" />
              <span className="hidden lg:block">Mentors</span>
            </Link>
          </div>
        </div>
      </nav>
    
  )
}

export default AdminSidebar