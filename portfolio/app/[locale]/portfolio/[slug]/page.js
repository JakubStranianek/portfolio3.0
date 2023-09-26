"use client"

import Error from "@/app/[locale]/404";
import data from "../../data.json";
import {ArrowLeftIcon} from '@heroicons/react/20/solid'
import Link from "next/link";
import Image from "next/image";
import Gif from "/public/test.gif"
import { animate, motion, spring } from "framer-motion";

export default function ProjectDetail({params}) {
  const filteredData = data.filter((item) => item.slug === params.slug);  

  const variants = {
    variantA: { opacity:0, x: -20, y:-20 },
    variantB: { x: 0, y:0, opacity: 1 },
  }

  const variantsB = {
    variantA: { opacity:0, y:-40 },
    variantB: { y:0, opacity: 1 },
  }

  if (filteredData.length === 0) {
    return <Error />
  }

  return (
    <div>      
       {filteredData.map((item) => {
        return (   
          <>       
          <div key={item.id} className="w-full h-full bg-black bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
             {/* HEADER */}
      <section className={'py-8 w-full fixed z-50 backdrop-blur duration-200 bg-zinc-900/500 border-b border-zinc-600'}>
        <div className='relative w-4/5 h-full m-auto flex items-center justify-between'>
        <Link href="/portfolio"><ArrowLeftIcon className="relative z-20 w-8 text-zinc-400 hover:text-white" /></Link>
              <Link href={item.github} target="_blank">              
                <svg width="20" height="20" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg" alt={item.github} className="fill-zinc-400 hover:fill-white">
                  <path d="M1873.256 674.212c0-122.468-35.728-230.622-106.325-321.88 15.712-57.683 32.5-171.972-20.77-313.703-5.596-15.066-17.864-26.796-33.146-32.07-19.155-6.564-122.144-30.347-328.552 110.953-84.157-22.169-172.94-33.576-264.844-34.114-91.582.538-180.366 11.945-264.306 34.114C648.689-23.68 545.7-.005 526.437 6.56c-15.282 5.165-27.55 17.003-33.146 32.177-53.162 141.623-36.374 255.912-20.555 313.594-70.704 91.582-106.54 199.629-106.54 321.88 0 422.826 221.905 557.131 432.188 605.666-46.49 50.903-95.24 125.158-105.68 219.537-71.78 26.044-257.633 78.13-325.109-44.015-3.013-5.596-73.394-137.641-215.017-148.08-25.075 1.184-84.587 4.305-101.052 54.346-18.51 55.961 39.495 97.716 67.906 117.41.538.323 55.745 31.962 93.841 132.045.969 4.628 23.783 114.72 134.951 181.55 87.492 52.731 202.319 63.493 341.252 32.284 0 23.46-.323 48.212-.43 63.386l-.324 31.101H796.34l.215-29.81c1.937-161.532 2.045-164.653-30.778-181.656-12.484-6.457-27.012-7.964-40.356-3.659-136.243 41.002-246.98 40.033-320.052-2.798-70.488-41.54-85.985-108.908-88.89-119.67-3.875-10.653-8.072-20.662-12.269-30.24 126.987 145.713 372.138 77.161 463.289 33.792 18.833-8.825 30.778-27.765 30.778-48.535 0-149.372 148.295-244.182 149.802-245.15 19.371-12.16 28.949-35.19 23.998-57.36-4.95-22.276-23.352-39.065-46.06-41.755-223.626-26.796-452.204-109.338-452.204-518.388 0-106.325 33.577-198.983 99.76-275.175 12.915-15.067 16.681-36.052 9.579-54.562-9.793-25.397-36.482-112.782-.323-234.819 35.729 4.09 110.845 24.321 231.16 110.307 13.344 9.578 30.455 12.376 46.383 7.856 80.497-23.568 170.356-36.267 259.248-36.805 89.321.538 179.073 13.237 259.786 36.805 15.927 4.52 32.93 1.722 46.382-7.856 121.176-86.631 196.4-106.433 230.73-110.63 36.482 122.145 9.793 209.745 0 235.142-7.21 18.51-3.444 39.603 9.578 54.562 66.076 75.977 99.545 168.527 99.545 275.175 0 409.157-229.115 491.161-453.173 517.527-20.985 2.475-38.634 16.896-44.984 37.02-6.456 20.017-.538 42.078 15.067 56.284 6.35 5.703 14.958 12.483 25.074 20.231 51.333 39.28 137.211 105.034 137.211 259.571 0 85.448-1.399 354.273-1.399 354.273l107.617.539s1.399-269.257 1.399-354.812c0-141.838-56.499-229.976-110.845-285.937 210.39-48.427 431.65-182.517 431.65-604.696" fillRule="evenodd"/>
                </svg>
              </Link>
        </div>
      </section>
      
            <div className='relative w-4/5 h-full pt-10 m-auto'>           
            <section className="py-28 flex flex-col gap-8 text-center">
              <motion.h2 className="text-white text-3xl font-cal lg:text-6xl" variants={variants} initial="variantA" animate="variantB" transition={{duration: 2, type: "spring"}}>{item.name}</motion.h2>
              <motion.p className="text-zinc-400 lg:w-1/3 m-auto" variants={variantsB} initial="variantA" animate="variantB" transition={{duration: 2, type: "spring"}}>{item.description}</motion.p>
            
              <motion.div className="text-white flex gap-4 justify-center" variants={variants} initial="variantA" animate="variantB" transition={{duration: 2, type: "spring"}}>
                <Link href={item.github} target="_blank" className="hover:text-zinc-400">Github →</Link>
                <Link href={item.href} target="_blank" className="hover:text-zinc-400">Website →</Link>
              </motion.div>
            </section>
            </div>            
          </div>

          <div className="w-full py-20"> 
            <div className="w-4/5 m-auto flex flex-col gap-8 items-center">
              <motion.div className="w-full shadow-2xl lg:w-1/2" variants={variantsB} initial="variantA" animate="variantB" transition={{delay: 0.8, duration: 2, type: "spring"}}>
                <Link href={item.href} target="_blank"><Image src={item.mockup} alt={item.mockup} width={1000} height={800} className="w-full shadow-2xl" /></Link>                
              </motion.div>
            
              <div className="w-full">
                <h2 className="text-center text-xl font-cal py-8">Použité technológie</h2>
                <div className="flex items-center justify-center gap-12">
                  {item.technologies.map((technology) => {
                    return (
                      <motion.div key={technology.name} initial={{scale:1}} whileHover={{scale: 1.2}}>                
                        <Image src={technology.svgImage} width={technology.width} height={technology.height} alt={technology.name} title={technology.name}></Image>
                      </motion.div>
                    )
                  })}                
                </div>
              </div>
            </div>
          </div>
          </>
        );
       })}
    </div>
  )
}
