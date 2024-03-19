import {  type APIEpornerResponse } from "../types/eporner"

// const configValue : string = (process.env.EPORNER_API_URL as string)

export const getLatestContent = async () => {
   
    const res = await fetch(`${import.meta.env.VITE_EPORNER_API_URL}api/v2/video/search/?query=popular&per_page=12&page=2&thumbsize=big&order=latest&gay=1&lq=1&format=json`)
    const {videos: data} = await res.json() as APIEpornerResponse
   
    return data

}

export const getRelatedVideos = async ( params: string ) => {
   
    const res = await fetch(`${import.meta.env.VITE_EPORNER_API_URL}api/v2/video/search/?query=${params}&per_page=7&page=2&thumbsize=big&order=latest&gay=1&lq=1&format=json`)
    const {videos: data} = await res.json() as APIEpornerResponse
    return data
  
}

// https://www.eporner.com/