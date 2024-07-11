/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react"
import { pornHubPicsAlbums, pornHubAlbumContent } from "../services/scraping"


export const usePicsAlbums = (page: number, tag:string | null) => {
    const [album, setAlbum] = useState<any[]>([])
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [pages, setPages] = useState<any>()
  
    useEffect(()=>{
      pornHubPicsAlbums(page, tag)
        .then((data)=>{  
          
          setPages(data.pages)
          setAlbum(data.data)
        })
        .catch(err => {
          console.log(err)
        })
    },[tag])
  
    return { album, pages }
  }

  export const useAlbumContent = (tag:string | undefined, id:string | undefined) => {
     const [pics, setPics] = useState<any[]>([])
     const [title, setTitle] = useState<string>()
     useEffect(()=>{
      pornHubAlbumContent(tag, id)
       .then((data)=>{
         console.log(data.title)
         setTitle(data.title)
         setPics(data.photos)
       })
       .catch(error=>{
        console.error('Something went wrong')
        console.error(error.message)
       })
     },[tag, id])

    return {pics, title}
  }