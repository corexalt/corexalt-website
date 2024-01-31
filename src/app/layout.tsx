import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { cn } from '@/lib/utils'
import './globals.css'
import Navbar from '@/components/shared/Navbar'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['100','200','300','400', '500', '600', '700'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'Corexalt',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
        <body className={cn("min-h-screen bg-background font-sans antialiased", poppins.variable)}>
          { children }
          {/* <main className='min-h-screen relative flex flex-col'>
            <div className='flex-grow flex-1'>
              <Navbar />
              {children}
            </div>
          </main> */}
        </body>
      </html>
  )
}
