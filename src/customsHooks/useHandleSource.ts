import { useState } from "react"
import { type Video } from "../types/eporner"

type Params = Video[] | null

export const useHandleSource = (source: Params) => {
    const [keywords, setKeywords] = useState<string[]>([])
    source?.forEach((src) => {
       const splitSource = src.keywords.split(',')
       setKeywords([splitSource[0],...keywords])
    })
   return keywords
}
