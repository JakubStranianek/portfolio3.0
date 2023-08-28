import Link from "next/link";

const Navbar = () => {
    return ( 
        <div className="relative z-20 flex gap-6 text-zinc-400 font-sans">
            <Link href="/projekty" className="hover:text-white">Projekty</Link>
            <Link href="/kontakt" className="hover:text-white">Kontakt</Link>
        </div>
     );
}
 
export default Navbar;