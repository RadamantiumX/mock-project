/* eslint-disable @typescript-eslint/no-explicit-any */
import type { PhubScrapingData } from "../types/phubScrapingData"



export const pornHubDataModels = async (page:number) => {
 const res = await fetch(`https://scraping-server.vercel.app/phub/models/${page}`)
 const data = await res.json() as PhubScrapingData
 return data 
}

export const pornHubInfoModel = async (name:string | undefined) => {
    const res = await fetch(`https://scraping-server.vercel.app/phub/model-info/${name}`)
    const data = await res.json()
    return data
}

export const pornHubSearchModel = async (searchModel:string | null) => {
    const res = await fetch(`https://scraping-server.vercel.app/phub/models-filter/${searchModel}`)
    const {models: data} = await res.json()
    return data
}