/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, PropsWithChildren, useState } from "react";
import { IntlProvider } from "react-intl";
import { useStateContext } from "./ContextProvider";
import SpanishMsg from '../lang/es-lang.json'
import EnglishMsg from '../lang/en-lang.json'

const LangContext = createContext<any>({})

const LangProvider = ({children}:PropsWithChildren) => {
    const [messages, setMessages] = useState(EnglishMsg)
    const {lang} = useStateContext()

    const handleMessages = (lang:string) => {
        switch (lang){
            case 'en':
                setMessages(EnglishMsg)
                break;
            case 'es':
                setMessages(SpanishMsg)
                break;
            default:
                setMessages(EnglishMsg)        
        }
    }
    return(
        <LangContext.Provider value={{ handleMessages: handleMessages }}>
            <IntlProvider locale={lang} messages={messages}>
                {children}
            </IntlProvider>
        </LangContext.Provider>
    )
}

export {LangProvider, LangContext}