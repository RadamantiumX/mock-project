import { MagnifyingGlass } from "../icons/MagnifyingGlass"
import { useInputSearch } from "../../customsHooks/customsHooks"

interface Props {
  path: string
  placeholder: string
}

export const QueryForm:React.FC<Props> = ({path, placeholder}) => {
    const { query, message,show, handleInput, handleKeyDown } = useInputSearch(path)
    
  return (
      <>  
      <div className='flex items-center justify-center w-full'>
        <div className="flex rounded-full bg-[#141414] px-2 w-full max-w-[1900px]">
          <input
            type="text"
            className="w-full bg-[#0d1829] flex bg-transparent pl-2 text-[#cccccc] outline-0"
            placeholder={`Search ${placeholder}...`}
            onKeyDown={handleKeyDown}
            onChange={handleInput}
            value={query}
          />
          <button type="submit" className="relative p-2 rounded-full">
            <MagnifyingGlass />
          </button>
        </div>
      </div>
      {show && <p className="text-red-700">{message}</p>}
    </>
  )
}


