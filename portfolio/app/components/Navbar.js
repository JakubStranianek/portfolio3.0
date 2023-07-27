import Link from "next/link";

const Navbar = () => {
    return ( 
        <div className="relative z-20 flex gap-6 text-zinc-400 font-sans">
            <Link href="/projects" className="hover:text-white">Projects</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
        </div>
     );
}
 
export default Navbar;