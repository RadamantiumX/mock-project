import { ThumbUp } from "../icons/ThumbUp"
import { ThumbDown } from "../icons/ThumbDown"
import { useState, useEffect } from "react"
import { useStateContext } from "../../contexts/ContextProvider"
import axiosClientAuth from "../../services/axios-client-auth"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { getLikesSource } from "../../redux/likeSources/likesSlice"

interface Props {
    videoId?: string | undefined
}

export const LikeVideo:React.FC<Props> = ({videoId}) => {
    const data = useAppSelector(state => state.likes.data)
    
    const [fillLike, setFillLike] = useState<string>('none')
    const [fillDislike, setFillDislike] = useState<string>('none')
    const like = true
    const dislike = false
    const { token, setNotification } = useStateContext()
    
    const dispatch = useAppDispatch() 
    
    const handleLike = async () => {
        if (fillLike === 'none'){
            setFillLike('green')
            setFillDislike('none')
            
            await axiosClientAuth.post('/like/add',{token, videoId, like})
             .then(({data})=>{
               setNotification(data.message)
             })
             .catch(err=>{
            const res = err.response
            console.log(res)
            })
            }else{
            setFillLike('none')
            await axiosClientAuth.post('/like/del',{token, videoId})
            .then(({data})=>{
           console.log(data)
            })
            .catch(err=>{
           const res = err.response
           console.log(res)
           })
            }     
    } 

 const handleDislike = async () => {
      if (fillDislike === 'none'){
        setFillDislike('red')
        setFillLike('none')
        const payload = {
            token: token,
            videoId: videoId,
            like: dislike
        }
        await axiosClientAuth.post('/like/add',payload)
        .then(({data})=>{
          setNotification(data.message)
        })
        .catch(err=>{
       const res = err.response
       console.log(res)
       })
      }else{
        setFillDislike('none')
        await axiosClientAuth.post('/like/del',{token, videoId})
        .then(({data})=>{
       console.log(data)
        })
        .catch(err=>{
       const res = err.response
       console.log(res)
       })
      }
 }
 useEffect(()  =>{
   if(token){
      const payload = {token: token, videoId: videoId}
      dispatch(getLikesSource({payload}))
      switch(data){
        case 200:
          setFillLike('green')
        break
        case 204:
          setFillDislike('red')
        break  
        default:
          setFillLike('none')
          setFillDislike('none')    
      }
   }
   
 },[token, videoId, fillLike, fillDislike ])
  

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
