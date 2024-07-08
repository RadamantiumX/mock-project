import { ThumbUp } from "../icons/ThumbUp"
import { ThumbDown } from "../icons/ThumbDown"
import { useSocialLikeEvent, useSocialLike } from "../../customsHooks/videoHooks"

interface Props {
    videoId: string | undefined
}

export const LikeVideo:React.FC<Props> = ({videoId}) => { 
    const path = 'video'
    const { handleLike, handleDislike, fillLike, fillDislike, setFillLike, setFillDislike } = useSocialLikeEvent(videoId,undefined,path)
    const { count, color, average } = useSocialLike(videoId, setFillLike, setFillDislike)
   
  return (
      <div className="flex">
        <div className="flex flex-row gap-2">
          <button onClick={handleLike}>
               <ThumbUp fill={fillLike}/> 
               
            </button> 
            <button onClick={handleDislike}>
                <ThumbDown fill={fillDislike}/>
            </button>
           
        </div>
        <div className="flex flex-row gap-x-2 ml-2">
        <div className="hidden sm:block">{count > 0 ? <div>{count} Votes</div> : <div>0 Votes</div>}</div>
        <div className="border-l border-gray-300 h-6 mx-2"></div>
        {average > 0 ? <div className={`text-${color}-500`}>{average} %</div> : <div className="text-pink-500">0 %</div>}
        </div>
      </div>
  )
}
