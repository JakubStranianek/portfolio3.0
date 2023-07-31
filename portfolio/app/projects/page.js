import Link from 'next/link'
import {ArrowLeftIcon} from '@heroicons/react/20/solid'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import data from "../data.json"

const projects = [
  {
    id: 1,
    date: "Jan 22, 2023",
    name: "Villiz Barbershop",
    description: "A modern, user-friendly website for a traditional barbershop, offering services, barber profiles and easy contact booking.",
    slug: "villiz-barbershop",
    href: "https://villizbarbershop.sk/",
    customCss: "lg:row-span-2 lg:col-start-1"
  },
  {
    id: 2,
    date: "Jul 11, 2023",
    name: "Nicol Studio",
    description: "Minimalistic and elegant design showcasing an extensive portfolio of avant-garde hairstyles and tratment techniques.",
    slug: "nicol-studio",
    href: "https://nicolstudio.sk/",
    customCss: "lg:row-span-1 lg:col-start-2"
  },
  {
    id: 3,
    date: "Jan 11, 2023",
    name: "Clock App",
    description: "A sleek and functional clock app that provides accurate timekeeping and multiple clock faces to suit various preferences. Simple, yet reliable.",
    slug: "clock-app",
    href: "https://clock-app-frntmntr.netlify.app/",
    customCss: "lg:row-span-1 lg:col-start-2"
  },
  {
    id: 4,
    date: "Dec 20, 2022",
    name: "Github finder App",
    description: "Real-time search, filtering options, and detailed user profiles for seamless collaboration within the Github community.",
    slug: "github-finder-app",
    href: "https://github-finder-femntr.netlify.app/",
  },
  {
    id: 5,
    date: "Dec 20, 2022",
    name: "Password generator App",
    description: "A handy app to generate strong and secure passwords. Customizable options for length, character types, and easy one-click generation.",
    slug: "password-generator-app",
    href: "https://password-generator-femntr.netlify.app/",
  },
  {
    id: 6,
    date: "Oct 3, 2022",
    name: "Design Landing Page",
    description: "An eye-catching landing page with good looking visuals for showcasing design services or products. Engaging layout to capture visitors' attention and drive conversions.",
    slug: "design-landing-page",
    href: "https://courageous-florentine-a78dc8.netlify.app/",
  },
]


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
              <div key={index.name} className={index.customCss}>              
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
              <div key={index.name} className={index.customCss}>              
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
