import { type PhubScrapingData } from "../types/phubScrapingData"

export const pornHub = async () => {
  const res = await fetch('https://scraping-server.vercel.app/phub/data') 
  
  const {models:data} = await res.json() as PhubScrapingData 

  return data.data
}

export const pornHubData = fetch("https://scraping-server.vercel.app/phub/data")
   .then((response) => response.json())
   .then((data)=> {
     console.log(data)
     return data
   })