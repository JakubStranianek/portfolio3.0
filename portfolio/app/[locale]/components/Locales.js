"use client"

import Link from 'next-intl/link';
import Image from 'next/image';
import SK from "/public/icons/locale/sk.png"
import EN from "/public/icons/locale/us.png"
import { LanguageIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';

function Locales({paramSlug}) { 
  const [show, setShow] = useState(false)
  
  return (
    <div className='inline-block fixed'>
      <LanguageIcon width={25} height={25} className='text-zinc-400 hover:text-white transition-colors ease-in-out' onClick={() => {setShow(!show)}}/>
        <div className={show ? "inline-block mt-4 animate-fadeUpFast" : "hidden"}>
          <Link href={paramSlug} locale='sk'><div><Image src={SK} alt='sk' width={25} height={25} priority={true}/></div></Link>
          <Link href={paramSlug} locale="en"><div><Image src={EN} alt='en' width={25} height={25} priority={true} className='mt-2'/></div></Link>        
        </div>
    </div>
  )
}

export default Locales