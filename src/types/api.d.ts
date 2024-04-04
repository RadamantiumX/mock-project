export interface User  {
    id: number 
    nickname: string
    email: string
    token: string | void
}

export interface UserPayload  {
    email: string
    password: string
}