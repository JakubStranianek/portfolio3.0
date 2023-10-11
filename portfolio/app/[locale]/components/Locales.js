"use client"

import Link from 'next-intl/link';
import Image from 'next/image';
import SK from "/public/icons/locale/sk.png"
import EN from "/public/icons/locale/us.png"
import { motion } from 'framer-motion';

function Locales({paramSlug}) {  
  return (
    <div className="flex items-center justify-center gap-6">
        <Link href={paramSlug} locale='sk'><motion.div initial={{scale:1}} whileHover={{scale: 1.2}}><Image src={SK} alt='sk' width={25} height={25} priority={true}/></motion.div></Link>
        <Link href={paramSlug} locale="en"><motion.div initial={{scale:1}} whileHover={{scale: 1.2}}><Image src={EN} alt='en' width={25} height={25} priority={true}/></motion.div></Link>        
    </div>
  )
}

export default Locales