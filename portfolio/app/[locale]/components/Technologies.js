"use client"
import Image from "next/image"
import { motion } from "framer-motion"

function Technologies({sendData}) {
  return (
    <div className="w-full">
                <h2 className="text-center text-xl font-cal py-8">Použité technológie</h2>
                <div className="flex items-center justify-center gap-12">
                  {sendData.technologies.map((technology) => {
                    return (
                      <motion.div key={technology.name} initial={{scale:1}} whileHover={{scale: 1.2}}>                
                        <Image src={technology.svgImage} width={technology.width} height={technology.height} alt={technology.name} title={technology.name}></Image>                                                
                      </motion.div>
                    )
                  })}                
                </div>
              </div>
  )
}

export default Technologies