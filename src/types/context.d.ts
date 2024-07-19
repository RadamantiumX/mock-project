/* eslint-disable @typescript-eslint/no-explicit-any */
import { SetStateAction, Dispatch } from "react"

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
    setPostId: Dispatch<SetStateAction<number| undefined>>,
    lang: any,
    setLang: Dispatch<SetStateAction<any>>
}