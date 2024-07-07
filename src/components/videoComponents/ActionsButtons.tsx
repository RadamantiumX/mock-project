/* eslint-disable @typescript-eslint/no-explicit-any */
import { Like } from "../icons/Like";
import { Response } from "../icons/Response";
import { Trash } from "../icons/Trash";
import { ResponsePost } from "../icons/ResponsePost";
import { useDeletePost, useSocialLikeEvent, useCurrentLikePost } from "../../customsHooks/videoHooks";


interface Props {
    id: any
    handleFormResponse: any
    currentUser: any
    responses: any
    showArticle: any
    setShowArticle: any 
}

export const ActionsButtons:React.FC<Props> = ({ id ,handleFormResponse, currentUser,responses, showArticle, setShowArticle}) => {
   const table = 'post'
   const { handlePostDelete } = useDeletePost(id, table)
   const { handleLike,fillLike, setFillLike } = useSocialLikeEvent(undefined,id,'post',table)
   const { total } = useCurrentLikePost(setFillLike, id)
   
  return (
    <>
       <button onClick={handleFormResponse} className="inline-flex items-center px-1 pt-2 ml-1 flex-column" aria-label="button response" title="Response"> 
           <Response/>
          </button>
          <button onClick={handleLike} className="inline-flex items-center px-1 -ml-1 flex-column" aria-label="button like" title={fillLike==='white'?`You Liked this post`: 'Like this post'}>
            <Like fill={fillLike}/>
          </button> 
          {total}
          {currentUser &&
             <button onClick={handlePostDelete} className="inline-flex items-center px-1 -ml-1 flex-column" aria-label="button trash" title="Delete this post">
            <Trash/>
          </button>}
          {responses.length !==0 &&<button onClick={()=>{ !showArticle ? setShowArticle(true) : setShowArticle(false);  }} className="inline-flex items-center px-1 -ml-1 flex-column" aria-label="button like" title="Total Responses">
            <div className="flex flex-row"><ResponsePost/>{responses.length}</div>
          </button>}
    </>
  )
}
