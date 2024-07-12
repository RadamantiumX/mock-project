import { useState, useEffect } from "react"
import { useStateContext } from "../contexts/ContextProvider"
import { type FavVideosProfile } from "../types/eporner"
import axiosClientAuth from "../services/axios-client-auth"
import { fetchTest } from "../services/resources"


export const useFavVideos = () => {
    const [request] = useState<FavVideosProfile[]>([])
    const { token } = useStateContext()

    useEffect(()=>{
        axiosClientAuth.post('/social/fav-videos', {token})
     .then(({data})=>{
  
      data.results.map((e:string)=>{
        fetchTest(e)
          .then((res)=>{
              request.push(res)
          })
          .catch(error=>{
            console.error(error)
          })
      })
          
     })
     .catch(error=>{
       console.error(error.message)
     })

    },[])

    return { request }
}

export const useDelFav = (videoId:string) => {
    const { setNotification, token } = useStateContext()

    const handleDeleteFav = () => {
        axiosClientAuth.post(`/social/delfav`, {videoId, token})
         .then(({data})=>{
            console.log(data)
         })
         .catch(error=>{
            console.error(error.message)
         })
    }

    return {handleDeleteFav}
}