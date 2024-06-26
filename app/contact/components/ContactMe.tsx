import Link from "next/link"
import Image from "next/image"

const ContactMe: React.FC = () => {
    return(
        <>
        <div className="form-box flex flex-col w-[50%]">
            <Image src="/assets/hero-img.png" 
            alt="image" 
            width={297}
            height={297}
            className=" mb-14 w-[297px] h-[297px] rounded-full object-cover object-top " />
            <div className="contact-detail flex flex-col mb-10">
                <Link href="" className="text-paraMd">Contact Details</Link>
                <Link href="http://mailto:rizkiamel9@gmail.com" className="text-paraLg">rizkiamel9@gmail.com</Link>
                <Link href="http://wa.me/+6289643168821" className="text-paraLg">
                +91 8651447521
                </Link>
            </div>

            <div className="contact-detail flex flex-col">
                <p className="text-paraMd">social</p>
                <Link href="" className="text-paraLg">LinkedIn</Link>
                <Link href="" className="text-paraLg">
                Instagram
                </Link>
                <Link href="" className="text-paraLg">
                Twitter
                </Link>
                <Link href="" className="text-paraLg">
                Webflow
                </Link>
                <Link href="" className="text-paraLg">
                Figma
                </Link>
            </div>
        </div>
        </>
    )
}

export default ContactMe