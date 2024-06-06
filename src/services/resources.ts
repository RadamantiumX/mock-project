/* eslint-disable @typescript-eslint/no-explicit-any */
import {  type APIEpornerResponse } from "../types/eporner"
import { type RedTubeAPIData } from "../types/redtube"

// const configValue : string = (process.env.EPORNER_API_URL as string)

// Eporner

export const getLatestContent = async ( payload: number ) => {
    // Traer un numero de los parametros, si es menor o igual a 1, aumentamos "binary", sino, aumentamos "qty"
    let qty = 12
    let binary = 0
    if (payload <= 1){
        binary = payload
    }else{
        qty = qty + payload
    }
    const res = await fetch(`${import.meta.env.VITE_EPORNER_API_URL}api/v2/video/search/?per_page=${qty.toString()}&page=1&thumbsize=big&order=latest&gay=${binary.toString()}&lq=1&format=json`)
    const {videos: data} = await res.json() as APIEpornerResponse
   
    return data

}

// This function needs separate two values to modify the API response
export const getRelatedVideos = async ( payload:string) => {
    let qty = 7 // Default value to set quantity of results by request
    const paramsArray = payload.split(' ') // Splits params in 2 elements
    qty = qty + parseInt(paramsArray[1]) // Seting new value
    const res = await fetch(`${import.meta.env.VITE_EPORNER_API_URL}api/v2/video/search/?query=${paramsArray[0]}&per_page=${qty.toString()}&page=2&thumbsize=big&order=latest&gay=1&lq=1&format=json`)
    const {videos: data} = await res.json() as APIEpornerResponse
    return data
  
}

export const getOrderVideos = async ({ payload }:any) => {
    
    const res = await fetch(`${import.meta.env.VITE_EPORNER_API_URL}api/v2/video/search/?query=4k&per_page=${payload.qty}&page=2&thumbsize=big&gay=1&lq=1&format=json&order=${payload.order}&gay=1&lq=1&format=json`)
    const {videos: data} = await res.json() as APIEpornerResponse
    return data
}


// https://www.eporner.com/


// Red Tube
export const getModelVideos = async (payload:string | undefined) =>{
    const res = await fetch(`http://localhost:4000/rtube/model/${payload}`) 
    const data = await res.json() as RedTubeAPIData 
    return data
    
}