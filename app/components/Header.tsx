import Link from "next/link"

const Header: React.FC = () =>{
    return(
        <main className="max-lg:hidden">
        <div className="navbar para-md w-full flex justify-between px-[80px] py-[31px] bg-transparent z-10 relative">
                <Link href="/">@Nur Rizki Amalia</Link>
                <ul className="nav-links flex gap-10">
                    <li className="hover:scale-105"><Link href="/#about">About</Link> </li>
                    <li className="hover:scale-105"><Link href="/#project">Work</Link> </li>
                    <li className="hover:scale-105"><Link href="/contact">Contact</Link> </li>
                </ul>
            </div>
        </main>
    )
}

export default Header