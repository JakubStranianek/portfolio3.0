import Link from 'next/link'
import Navbar from "./components/Navbar"
import Particle from './components/Particle'
import Locales from "./components/Locales"
import {useTranslations} from 'next-intl';

export default function Home() {
  const t = useTranslations('mainPage');

  return (
   <main className="w-screen h-screen relative bg-black">
        <div className='absolute z-30'>
          <Particle />
        </div>

        <div className='absolute z-20 w-full pt-16'>
          <Locales paramSlug="/"/>       
        </div>
        <div className='w-full h-full relative z-10 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black'>
            <div className='my-10 lg:my-20'>             
              <Navbar />            
            </div>
            
            <div className='w-full text-center relative flex flex-col md:w-4/5 justify-center'>
              <div className="hidden w-screen h-px animate-glow md:block animate-fadeLeft bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />                                       
              <h1 className="z-10 text-4xl font-cal text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display md:text-6xl lg:text-9xl bg-clip-text ">
                Jakub Stranianek
              </h1>
              <div className="hidden w-screen h-px animate-glow md:block animate-fadeRight bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
            </div>

            <p className='w-10/12 my-10 text-slate-300/50 font-sans text-center md:w-3/4 lg:w-1/3 lg:my-20'>{t('mainText')} <Link href="/kontakt" className='underline hover:text-white'>{t('linkText')}</Link>.</p>
        </div>
    </main>
  )
}
