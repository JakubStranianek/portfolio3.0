import {ArrowLeftIcon} from '@heroicons/react/20/solid'
import Navbar from '../components/Navbar'
import Link from 'next/link'
import Image from 'next/image'
import Card from '../components/Card'
import insta from "../../public/icons/insta.svg"
import email from "../../public/icons/email.svg"
import github from "../../public/icons/github.svg"

const data = [
  {
    name: "Instagram",
    text: "@jakub_stranianek",
    href: "https://www.instagram.com/jakub_stranianek/",
    icon: insta
  },
  {
    name: "Email",
    text: "j.stranianek@gmail.com",
    href: "mailto:j.stranianek@gmail.com",
    icon: email
  },
  {
    name: "Github",
    text: "JakubStranianek",
    href: "https://github.com/JakubStranianek",
    icon: github
  }
]
export default function Contact() {
  return (
    <div className="w-full h-screen bg-black bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      {/* WRAPPER */}
      <div className='relative w-4/5 h-full pt-10 m-auto'>
        {/* HEADER */}
        <section className='flex items-center justify-between'>
          <Link href="/"><ArrowLeftIcon className="w-8 text-zinc-400 hover:text-white" /></Link>
          <Navbar />
        </section>

        {/* CARDS */}
        <div className='absolute w-full inset-0 h-full flex flex-col justify-center'>
          <section className='grid items-center grid-cols-1 md:grid-cols-3 lg:gap-16'>
            {data.map(index => {
              return (
                <Link href={index.href} key={index.name} target='_blank'>
                  <Card>
                    <div className='py-32 flex flex-col items-center'>
                      <div className='relative'>
                        <div className='border rounded-full border-zinc-400 p-3'>
                          <Image src={index.icon} />               
                        </div>
                        <div className='absolute inset-0 translate-x-[23px] translate-y-[46px] z-10 w-[1px] h-[150px] bg-gradient-to-b from-zinc-400 to-transparent'></div>
                      </div>
                      <h3 className='text-white font-cal text-2xl pt-8 pb-4'>{index.text}</h3>
                      <h5 className='text-zinc-400'>{index.name}</h5>
                    </div>      
                  </Card>                                                   
                </Link>
              )            
            })}
          </section>
        </div>    
      </div>      
    </div>
  )
}
