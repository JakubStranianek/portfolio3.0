"use client"

import Link from "next/link"
import Card from "./Card"
import { usePathname } from "next/navigation"

function ThreeColumnProjects({sendData}) {
    const path = usePathname()

  return (
    <div className="grid gap-8 grid-cols-1 lg:grid-cols-3 lg:gap-6">
          {sendData.filter(oneIndex => (oneIndex.id > 3)).map(index => {
            return (
              <div key={index.name}>              
              <Link href={"/portfolio/" + index.slug}>
              <Card>  
                  <div className='p-8 flex flex-col gap-4'>
                    <p className='text-white'>{index.date}</p>
                    <h2 className='text-white text-4xl font-cal'>{index.name}</h2>
                    <p className='text-zinc-400 leading-8'>{path.includes("/en/") ? index.descriptionEN : index.description}</p>            
                  </div>          
              </Card>
            </Link>
              </div>
            )
          })}
        </div>         
  )
}

export default ThreeColumnProjects