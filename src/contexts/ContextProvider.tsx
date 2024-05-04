/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useState, PropsWithChildren } from "react";
import { type ContextType } from "../types/api";


const StateContext = createContext<ContextType>({
    nickname: null,
    email: null,
    id: null,
    token: null,
    path: null,
    age: null,
    notification: null,
    videoId: undefined,
    postId: undefined,

    setNickname: () => {},
    setEmail: () => {},
    setId: () => {},
    setToken: () => {},
    setPath: () => {},
    setAge: () => {},
    setNotification: ()=>{},
    setVideoId: ()=>{},
    setPostId: () =>{}
})

export const ContextProvider = ({ children }:PropsWithChildren) => {
    const [nickname, _setNickname] = useState(localStorage.getItem('auth-nickname')) 
    const [email, _setEmail] = useState(localStorage.getItem('auth-email')) 
    const [id, _setId] = useState<any>(localStorage.getItem('auth-id')) 
    const [token, _setToken] = useState(localStorage.getItem('auth-token'))
    const [path, setPath] = useState<any>("")
    const [age, _setAge] = useState(localStorage.getItem('rta'))
    const [notification, _setNotification] = useState("")
    const [videoId, setVideoId] = useState<any>("")
    const [postId, setPostId] = useState<any>(null)
    
    const setToken = (token:any) => {
        _setToken(token)
        if(token){
            localStorage.setItem('auth-token', token)
        }else{
            localStorage.clear() // Remove all local storage items
        }
    }

    const setNickname = (nickname:any) => {
        _setNickname(nickname)
        if(nickname){
            localStorage.setItem('auth-nickname', nickname)
        }else{
            localStorage.removeItem('auth-nickname')
        }
    }
    

    const setEmail = (email:any) => {
        _setEmail(email)
        if(email){
            localStorage.setItem('auth-email', email)
        }else{
            localStorage.removeItem('auth-email')
        }
    }

    const setId = (id:any) => {
        _setId(id)
        if(id){
            localStorage.setItem('auth-id', id)
        }else{
            localStorage.removeItem('auth-id')
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

    const setNotification = (message:any) => {

        _setNotification(message);

        setTimeout(() => {
          _setNotification('')
        }, 5000)
    }

    return (
        <StateContext.Provider value={{ nickname, setNickname, path, setPath, age, setAge, token, setToken, email, setEmail, id, setId, notification, setNotification, videoId, setVideoId, postId, setPostId }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)