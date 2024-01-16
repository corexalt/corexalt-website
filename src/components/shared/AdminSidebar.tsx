import { CalendarIcon, GroupIcon, HomeIcon, UsersIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'

const AdminSidebar = () => {
  return (
    <nav className="relative min-w-[80px] bg-blue-950 border-r px-3 pb-10 pt-8">
        <div className="flex flex-col items-center">
          <img
            alt="Logo"
            className="mb-8 w-12 h-12"
            height="50"
            src="/logo_white.svg"
            style={{
              aspectRatio: "50/50",
              objectFit: "cover",
            }}
            width="50"
          />
          <div className="flex flex-col gap-6">
            <Link
              className="flex items-center text-white gap-2 text-sm font-medium md:text-sm hover:bg-gray-300 dark:hover:bg-gray-700 rounded-lg p-2"
              href="/admin"
            >
              <HomeIcon className="w-4 h-4 dark:text-gray-400" />
              <span className="hidden lg:block">Home</span>
            </Link>
            <Link
              className="flex items-center text-white gap-2 text-sm font-medium md:text-sm hover:bg-gray-300 dark:hover:bg-gray-700 rounded-lg p-2"
              href="/admin/attendees"
            >
              <UsersIcon className="w-4 h-4 dark:text-gray-400" />
              <span className="hidden lg:block">Attendees</span>
            </Link>
            <Link
              className="flex items-center text-white gap-2 text-sm font-medium md:text-sm hover:bg-gray-300 dark:hover:bg-gray-700 rounded-lg p-2"
              href="/admin/events"
            >
              <CalendarIcon className="w-4 h-4 dark:text-gray-400" />
              <span className="hidden lg:block">Events</span>
            </Link>
            <Link
              className="flex items-center text-white gap-2 text-sm font-medium md:text-sm hover:bg-gray-300 dark:hover:bg-gray-700 rounded-lg p-2"
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