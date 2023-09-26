import Link from "next/link";
import {useTranslations} from 'next-intl';

const Navbar = () => {
    const t = useTranslations('menu')
    return ( 
        <div className="relative z-20 flex gap-6 text-zinc-400 font-sans">
            <Link href="/projekty" className="hover:text-white">{t('portfolio')}</Link>
            <Link href="/kontakt" className="hover:text-white">{t('contact')}</Link>
        </div>
     );
}
 
export default Navbar;