import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Ghost } from "../icons/Ghost"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { getEpornerSource } from "../../redux/epornerSources/sourceSlice"
import { Tags } from "./Tags"
import { Hearth } from "../icons/Hearth"
import { Share } from "../icons/Share"

interface Props {
    keywords?: string
}

export const SideBarVideos:React.FC<Props> = ({ keywords }) => {
 const [loading, setLoading] = useState(true)
 // eslint-disable-next-line @typescript-eslint/no-unused-vars
 // const [trimWord, setTrimWord] = useState<string[]>([])
 const trimWord:string[] = []
 const [limited, setLimited] = useState<string[]>([]) // Tags State
 const lowerCase = keywords!.toLowerCase()

  const stringSplit = lowerCase.split(" ")
  
  // Defult number to set more related results
  const DEFAULT_NUM = 3 
   
  // Filter data to avoid empty results
  const selection = stringSplit.filter((str) => str.length > 4 && str.length < 10)
 
  const dispatch = useAppDispatch()
  const eporner = useAppSelector(state => state.source.data)
  
  
  useEffect(() => {
  dispatch(getEpornerSource(selection[0].concat(" ", DEFAULT_NUM.toString())))
  if (eporner !== null) setLoading(false)

  // Remove words with coma ","  
  selection.forEach(sel =>{
    if (sel.includes(",")) {
       const trimmed:string = sel.substring(0,sel.length -1)
       trimWord.push(trimmed)
    }
  })
 setLimited(trimWord.slice(0,10)) // Set the tag state
},[])

    return (
        <section className="ml-10 mr-10 mb-10">
           <Tags limited={limited} />
           <div className="flex flex-row gap-2">
            <a href="#commentsContainer" className="rounded-lg px-6 py-2 bg-gray-600 text-gray-100 hover:bg-gray-700 duration-300">
                <i className="fa-regular fa-comment mr-2"></i>
                Comment <span className="font-bold">19</span>
            </a>
            <button className="border rounded-md flex flex-row p-2 gap-1"><Hearth/>Add favorites</button>
            <button className="border rounded-md flex flex-row p-2 gap-1"><Share/>Share video</button>
            </div>
            <h3 style={{fontSize:"1.4rem", color:"#DBDBDB"}} className="text-lg font-semibold pb-2   mb-4 mt-6">Related Videos</h3>
        {loading ? (
            <div>Cargando</div>
        ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {eporner?.length !== 0 ? (
                    eporner?.map((video, index) => (
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