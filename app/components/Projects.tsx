import projectdata from "@/data/projectdata"
import Image from "next/image"

const Projects: React.FC = () =>{
    const projectCard = projectdata.map(item => {
        return(
          <ProjectList
              key={item.id}
              item={item}
            />
        )
    })
    
    return(
        <>
            <div className="list-project my-20" id="project">
                <div className="project-container ">
                    <div className="carousel-primary flex flex-col">
                        <div className="project-scroll h-[45vh] relative overflow-x-scroll">
                            <div className="flex gap-5 whitespace-nowrap absolute">
                                {projectCard}
                            </div>
                        </div>
                        
                        <div className="project-scroll h-[45vh] relative overflow-x-scroll">
                            <div className="flex gap-5 whitespace-nowrap absolute">
                                {projectCard}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function ProjectList(props: any){
    return(
         <div className=" cursor-grab my-5 project-box bg-lightgray p-5 whitespace-nowrap flex flex-row w-[389px] relative items-center justify-center hover:scale-105 hover:shadow-lg hover:shadow-gray transition-all ease-in-out duration-1000 ">
            <button className="btn-project hidden absolute bg-offwhite text-paraSm py-2 px-3 rounded-xl transition-all ease-in-out hover:bg-black hover:text-white">Visit the website <i className="ri-arrow-right-up-line"></i></button>
                <Image src={`/assets/${props.item.Image}`}  
                alt="project" 
                width={0}
                height={0}
                layout='responsive'
                objectFit="cover"
                objectPosition="center"
                className=" w-full h-full" />
        </div>
    )
}
export default Projects