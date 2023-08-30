"use client";

import Link from 'next/link'
import Navbar from "./components/Navbar"
import Particle from './components/Particle'
import { motion } from "framer-motion"

export default function Home() {
  const name = ["J", "a", "k", "u", "b", " ", "S", "t", "r", "a", "n", "i", "a", "n", "e", "k"]

  return (
   <main className="h-screen bg-black">
        <Particle />       
        <div className='w-full h-full relative z-10 flex flex-col items-center justify-center bg-gradient-to-tl from-black via-zinc-600/20 to-black'>
            <div className='my-10 lg:my-20'>
              <Navbar />            
            </div>
            
            <div className='w-full text-center relative flex'>                         
                {name.map(letter => {
                  return (
                    <motion.h2 className='text-transparent bg-white text-edge-outline bg-clip-text whitespace-nowrap leading-none font-cal text-5xl md:text-7xl lg:text-9xl' initial={{opacity: 0, x: -100}} animate={{opacity: 1, x: 0}} transition={{delay: 0.1, duration: 1.5}}>
                      {letter}  
                    </motion.h2>
                  )
                })}            
            </div>

            <p className='w-10/12 my-10 text-slate-300/50 font-sans text-center md:w-3/4 lg:w-1/3 lg:my-20'>Ahoj, volám sa Jakub a venujem sa tvorbe webových stránok a jednoduchých webových appiek. Ak máš záujem o spoluprácu, neváhaj ma <Link href="/kontakt" className='underline hover:text-white'>kontaktovať</Link>.</p>
        </div>
    </main>
  )
}
