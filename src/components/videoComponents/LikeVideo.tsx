import { ThumbUp } from "../icons/ThumbUp"
import { ThumbDown } from "../icons/ThumbDown"
import { useState, useEffect } from "react"
import { useStateContext } from "../../contexts/ContextProvider"
import axiosClientAuth from "../../services/axios-client-auth"

interface Props {
    videoId?: string | undefined
}

export const LikeVideo:React.FC<Props> = ({videoId}) => {
    const [fillLike, setFillLike] = useState<string>('none')
    const [fillDislike, setFillDislike] = useState<string>('none')
    const [like, setLike] = useState<number>(0)
    const { token } = useStateContext()
     
    const handleLike = ():void => {
        if (fillLike === 'none'){
            setFillLike('green')
            setFillDislike('none')
            setLike(1)
            const payload = {
                token: token,
                videoId: videoId,
                like: like
            }
            axiosClientAuth.post('/like/add',payload)
             .then(({data})=>{
            console.log(data)
             })
             .catch(err=>{
            const res = err.response
            console.log(res)
            })
        }else{
            setFillLike('none')
        }

        
    } 
 const handleDislike = ():void => {
      if (fillDislike === 'none'){
        setFillDislike('red')
        setFillLike('none')
      }else{
        setFillDislike('none')
      }
 }
 useEffect(()=>{
  console.log(token)
 },[token])
  

  return (
      <>
        <div className="flex flex-row gap-2">
          <button onClick={handleLike}>
               <ThumbUp fill={fillLike}/>
            </button> 
            <button onClick={handleDislike}>
                <ThumbDown fill={fillDislike}/>
            </button>
           
        </div>
      </>
  )
}
