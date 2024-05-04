import { SetStateAction, Dispatch } from "react"
export interface User  {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    id: number | any 
    nickname: string
    email: string
   
}

export interface UserPayload  {
    email: string
    password: string
}
export interface FavsPayload  {
    videoId: string | null
    token: string | null
}

export type ContextType = {
    nickname: string | null,
    setNickname: Dispatch<SetStateAction<string | null>>, // Mandatory Types
    email: string | null,
    setEmail: Dispatch<SetStateAction<string | null>>, // Mandatory Types
    id: number | null,
    setId: Dispatch<SetStateAction<number | null>>, // Mandatory Types
    token: string | null,
    setToken: Dispatch<SetStateAction<string | null>>, // Mandatory Types
    path: string | null,
    setPath: Dispatch<SetStateAction<string | null>>,
    age: string | null,
    setAge: Dispatch<SetStateAction<string | null>>, // Mandatory Types
    notification: string | null,
    setNotification: Dispatch<SetStateAction<string | null>>,
    videoId: string | undefined,
    setVideoId: Dispatch<SetStateAction<string | undefined>>,
    postId: number | undefined,
    setPostId: Dispatch<SetStateAction<number| undefined>> 
}
export type APIVanillaLeakPost = {
    count: number,
    posts: Post[]
}

export type APIVanillaLeakReplys = { 
    responses: Reply[]
}
export type Post = {
    id: number | null,
    content: string | null,
    nickname: string | null,
    authorId: number | null,
    createdAt: string | null,
    videoId: string | null
    
}

export type Reply = {
    id: number | null,
    content: string | null,
    nickname: string | null,
    authorId: number | null,
    createdAt: string | null,
    postId: number | null | undefined,
    responseId: number | null | undefined

}



