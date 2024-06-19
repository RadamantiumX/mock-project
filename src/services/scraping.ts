/* eslint-disable @typescript-eslint/no-explicit-any */
import type { PhubScrapingData } from "../types/phubScrapingData"


export const pornHubDataModels = async (page:number) => {
 const res = await fetch(`https://scraping-server.vercel.app/phub/models/${page}`)
 const data = await res.json() as PhubScrapingData
 return data 
}
