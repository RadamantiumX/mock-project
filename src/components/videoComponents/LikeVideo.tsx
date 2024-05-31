import { ThumbUp } from "../icons/ThumbUp"
import { ThumbDown } from "../icons/ThumbDown"
import { useState, useEffect } from "react"
import { useStateContext } from "../../contexts/ContextProvider"
import axiosClientAuth from "../../services/axios-client-auth"
import { useAppDispatch } from "../../redux/hooks"
import { getLikesSource } from "../../redux/likeSources/likesSlice"

interface Props {
    videoId?: string | undefined
}

export const LikeVideo:React.FC<Props> = ({videoId}) => { 
    const [fillLike, setFillLike] = useState('none')
    const [fillDislike, setFillDislike] = useState('none')
    const [color, setColor] = useState('')
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

   if(average < 49) 
    {
       setColor('green')
       console.log(average)

     }else{
       setColor('red')
      }
          
 },[token, videoId, average, color])


  

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
        {count > 0 ?<div>Total: {count} Votes</div>: <div>Total: 0 Votes</div>} 
        |
        {average > 0 ? <div className={`text-${color}-500`}>{average} %</div> : <div className="text-yellow-500">0 %</div>}
        </div>
      </div>
  )
}
