/* eslint-disable @typescript-eslint/no-explicit-any */
import {  type APIEpornerResponse, type FavVideosProfile } from "../types/eporner"


// const configValue : string = (process.env.EPORNER_API_URL as string)

// Eporner

export const getLatestContent = async ( payload: number) => {
    const res = await fetch(`${import.meta.env.VITE_EPORNER_API_URL}api/v2/video/search/?page=${payload}&order=latest&gay=0`)
    const data = await res.json() as APIEpornerResponse
    return data  
}

// This function needs separate two values to modify the API response
export const getRelatedVideos = async ( payload:string) => {
    const res = await fetch(`${import.meta.env.VITE_EPORNER_API_URL}api/v2/video/search/?query=${payload}&per_page=10&order=latest`)
    const data = await res.json() as APIEpornerResponse
    return data
  
}

export const getSearchContent = async ( query:string | null, page:number | null) => {
    const res = await fetch(`${import.meta.env.VITE_EPORNER_API_URL}api/v2/video/search/?query=${query}&page=${page === null ? 1 : page}&order=latest&gay=0`)
    const data = await res.json() as APIEpornerResponse
    return data  
}

export const getOrderVideos = async (page:number | null, order:string | undefined) => {
    
    const res = await fetch(`${import.meta.env.VITE_EPORNER_API_URL}api/v2/video/search/?page=${page}&order=${order}`)
    const data = await res.json() as APIEpornerResponse
    return data
}


// https://www.eporner.com/


// RedTube Videos
export const getModelVideos = async (name:string | undefined) => {
    const res = await fetch(`${import.meta.env.VITE_SCRAPPING_DATA_URL}/rtube/model/${name}`)
    const data = await res.json()
    return data
}


export const getFavVideos = async ([resultsArray]:string[]) => {
    const results:FavVideosProfile[] = [] 
    for(let i = 0; i < resultsArray.length; i++){
        const response = await fetch(`https://www.eporner.com/api/v2/video/id/?id=${resultsArray[i]}`)
        const data = await response.json() as FavVideosProfile
        console.log(data)
       // results = [data,...results]

      results.push(data)
    }
    console.log(results)
    return results
  }