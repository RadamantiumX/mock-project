/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom"
import { Ghost } from "../icons/Ghost"
import { Tags } from "./Tags"
import { useRelatedVideos, useKeywords, useTrimmedTags } from "../../customsHooks/customsHooks"
interface Props {
    keywords?: string
}

export const SideBarVideos:React.FC<Props> = ({ keywords }) => {
const { selection } = useKeywords(keywords) 
const { videos, loading } = useRelatedVideos(selection[0])
const { limited } = useTrimmedTags(selection)
 
    return (
        <section className="mr-3 ml-3 lg:mr-10 lg:ml-10 mb-10">
           <Tags limited={limited} />
            <h3 style={{fontSize:"1.4rem", color:"#DBDBDB"}} className="text-lg font-semibold pb-2   mb-4 mt-6">Related Videos</h3>
        {loading ? (
            <div>Cargando</div>
        ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {videos.length !== 0 ? (
                    videos.map((video:any, index:any) => (
                        <article key={index} className="col-span-1">
                            <Link to={`/video/${video.id}/${video.keywords}/${video.title}/${video.views}`} target="_blank">
                                <img className="w-full rounded-md mb-2" src={video.default_thumb.src} alt={video.title} />
                                <h4 className="truncate">{video.title}</h4>
                            </Link>
                        </article>
                    ))
                ) : (
                    <div className="col-span-6">
                        <h3 className="text-lg">We can't found related videos <Ghost/></h3>
                    </div>
                )}
            </div>
        )}
    </section>
    
    )
 }





// Some example response: ', creampie, japanese, old man, blowjob, big tits, milf, Forbidden Care Suikawa Yuri 476'