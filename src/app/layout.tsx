import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Navbar from '@/views/appbars/navbar'
import Providers from '@/utils/RQProvider';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HairShampoo',
  description: 'Created and maintained by Atom',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Providers>
        <Navbar/>
        <ToastContainer />
        {children}
      </Providers>
      </body>
    </html>
  )
}
