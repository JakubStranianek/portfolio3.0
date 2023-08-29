import Link from 'next/link'
import {ArrowLeftIcon} from '@heroicons/react/20/solid'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import data from "../data.json"

export const metadata = {
  title: "Jakub Stranianek | Projekty",
  description: "Ukážka webových stránok a aplikácií na ktorých som pracoval"
}

export default function Projects() {
  return (
    <div className="w-full h-full bg-black bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">      
     {/* HEADER */}
      <section className={'py-8 w-full fixed z-50 backdrop-blur duration-200 bg-zinc-900/500 border-b border-zinc-600'}>
        <div className='relative w-4/5 h-full m-auto flex items-center justify-between'>
            <Link href="/"><ArrowLeftIcon className="relative z-20 w-8 text-zinc-400 hover:text-white" alt="homePage"/></Link>
            <Navbar />
        </div>
      </section>
      
      {/* WRAPPER */}
    <div className='relative w-4/5 h-full m-auto'>
      {/* Projects */}
      <div className='py-40 lg:px-24 h-full'>
        <h2 className='text-white font-cal text-5xl'>Projekty</h2>
        <p className='text-zinc-400 my-4'>Vitajte v sekcii projektov! Tu nájdete moje vytvorené projekty ktoré som zaradil do svojho portfólia. Objavte spojenie dizajnu a funkčnosti v každom projekte. Prechádzajte a hľadajte chyby aby som sa mohol zdokonaľovať!</p>

        <div className='w-full h-[1px] bg-zinc-400/20 my-12'></div>

        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 lg:gap-6">
          {data.filter(oneIndex => (oneIndex.id <= 3)).map(index => {
            return (
              <div key={index.name} className={index.id === 1 ? "lg:row-span-2 lg:col-start-1" : "lg:row-span-1 lg:col-start-2"}>              
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
