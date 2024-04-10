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