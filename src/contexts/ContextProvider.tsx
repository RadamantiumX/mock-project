/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useState, PropsWithChildren, SetStateAction, Dispatch } from "react";

type ContextType = {
    token: string | null,
    setToken: Dispatch<SetStateAction<string>>,
    id: number | null,
    setId: Dispatch<SetStateAction<number>>
}

const StateContext = createContext<ContextType>({
    token: null,
    id: null,

    setToken: () => {},
    setId: () => {}
})

export const ContextProvider = ({ children }:PropsWithChildren) => {
    const [token, _setToken] = useState(localStorage.getItem('auth-token')) 
    const [id, setId] = useState<any>(null)

    const setToken = (token:any) => {
        _setToken(token)
        if(token){
            localStorage.setItem('auth-token', token)
        }else{
            localStorage.removeItem('auth-token')
        }
    }

    return (
        <StateContext.Provider value={{ token, setToken, id, setId }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)