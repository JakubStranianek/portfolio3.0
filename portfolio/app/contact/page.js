import {ArrowLeftIcon} from '@heroicons/react/20/solid'
import Navbar from '../components/Navbar'
import Link from 'next/link'
import Image from 'next/image'
import Card from '../components/Card'
import insta from "../../public/icons/insta.svg"
import email from "../../public/icons/email.svg"
import github from "../../public/icons/github.svg"
 
export const metadata = {
  title: 'Jakub Stranianek | Contact',
  description: 'Feel free to contact me!',
}

const data = [
  {
    name: "Instagram",
    text: "@jakub_stranianek",
    href: "https://www.instagram.com/jakub_stranianek/",
    icon: insta,
    target: "_blank"
  },
  {
    name: "Email",
    text: "j.stranianek@gmail.com",
    href: "mailto:j.stranianek@gmail.com",
    icon: email,
    target: "_self"
  },
  {
    name: "Github",
    text: "JakubStranianek",
    href: "https://github.com/JakubStranianek",
    icon: github,
    target: "_blank"
  }
]
export default function Contact() {
  return (
    <div className="w-full h-full bg-black lg:h-screen bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
              {/* HEADER */}
              <section className={'py-8 w-full fixed z-50 backdrop-blur duration-200 bg-zinc-900/500 border-b border-zinc-600'}>
        <div className='relative w-4/5 h-full m-auto flex items-center justify-between'>
        <Link href="/" alt="homePage"><ArrowLeftIcon className="relative z-20 w-8 text-zinc-400 hover:text-white" /></Link>
          <Navbar />
        </div>
      </section>
      {/* WRAPPER */}
      <div className='relative w-4/5 h-full pt-10 m-auto'>      
        {/* CARDS */}
        <div className='py-28 flex flex-col justify-center lg:py-0 lg:absolute lg:inset-0 lg:w-full lg:h-full'>
          <section className='grid gap-16 items-center grid-cols-1 lg:grid-cols-3'>
            {data.map(index => {
              return (
                <Link href={index.href} key={index.name} alt={index.name + ": " + index.text} target={index.target}>
                  <Card>
                    <div className='py-8 flex flex-col items-center lg:py-32'>
                      <div className='relative'>
                        <div className='border rounded-full border-zinc-400 p-3'>
                          <Image src={index.icon} />               
                        </div>
                        <div className='absolute inset-0 translate-x-[23px] translate-y-[46px] z-10 w-[1px] h-[120px] bg-gradient-to-b from-zinc-400 to-transparent lg:h-[150px]'></div>
                      </div>
                      <h3 className='text-white font-cal text-2xl pt-8 pb-4'>{index.text}</h3>
                      <h4 className='text-zinc-400 text-base'>{index.name}</h4>
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
