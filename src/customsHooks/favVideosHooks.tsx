import { useState, useEffect } from "react"
import { useStateContext } from "../contexts/ContextProvider"
import { type FavVideosProfile } from "../types/eporner"
import axiosClientAuth from "../services/axios-client-auth"
import { getFavVideos } from "../services/resources"
import { useNavigate } from "react-router-dom"


export const useFavVideos = () => {
    const [request, setRequest] = useState<FavVideosProfile[]>([])
    const [timestamp, setTimestamp] = useState<string[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [noFavs, setNoFavs] = useState(false)
    const { token } = useStateContext()

    useEffect(()=>{
        axiosClientAuth.post('/social/fav-videos', {token})
     .then(({data})=>{
      setTimestamp(data.timestamp)
      getFavVideos([data.results])
       .then((data)=>{
        if(data.length !== 0){
          console.log(data[0].data)
          setRequest(data)
          setIsLoading(false)
        }else{
          setIsLoading(false)
          setNoFavs(true) 
        }  
        
        
       })
       .catch(error=>{
        console.error('Something went wrong!')
        console.error(error.message)
       })
          
     })
     .catch(error=>{
       console.error(error.message)
     })

    },[])
    
    return { request, isLoading, noFavs, timestamp }
}

export const useDelFav = (videoId:string) => {
    const { setNotification, token } = useStateContext()
    const navigate = useNavigate()

    const handleDeleteFav = () => {
        axiosClientAuth.post(`/social/delfav`, {videoId, token})
         .then(({data})=>{
            console.log(data)
            setNotification(data.message)
            setTimeout(()=>{
                navigate(0)
            },2000)
         })
         .catch(error=>{
            console.error(error.message)
         })
    }

    return {handleDeleteFav}
}