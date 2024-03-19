import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Ghost } from "../icons/Ghost"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { getSource } from "../../redux/sourceSlice"

interface Props {
    keywords?: string
}

// Related Videos displayed
export const SideBarVideos:React.FC<Props> = ({ keywords }) => {

 const [loading, setLoading] = useState(true)
 // eslint-disable-next-line @typescript-eslint/no-unused-vars
 const [trimWord, setTrimWord] = useState<string[]>([])
 const [limited, setLimited] = useState<string[]>([])
  const lowerCase = keywords!.toLowerCase()

  const stringSplit = lowerCase.split(" ")
  
  const selection = stringSplit.filter((str) => str.length > 4 && str.length < 10)
 
  const dispatch = useAppDispatch()
  const source = useAppSelector(state => state.source.data)
  
  
  useEffect(() => {
  dispatch(getSource(selection[0]))
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
    <aside>
      <div className="flex flex-row gap-3">
        {/* Tags */}
        {
          limited?.map((str) => (
            <div className="border rounded-md bg-gray-600 px-1"><Link to={`/search/${str}`}>{str}</Link></div>
          ))
        }
        {/* Tags */}
        </div>
        <h3>Related Videos</h3>
        
        {loading ? <div>Cargando</div> : <div> {source?.length !== 0 ?<div>
            {source?.map((video,index) => (
                <article key={index}>
                    <Link className="gap-2" to={`/video/${video.id}/${video.keywords}`} target="_blank">
                       <img className="size-60 border-gray-600 rounded-md" src={video.default_thumb.src} alt={video.title} />
                       <h4 className="truncate">{video.title}</h4>
                    </Link>
                </article>
            ))}
        </div> : <div>
               <h3>We can't found related videos <Ghost/></h3>
               
            </div>}</div>}
    </aside>
  )
}

// Some example response: ', creampie, japanese, old man, blowjob, big tits, milf, Forbidden Care Suikawa Yuri 476'