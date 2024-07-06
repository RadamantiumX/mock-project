/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react"
import { pornHubPicsAlbums } from "../services/scraping"


export const usePicsAlbums = (page: number, tag:string | null) => {
    const [pics, setPics] = useState<any[]>([])
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [pages, setPages] = useState<any>()
  
    useEffect(()=>{
      pornHubPicsAlbums(page, tag)
        .then((data)=>{  
          setPages(data.pages)
          setPics(data.data)
        })
        .catch(err => {
          console.log(err)
        })
    },[tag])
  
    return { pics, pages }
  }