import Image from "next/image"

const Hero: React.FC = () =>{
    return(
        <>
        <div className="hero w-full h-[100vh] flex bg-lightgray z-0 mt-[-5.5rem] mb-20 relative justify-center items-center">
            <div className="hero-hello">
                <h2 className="hello text-heading3 translate-x-[70%] duration-1000 cursor-zoom-in hover:translate-x-0 transition-all ease-in-out absolute right-0 bg-offblack font-bold text-white py-5 px-[31px] rounded-l-full hover:shadow-xl hover:shadow-gray">👋<span className=" ml-10 ">Hi I'm Amalia</span></h2>
             </div>

            <div className="slide-text text-headdisplay absolute bottom-0 mb-5 w-full translate-x-[-100%] whitespace-nowrap inline-block text-white hover:drop-shadow-2xl hover:shadow-black transition-all cursor-move hover:scale-105">
                <h1>Webflow Developer - UI/UX Designer - Webflow Developer - UI/UX Designer</h1>
            </div>
            <Image 
                src="/assets/hero-img.png"
                alt="Hero Image"
                width={0}
                height={0}
                layout='responsive'
                objectFit="cover"
                objectPosition="center"
                className="img-hero max-w-fit max-h-fit place-content-center align-middle bottom-0 absolute -z-10" />
        </div>
        </>
    )
}

export default Hero