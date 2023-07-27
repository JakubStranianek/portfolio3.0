"use client";

import Link from 'next/link'
import Navbar from "./components/Navbar"
import Particle from './components/Particle'
import Typed from 'typed.js'
import { useRef } from 'react';
import { useEffect } from 'react';

export default function Home() {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['WebDeveloper', 'Designer', 'Jakub Stranianek'],
      typeSpeed: 150,  
      startDelay: 1000,
      showCursor: true,
  cursorChar: '|',
  autoInsertCss: true,    
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
   <main className="h-screen bg-black">
        <Particle />       
        <div className='w-full h-full relative z-10 flex flex-col items-center justify-center bg-gradient-to-tl from-black via-zinc-600/20 to-black'>
            <div className='my-10 lg:my-20'>
              <Navbar />            
            </div>
            <h2 className='text-white font-cal text-5xl md:text-7xl lg:text-9xl' ref={el}></h2>
            <p className='w-10/12 my-10 text-slate-300/50 font-sans text-center md:w-3/4 lg:w-1/3 lg:my-20'>Hi, my name is Jakub, and I specialize in creating websites and simple web applications. If you are interested, feel free to <Link href="/contact" className='underline hover:text-white'>contact</Link> me.</p>
        </div>
    </main>
  )
}
