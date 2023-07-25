import Link from 'next/link'
import Navbar from "./components/Navbar"

export default function Home() {
  return (
   <main className="h-screen bg-black">            
        <div className='w-full h-full relative z-10 flex flex-col items-center justify-center bg-gradient-to-tl from-black via-zinc-600/20 to-black'>
            <div className='my-10 lg:my-20'>
              <Navbar />            
            </div>
            <h2 className='text-white font-cal text-5xl md:text-7xl lg:text-9xl'>jake.dev</h2>
            <p className='w-10/12 my-10 text-slate-300/50 font-sans text-center md:w-3/4 lg:w-1/3 lg:my-20'>Hi, my name is Jakub, and I specialize in creating websites and simple web applications. If you are interested, feel free to <Link href="/contact" className='underline'>contact</Link> me.</p>
        </div>
    </main>
  )
}
