'use client';

import Image from "next/image";
import { useRouter } from "next/navigation"

const FooterBanner: React.FC = () =>{
    const router = useRouter()
    return(
        <>
            <div className="footer-container flex justify-between items-center bg-offblack p-20">
                <div className="footer-text flex flex-col text-white ">
                    <h2 className="text-heading2">Have something in mind?</h2>
                    <h2 className="text-heading2 with-pic flex items-center gap-3">
                        <Image 
                        src="assets/hero-img.png" 
                        alt="person" 
                        className="footer-img w-20 h-20 rounded-full object-cover object-top bg-lightgray outline-none  border-none"/>let's build it together.</h2>
                </div>

                <button className="py-5 px-12 rounded-full footer-btn text-paraMd bg-offwhite border-transparent border-[1px] hover:bg-offblack hover:border-white hover:text-offwhite" onClick={()=> router.push('/contact')}>Get in touch</button>
            </div>
        </>
    )
}

export default FooterBanner