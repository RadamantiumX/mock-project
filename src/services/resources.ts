import {  type APIEpornerResponse } from "../types/eporner"

// const configValue : string = (process.env.EPORNER_API_URL as string)


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


// https://www.eporner.com/