"use client"

import Link from 'next-intl/link';
import Image from 'next/image';
import SK from "/public/icons/locale/sk.png"
import EN from "/public/icons/locale/us.png"

function Locales({paramSlug}) {  
  return (
    <div className="flex items-center justify-center gap-6">
        <Link href={paramSlug} locale='sk'><div><Image src={SK} alt='sk' width={25} height={25} priority={true}/></div></Link>
        <Link href={paramSlug} locale="en"><div><Image src={EN} alt='en' width={25} height={25} priority={true}/></div></Link>        
    </div>
  )
}

export default Locales