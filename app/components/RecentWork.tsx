'use client';

import recentworkdata from "@/data/recentworkdata"
import Link from "next/link";
import { useRouter } from "next/navigation";

const RecentWork: React.FC = () =>{

    const router = useRouter()
    
    return(
        <main className="m-20">
            <div className="about grid grid-cols-3 " id="work">
                <h3 className="text-heading3 col-span-1 font-semibold">Recent Work</h3>
                <div className="recent-work-detail flex flex-col w-full col-start-2 col-span-2 justify-center items-center">
                {recentworkdata.map((item) => {
                    return (
                    <div className="recent-work-list w-full border-b-2 last:border-none pb-8 border-lightgray pt-4 first:pt-0 ">
                        <div className="flex justify-between items-center ">
                            <div className="recent-work-link">
                                <Link href={`http://${item.projectUrl}`} className="text-heading2 cursor-alias font-normal font-inter">{item.projectUrl}</Link>
                                <p className="text-paraMd">{item.title}</p>
                            </div>
                            
                            <button className="btn-recent rounded-full py-4 px-5 border-[1px] border-offblack hover:bg-offblack hover:text-offwhite hover:shadow-lg hover:shadow-gray" onClick={() => router.push(`http://${item.projectUrl}`)}><i className="ri-arrow-right-up-line"></i></button>
                        </div>
                    </div>
                    
                    );
                })}
                </div>
            </div>
        </main>
    )
}

export default RecentWork