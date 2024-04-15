/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useState, PropsWithChildren, SetStateAction, Dispatch } from "react";
import { User } from "../types/api";

type ContextType = {
    user: User | null,
    setUser: Dispatch<SetStateAction<User | null>>, // Mandatory Types
    token: string | null,
    setToken: Dispatch<SetStateAction<string | null>>, // Mandatory Types
    path: string | null,
    setPath: Dispatch<SetStateAction<string | null>>,
    age: string | null,
    setAge: Dispatch<SetStateAction<string | null>>, // Mandatory Types
}

const StateContext = createContext<ContextType>({
    user: null,
    token: null,
    path: null,
    age: null,

    setUser: () => {},
    setToken: () => {},
    setPath: () => {},
    setAge: () => {}
})

export const ContextProvider = ({ children }:PropsWithChildren) => {
    const [user, _setUser] = useState<User>(localStorage.getItem('auth-user')) 
    const [token, _setToken] = useState(localStorage.getItem('auth-token'))
    const [path, setPath] = useState<any>("")
    const [age, _setAge] = useState(localStorage.getItem('rta'))
    
    const setToken = (token:any) => {
        _setToken(token)
        if(token){
            localStorage.setItem('auth-token', token)
        }else{
            localStorage.removeItem('auth-token')
            localStorage.removeItem('auth-user')
        }
    }

    const setUser = (user:User) => {
        _setUser(user)
        if(user){
            localStorage.setItem('auth-user', user)
        }else{
            localStorage.removeItem('auth-user')
        }
    }

    const setAge = (age:any) => {
        _setAge(age)
        if(age){
            localStorage.setItem('rta', age)
        }else{
            localStorage.removeItem('rta')
        }
    }

    return (
        <StateContext.Provider value={{ user, setUser, path, setPath, age, setAge, token, setToken }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)