/* eslint-disable @typescript-eslint/no-explicit-any */
import type { PhubScrapingData } from "../types/phubScrapingData"



export const pornHubDataModels = async (page:number) => {
 const res = await fetch(`https://scraping-server.vercel.app/phmongo/data/${page}`)
 const data = await res.json() as PhubScrapingData
 return data 
}

export const pornHubInfoModel = async (name:string | undefined) => {
    const res = await fetch(`https://scraping-server.vercel.app/phmongo/model/${name}`)
    const data = await res.json()
    return data
}

export const pornHubSearchModel = async (searchModel:string | null) => {
    const res = await fetch(`https://scraping-server.vercel.app/phmongo/search-models/${searchModel}`)
    const data = await res.json()
    return data
}

export const pornHubPicsAlbums = async (page:number, tag:string | null)=>{
  const res = await fetch(`https://scraping-server.vercel.app/phub/pics/${page}/${tag}`)
  const data = await res.json()
  return data
}