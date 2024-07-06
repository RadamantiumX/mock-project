/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, SetStateAction, useEffect } from "react";
import { getOrderVideos } from "../services/resources";
import type { Video } from "../types/eporner";

export const useActiveTab = () => {
    const [activeTab, setActiveTab] = useState(0);
  
      const handleTabClick = (index: SetStateAction<number>) => {
         setActiveTab(index);
      };
  
      return { activeTab, handleTabClick }
  }


  export const useOrderVideos = (param:string | undefined, page:number | null) => {
    const [orderVideos, setOrderVideos] = useState<Video[]>([])
    const [totalPages, setTotalPages] = useState<any>()
   useEffect(() => {
     getOrderVideos(page, param)
      .then((data)=>{
        setOrderVideos(data.videos)
        setTotalPages(data.total_pages)
      })
      .catch(error=>{
       console.error('Something was wrong')
       console.error(error.message)
      })
   }, [param, page])
 
   return { orderVideos, totalPages }
 }
   