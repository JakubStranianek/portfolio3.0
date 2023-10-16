import Link from 'next/link'
import {ArrowLeftIcon, ArrowRightIcon} from '@heroicons/react/20/solid'
import Navbar from '../components/Navbar'
import ThreeColumnProjects from '../components/ThreeColumnProjects'
import TwoColumnProjects from '../components/TwoColumnProjects'
import data from "../data.json"
import { useTranslations } from 'next-intl'
import Locales from '../components/Locales'

export default function Projects() {
  const t = useTranslations('portfolio')

  return (
    <div className="w-full h-full bg-black bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">      
     {/* HEADER */}
      <section className={'py-8 w-full fixed z-50 backdrop-blur duration-200 bg-zinc-900/500 border-b border-zinc-600'}>
        <div className='relative w-4/5 h-full m-auto flex items-center justify-between'>
            <Link href="/" aria-label="Back to the homepage"><ArrowLeftIcon className="relative z-20 w-8 text-zinc-400 hover:text-white" alt="homePage"/></Link>
            <div className='flex gap-6 text-white'>
              <Navbar />                                         
              <Locales paramSlug="/portfolio"/>
            </div>
        </div>
      </section>
      
      {/* WRAPPER */}
    <div className='relative w-4/5 h-full m-auto'>
      {/* Projects */}
      <div className='py-40 lg:px-24 h-full'>
        <h2 className='text-white font-cal text-5xl'>{t('nameOfSection')}</h2>
        <p className='text-zinc-400 my-4'>{t('sectionText')}</p>

        <div className='w-full h-[1px] bg-zinc-400/20 my-12'></div>

       <TwoColumnProjects sendData={data}/>

        <div className='w-full h-[1px] bg-zinc-400/20 my-12'></div>
        
        <ThreeColumnProjects sendData={data} />
      </div>    
    </div>      
  </div>
  )
}
