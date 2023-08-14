import '@/app/(Frontend)/globals.css'
import Navbar from '@/app/components/NavBar'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

const inter = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Salonsia',
  description: 'Salon Booking Application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='max-w-[78rem] m-auto'>
          <Navbar/>
             {children}
          </div>
      </body>
    </html>
  )
}
