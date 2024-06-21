/* eslint-disable @typescript-eslint/no-explicit-any */
import {  useState } from "react"
import { useNavigate } from "react-router-dom"
import { MagnifyingGlass } from "../icons/MagnifyingGlass"
import { useInputSearch } from "../../customsHooks/customsHooks"

interface Props {
  path: string
  placeholder: string
}

export const QueryForm:React.FC<Props> = ({path, placeholder}) => {
    const [message, setMessage] = useState("")
    const [show, setShow] = useState(false)
   // const [query, setQuery] = useState("")
    const [border, setBorder] = useState("")

    const { query, setQuery, handleInput } = useInputSearch()
    
    const navigate = useNavigate()
    /*const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
       setQuery(e.target.value)
    }*/
    
     const handleKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
         if (e.key === "Enter") {
            if(query.length > 0) {
            navigate(`/${path}?query=${query}`)
            setShow(false)
            setBorder("")
            setMessage("")
            setQuery("")
            }else{
                setShow(true)
                setBorder("border-2 border-red-900")
                setMessage("Please enter a query")
            }
         }
       }
   
    
  return (
      <>
         
         <search className={`relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden ${border}`}>
            <div className="grid place-items-center h-full w-12 text-gray-300">
                <MagnifyingGlass props={""}/>
              </div>

                <input
                onKeyDown={handleKeyDown}
                onChange={handleInput}
                className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                type="text"
                id="search"
                placeholder={`Search ${placeholder}...`}
                value={query}          
                />

            </search>         

            {show&& <p className="text-red-700">{message}</p>}
    </>
  )
}


