import { MagnifyingGlass } from "../icons/MagnifyingGlass"
import { useInputSearch } from "../../customsHooks/customsHooks"

interface Props {
  path: string
  placeholder: string
}

export const QueryForm:React.FC<Props> = ({path, placeholder}) => {
    const { query, border,message,show, handleInput, handleKeyDown } = useInputSearch(path)
    
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


