import Link from 'next/link'
import {ArrowLeftIcon, ArrowRightIcon} from '@heroicons/react/20/solid'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import data from "../data.json"
import { useTranslations } from 'next-intl'
import Locales from '../components/Locales'

export const metadata = {
  title: "Jakub Stranianek | Projekty",
  description: "Ukážka webových stránok a aplikácií na ktorých som pracoval"
}

export default function Projects() {
  const t = useTranslations('portfolio')
  return (
    <div className="w-full h-full bg-black bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">      
     {/* HEADER */}
      <section className={'py-8 w-full fixed z-50 backdrop-blur duration-200 bg-zinc-900/500 border-b border-zinc-600'}>
        <div className='relative w-4/5 h-full m-auto flex items-center justify-between'>
            <Link href="/"><ArrowLeftIcon className="relative z-20 w-8 text-zinc-400 hover:text-white" alt="homePage"/></Link>
            <div className='flex gap-6'>
              <Navbar />
              <Locales paramSlug="projekty"/>
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

        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 lg:gap-6">
          {data.filter(oneIndex => (oneIndex.id <= 3)).map(index => {
            return (
              <div key={index.name} className={index.id === 1 ? "lg:row-span-2 lg:col-start-1" : "lg:row-span-1 lg:col-start-2"}>              
              <Link href={"/portfolio/" + index.slug}>
              <Card>  
                  <div className='p-8 flex flex-col gap-4 h-full'>
                    <p className='text-white'>{index.date}</p>
                    <h2 className='text-white text-4xl font-cal'>{index.name}</h2>
                    
                    <div className='flex flex-col justify-between h-full'>
                    <p className='text-zinc-400 leading-8'>{index.description}</p>            
                    
                    {index.id === 1 ? 
                      <div className='flex gap-3 items-center group'>
                        <p className='text-white group-hover:text-zinc-400'>Pozrieť viac</p> 
                        <ArrowRightIcon className="relative z-20 w-8 text-white group-hover:text-zinc-400" alt="homePage"/>
                      </div>
                      : ""}
                    </div>
                  </div>  
              </Card>
            </Link>
              </div>
            )
          })}
        </div>

        <div className='w-full h-[1px] bg-zinc-400/20 my-12'></div>
        
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-3 lg:gap-6">
          {data.filter(oneIndex => (oneIndex.id > 3)).map(index => {
            return (
              <div key={index.name}>              
              <Link href={"/projekty/" + index.slug}>
              <Card>  
                  <div className='p-8 flex flex-col gap-4'>
                    <p className='text-white'>{index.date}</p>
                    <h2 className='text-white text-4xl font-cal'>{index.name}</h2>
                    <p className='text-zinc-400 leading-8'>{index.description}</p>            
                  </div>          
              </Card>
            </Link>
              </div>
            )
          })}
        </div>         
      </div>    
    </div>      
  </div>
  )
}
