import {ArrowLeftIcon} from '@heroicons/react/20/solid'
import Navbar from '../components/Navbar'
import Link from 'next/link'
import Card from '../components/Card'

export default function Contact() {
  return (
    <div className="w-full h-screen bg-black">
      {/* WRAPPER */}
      <div className='w-4/5 pt-10 m-auto'>
        {/* HEADER */}
        <section className='flex items-center justify-between'>
          <Link href="/"><ArrowLeftIcon className="w-8 text-zinc-400 hover:text-white" /></Link>
          <Navbar />
        </section>

        {/* CARDS */}    
        <section>
          <Card>
            <div>JANO</div>
          </Card>
        </section>
      </div>      
    </div>
  )
}
