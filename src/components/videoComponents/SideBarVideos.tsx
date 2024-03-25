import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Ghost } from "../icons/Ghost"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { getSource } from "../../redux/sourceSlice"

interface Props {
    keywords?: string
}

export const SideBarVideos:React.FC<Props> = ({ keywords }) => {
 const [loading, setLoading] = useState(true)
 // eslint-disable-next-line @typescript-eslint/no-unused-vars
 const [trimWord, setTrimWord] = useState<string[]>([])
 const [limited, setLimited] = useState<string[]>([])
 const lowerCase = keywords!.toLowerCase()

  const stringSplit = lowerCase.split(" ")
  
  // Defult number to set more related results
  const DEFAULT_NUM = 3 
   
  // Filter data to avoid empty results
  const selection = stringSplit.filter((str) => str.length > 4 && str.length < 10)
 
  const dispatch = useAppDispatch()
  const source = useAppSelector(state => state.source.data)
  
  
  useEffect(() => {
  dispatch(getSource(selection[0].concat(" ", DEFAULT_NUM.toString())))
  if (source !== null) setLoading(false)

  selection.forEach(sel =>{
    if (sel.includes(",")) {
       const trimmed:string = sel.substring(0,sel.length -1)
       trimWord.push(trimmed)
    }
  })
 setLimited(trimWord.slice(0,10))
},[])

    return (
        <section className="ml-10 mr-10 mb-10">
            <div className="flex flex-wrap justify-center md:justify-start">
                {limited?.map((str, index) => (
                    <div key={index} className="mr-2 mb-8 md:mb-6 mt-3">
                        <div className=" rounded-md bg-pink-600 px-2 py-1 my-[-1.8rem] md:my-[-2.3rem] hover:bg-pink-700 transition duration-300 ease-in-out">
                            <Link to={`/search/${str}`} className="text-white text-xs md:text-sm">{str}</Link>
                        </div>
                    </div>
                ))}
            </div>
            <a href="#commentsContainer" className="rounded-lg px-6 py-2 bg-gray-600 text-gray-100 hover:bg-gray-700 duration-300">
                <i className="fa-regular fa-comment mr-2"></i>
                Comment <span className="font-bold">19</span>
            </a>

            <h3 style={{fontSize:"1.4rem", color:"#DBDBDB"}} className="text-lg font-semibold pb-2   mb-4 mt-6">Related Videos</h3>
        {loading ? (
            <div>Cargando</div>
        ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {source?.length !== 0 ? (
                    source?.map((video, index) => (
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