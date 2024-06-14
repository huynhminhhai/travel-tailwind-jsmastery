import type { Metadata } from 'next'
import './globals.css'
import localFont from 'next/font/local'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'TravelCoca',
  description: 'TravelCoca UI/UX App for Camping, here we go!'
}

const lexends = localFont({
  src: [
    {
      path: './fonts/lexends/Lexend-Light.ttf',
      weight: '300',
      style: 'normal'
    },
    {
      path: './fonts/lexends/Lexend-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: './fonts/lexends/Lexend-Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: './fonts/lexends/Lexend-SemiBold.ttf',
      weight: '600',
      style: 'normal'
    },
    {
      path: './fonts/lexends/Lexend-Bold.ttf',
      weight: '700',
      style: 'normal'
    }
  ]
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='https://cdn-icons-png.flaticon.com/512/5219/5219577.png' sizes='any' />
      </head>
      <body className={lexends.className}>
        <Navbar />
        <main className='relative overflow-hidden'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
