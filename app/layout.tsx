import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './shared/NavBar'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <div className='mx-auto'>
        {children}
        </div>
        </body>
    </html>
  )
}
