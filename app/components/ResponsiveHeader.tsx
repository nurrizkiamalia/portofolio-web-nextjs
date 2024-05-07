"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const ResponsiveHeader: React.FC = () =>{
    const [menuOpen, setMenuOpen] = useState(false)
    const [navHidden, setNavHidden] = useState(false)

    const handleScroll = () =>{
        const scrollPosition = window.scrollY;

        if(scrollPosition > 100){
            setNavHidden(true)
        } else {
            setNavHidden(false)
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    })

    const handleMenuOpen = () => {
        setMenuOpen(true)
    }

    const handleMenuClose = () => {
        setMenuOpen(false)
    }

    return(
        <>
            {navHidden &&
            <div className="responsive-nav z-50 fixed right-0 top-0 " onScroll={handleScroll}>
            <div className="menu-toggle p-10 right-0 fixed">
            <button className="btn-open btn-recent  bg-offblack hover:bg-offwhite border-[3px] border-black hover:bg-transparent hover:text-offblack p-7 rounded-full cursor-pointer px-8 hover:shadow-lg hover:shadow-gray" onClick={handleMenuOpen}>
                <i className="fa-solid fa-grip-lines text-offwhite "></i>
            </button>
            </div>

            {menuOpen && (
                <div className="menu-open p-[60px] pl-[97px] z-99 h-svh right-0 w-[50vw] bg-offblack text-offwhite flex flex-col items-start fixed justify-between ">
                    <button className="btn-close btn-recent self-end border-2 border-offwhite px-8 py-7 rounded-full cursor-pointer hover:bg-offwhite hover:shadow-lg hover:shadow-gray " onClick={handleMenuClose}><i className="ri-close-large-line text-lg"></i></button>
                    <div className="menu-nav">
                        <ul className="nav-links text-heading2 flex flex-col -mt-10 ">
                            <li className=" hover:scale-105 transition-all ease-in-out"><Link href="/" className="text-offwhite">Home</Link> </li>
                            <li className="hover:scale-105 transition-all ease-in-out"><Link href="/#about" className="text-offwhite">About</Link> </li>
                            <li className="hover:scale-105 transition-all ease-in-out"><Link href="/#project" className="text-offwhite">Work</Link> </li>
                            <li className="hover:scale-105 transition-all ease-in-out"><Link href="/contact" className="text-offwhite">Contact</Link> </li>
                        </ul>
                    </div>
                    <div className="menu-contact">
                        <ul className="footer-links  flex gap-5 text-paraMd">
                            <li><a href="#" className="text-offwhite hover:underline">LinkedIn</a></li>
                            <li><a href="#" className="text-offwhite hover:underline">Twitter</a></li>
                            <li><a href="#" className="text-offwhite hover:underline">Instagram</a></li>
                            <li><a href="#" className="text-offwhite hover:underline">Webflow</a></li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
        }
        </>
    )
}

export default ResponsiveHeader