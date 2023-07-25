import Link from "next/link";

const Navbar = () => {
    return ( 
        <div className="flex gap-6 text-zinc-400 font-sans">
            <Link href="/porfolio" className="hover:text-white">Portfolio</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
        </div>
     );
}
 
export default Navbar;