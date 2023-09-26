import Link from 'next-intl/link';
import Image from "next/image"
import SK from "@/public/icons/locale/sk.png"
import EN from "@/public/icons/locale/us.png"

function Locales({paramSlug}) {  
  return (
    <div className="flex items-center justify-center gap-6">
        <Link href={paramSlug} locale='sk'><Image src={SK} width={25} height={25}/></Link>
        <Link href={paramSlug} locale="en"><Image src={EN} width={25} height={25}/></Link>
    </div>
  )
}

export default Locales