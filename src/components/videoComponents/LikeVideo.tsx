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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const data = useAppSelector(state => state.likes.data)
    
    const [fillLike, setFillLike] = useState('none')
    const [fillDislike, setFillDislike] = useState('none')
    const [count, setCount] = useState(0)
    const [ average, setAverage ] = useState(0)
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
 useEffect(()=>{
  // When the state is Fullfilled, we set the like or dislike if the user choose one before
   if(token){
      const payload = {token: token, videoId: videoId}
      dispatch(getLikesSource({payload}))
      .unwrap()
      .then((response)=>{
        if(response.like){
          setFillLike('green')
          setCount(response.count_likes)
          if(response.count_likes> 0){
            setAverage(response.count_likes / response.count_total * 100)
          }    
        }else{
          setFillDislike('red')
        }
        
      })
      .catch(err=>{
        const res = err.response
        console.log(res)
      })
      
   }
   
 },[token, videoId])
  

  return (
      <div className="flex flex-col">
        <div className="flex flex-row gap-2">
          <button onClick={handleLike}>
               <ThumbUp fill={fillLike}/> 
               
            </button> 
            <button onClick={handleDislike}>
                <ThumbDown fill={fillDislike}/>
            </button>
           
        </div>
        {count > 0 &&<div>Total: {count}</div>} 
        {average > 0 && <div>{average} %</div>}
      </div>
  )
}
