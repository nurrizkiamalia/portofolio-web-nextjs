import testimonialdata from "@/data/testimonialdata"

const Testimonial: React.FC = () =>{
    return(
        <main className="m-20">
        <div className="recent-work container grid grid-cols-3">
            <h3 className="text-heading3 font-semibold col-span-1">Testimonial</h3>
                <div className="recent-work-detail col-start-2 col-span-2 ">
                {testimonialdata.map(item => {
                    return(
                        <div className="first:mb-16 recent-review flex flex-col gap-5">
                        <p className="text-paraLg text-gray">{item.review}</p>
                        <div className="person-info flex items-center gap-3">
                            <img src={`assets/${item.image}`} />
                            <div className="info-detail flex flex-col">
                                <p className="text-paraMd font-medium">{item.name} </p>
                                <p className="text-paraXs">{item.role} </p>
                            </div>
                        </div>
                    </div>
                    )
                })}
                
            </div>    
        </div>
        </main>
    )
}

export default Testimonial