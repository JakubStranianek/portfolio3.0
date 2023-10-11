import Link from 'next/link'
import Navbar from "./components/Navbar"
import Particle from './components/Particle'
import Locales from "./components/Locales"
import {useTranslations} from 'next-intl';

export default function Home() {
  const t = useTranslations('mainPage');

  return (
   <main className="w-screen h-screen relative bg-black">
        <div className='absolute z-20 w-full pt-16'>
          <Locales paramSlug="/"/>       
        </div>
        <div className='w-full h-full relative z-10 flex flex-col items-center justify-center bg-gradient-to-tl from-black via-zinc-600/20 to-black'>
            <div className='my-10 lg:my-20'>             
              <Navbar />            
            </div>
            
            <div className='w-full text-center relative flex md:w-4/5 justify-center'>                                     
        <h2         
          className='px-4 text-transparent bg-white text-edge-outline bg-clip-text leading-none font-cal text-3xl md:text-5xl md:px-0 lg:text-8xl'         
        >
          {t('name')}
        </h2>
            </div>

            <p className='w-10/12 my-10 text-slate-300/50 font-sans text-center md:w-3/4 lg:w-1/3 lg:my-20'>{t('mainText')} <Link href="/kontakt" className='underline hover:text-white'>{t('linkText')}</Link>.</p>
        </div>
    </main>
  )
}
