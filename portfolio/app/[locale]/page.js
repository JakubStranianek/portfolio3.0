import Link from 'next/link'
import Navbar from "./components/Navbar"
import Particle from './components/Particle'
import Locales from "./components/Locales"
import {useTranslations} from 'next-intl';

export default function Home() {
  const t = useTranslations('mainPage');

  return (
   <main className="h-screen relative bg-black">
        <Particle />
        <div className='absolute z-20 w-full pt-16'>
          <Locales paramSlug="/"/>       
        </div>
        <div className='w-full h-full relative z-10 flex flex-col items-center justify-center bg-gradient-to-tl from-black via-zinc-600/20 to-black'>
            <div className='my-10 lg:my-20'>             
              <Navbar />            
            </div>
            
            <div className='w-full text-center relative flex justify-center'>                                     
        <h2         
          className='px-6 text-transparent bg-white text-edge-outline bg-clip-text whitespace-nowrap leading-none font-cal text-5xl md:text-7xl md:px-0 lg:text-9xl'         
        >
          {t('name')}
        </h2>
            </div>

            <p className='w-10/12 my-10 text-slate-300/50 font-sans text-center md:w-3/4 lg:w-1/3 lg:my-20'>{t('mainText')} <Link href="/kontakt" className='underline hover:text-white'>{t('linkText')}</Link>.</p>
        </div>
    </main>
  )
}
