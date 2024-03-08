import {  type APIEpornerResponse } from "../types/eporner"

export const getLatestContent = async () => {
    const res = await fetch('https://www.eporner.com/api/v2/video/search/?query=popular&per_page=10&page=2&thumbsize=big&order=latest&gay=1&lq=1&format=json')
    const {videos: data} = await res.json() as APIEpornerResponse
   
    return data
}