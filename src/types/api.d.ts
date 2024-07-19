
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

export type Like = {
    like: object | null
}



