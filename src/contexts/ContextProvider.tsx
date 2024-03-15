import { createContext, useContext, useState, PropsWithChildren, SetStateAction, Dispatch } from "react";

type ContextType = {
    tags: string[],
    setTags: Dispatch<SetStateAction<string[]>>
}

const StateContext = createContext<ContextType>({
    tags: [],
    setTags: () => {}
})

export const ContextProvider = ({ children }:PropsWithChildren) => {
    const [tags, setTags] = useState<string[]>([]) 
    return (
        <StateContext.Provider value={{ tags, setTags }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)