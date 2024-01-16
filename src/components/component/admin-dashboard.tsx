/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/zmtzP9sGkrs
 */
import Link from "next/link"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"

export function AdminDashboard() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <nav className="flex flex-col bg-gray-200 dark:bg-gray-900 w-full lg:w-64 px-8 pt-4 pb-4">
        <div className="flex flex-col items-center lg:items-start">
          <img
            alt="Logo"
            className="mb-8 w-12 h-12"
            height="50"
            src="/placeholder.svg"
            style={{
              aspectRatio: "50/50",
              objectFit: "cover",
            }}
            width="50"
          />
          <div className="flex flex-row lg:flex-col gap-6">
            <Link
              className="flex items-center gap-2 text-sm font-medium md:text-sm hover:bg-gray-300 dark:hover:bg-gray-700 rounded-lg p-2"
              href="#"
            >
              <HomeIcon className="w-4 h-4 dark:text-gray-400" />
              <span className="hidden lg:block">Home</span>
            </Link>
            <Link
              className="flex items-center gap-2 text-sm font-medium md:text-sm hover:bg-gray-300 dark:hover:bg-gray-700 rounded-lg p-2"
              href="#"
            >
              <UsersIcon className="w-4 h-4 dark:text-gray-400" />
              <span className="hidden lg:block">Attendees</span>
            </Link>
            <Link
              className="flex items-center gap-2 text-sm font-medium md:text-sm hover:bg-gray-300 dark:hover:bg-gray-700 rounded-lg p-2"
              href="#"
            >
              <GroupIcon className="w-4 h-4 dark:text-gray-400" />
              <span className="hidden lg:block">Mentors</span>
            </Link>
            <Link
              className="flex items-center gap-2 text-sm font-medium md:text-sm hover:bg-gray-300 dark:hover:bg-gray-700 rounded-lg p-2"
              href="#"
            >
              <CalendarIcon className="w-4 h-4 dark:text-gray-400" />
              <span className="hidden lg:block">Events</span>
            </Link>
          </div>
        </div>
      </nav>
      <main className="flex-1 bg-gray-100 dark:bg-gray-800 overflow-y-auto">
        <div className="px-6 py-8">
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-xs font-medium">Total Attendees</CardTitle>
                <UsersIcon className="w-3 h-3 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold">+2350</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">+180.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-xs font-medium">Total Mentors</CardTitle>
                <GroupIcon className="w-3 h-3 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold">+573</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">+201 since last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-xs font-medium">Total Events</CardTitle>
                <CalendarIcon className="w-3 h-3 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold">+12</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">+2 since last month</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}


function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}


function GroupIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 7V5c0-1.1.9-2 2-2h2" />
      <path d="M17 3h2c1.1 0 2 .9 2 2v2" />
      <path d="M21 17v2c0 1.1-.9 2-2 2h-2" />
      <path d="M7 21H5c-1.1 0-2-.9-2-2v-2" />
      <rect width="7" height="5" x="7" y="7" rx="1" />
      <rect width="7" height="5" x="10" y="12" rx="1" />
    </svg>
  )
}


function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}