/* eslint-disable @typescript-eslint/no-explicit-any */
import {  useState } from "react"
import { useNavigate } from "react-router-dom"


export const QueryForm = () => {
    //const inputRef = useRef<HTMLInputElement>(null)
    const [message, setMessage] = useState("")
    const [show, setShow] = useState(false)
    const [query, setQuery] = useState("")
    const [border, setBorder] = useState("")

    const navigate = useNavigate()
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
       setQuery(e.target.value)
    }
    
     const handleKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
         if (e.key === "Enter") {
            if(query.length > 0) {
            navigate(`/search/${query}`)
            setShow(false)
            setBorder("")
            setMessage("")
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
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

                <input
                onKeyDown={handleKeyDown}
                onChange={handleInput}
                className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                type="text"
                id="search"
                placeholder="Search something.."
                value={query}          
                />

            </search>

            

            {show&& <p className="text-red-700">{message}</p>}
    </>
  )
}


