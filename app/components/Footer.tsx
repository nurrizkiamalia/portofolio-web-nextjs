import Link from "next/link"

const Footer: React.FC = () =>{
    return(
        <main className="w-full">
        <div className="py-[33px] px-20 text-white bg-offblack">
            <div className="footer-container-social flex justify-between">
                <p className="text-paraMd">Build with 💖 by Brightscout & Ayush</p>
                <ul className="footer-links text-paraMd flex gap-8">
                    <li><Link href="#" >LinkedIn</Link></li>
                    <li><Link href="#" >Twitter</Link></li>
                    <li><Link href="#" >Instagram</Link></li>
                    <li><Link href="#" >Webflow</Link></li>
                </ul>
            </div>
        </div>
        </main>
    )
}

export default Footer