import { Inter } from 'next/font/google'
import Navbar from './navbar';
import Footer from './footer';
const inter = Inter({ subsets: ['latin'] })


export default function Layout({
  children,
}: {
  children: React.ReactNode
}) { 
  return (
    <>
     <Navbar/>
      <main className={inter.className}>{children}</main>
      <Footer/>
    </>

  )
}
