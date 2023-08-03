import Link from 'next/link'
import {ArrowLeftIcon} from '@heroicons/react/20/solid'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import data from "../data.json"

export const metadata = {
  title: "Jakub Stranianek | Projects",
  description: "Examples of my projects"
}

export default function Projects() {
  return (
    <div className="w-full h-full bg-black bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
    {/* WRAPPER */}
    <div className='relative w-4/5 h-full pt-10 m-auto'>
      {/* HEADER */}
      <section className='flex items-center justify-between'>
        <Link href="/"><ArrowLeftIcon className="relative z-20 w-8 text-zinc-400 hover:text-white" /></Link>
        <Navbar />
      </section>

      {/* Projects */}
      <div className='py-14 lg:px-24 h-full'>
        <h2 className='text-white font-cal text-5xl'>Projects</h2>
        <p className='text-zinc-400 my-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus repellat exercitationem velit ut ullam nisi quae sit qui officia cum sint accusamus eum nam, earum quas consequatur veniam commodi quo.</p>

        <div className='w-full h-[1px] bg-zinc-400/20 my-12'></div>

        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 lg:gap-6">
          {data.filter(oneIndex => (oneIndex.id <= 3)).map(index => {
            return (
              <div key={index.name} className={index.id === 1 ? "lg:row-span-2 lg:col-start-1" : "lg:row-span-1 lg:col-start-2"}>              
              <Link href={"/projects/" + index.slug}>
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
              <Link href={"/projects/" + index.slug}>
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
