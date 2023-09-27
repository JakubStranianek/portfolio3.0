"use client"
import Link from "next/link"
import { ArrowRightIcon } from "@heroicons/react/20/solid"
import Card from "./Card"
import { usePathname } from "next/navigation"

function TwoColumnProjects({sendData}) {
  const path = usePathname()

    return (
    <div>
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 lg:gap-6">
          {sendData.filter(oneIndex => (oneIndex.id <= 3)).map(index => {
            return (
              <div key={index.name} className={index.id === 1 ? "lg:row-span-2 lg:col-start-1" : "lg:row-span-1 lg:col-start-2"}>              
              <Link href={"/portfolio/" + index.slug}>
              <Card>  
                  <div className='p-8 flex flex-col gap-4 h-full'>
                    <p className='text-white'>{index.date}</p>
                    <h2 className='text-white text-4xl font-cal'>{index.name}</h2>
                    
                    <div className='flex flex-col justify-between h-full'>
                    <p className='text-zinc-400 leading-8'>{path.includes("/en/") ? index.descriptionEN : index.description}</p>            
                    
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
    </div>
  )
}

export default TwoColumnProjects