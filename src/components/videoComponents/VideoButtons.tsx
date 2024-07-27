import { useState } from "react"
import { Hearth } from "../icons/Hearth"
import { Share } from "../icons/Share"
import { Copy } from "../icons/Copy"
import { useTruncateTitle } from "../../customsHooks/videoHooks"

interface PropsComments {
    count: number
}

export const CommentsButton:React.FC<PropsComments> = ({count}) => {
  return (
    <>
          <a
              href="#commentsContainer"
              className="relative bg-gray-700 hover:bg-gray-800 duration-300 py-2 px-4 text-blue-100 rounded flex-shrink-0"
            >
              <i className="fa-regular fa-comment mr-2"></i>
              <span className="md:inline hidden">Comment</span>{" "}
              {/* Ocultar en dispositivos pequeños */}
              {count > 0 && (
                <span className="absolute bg-pink-600 px-2 py-1 text-xs font-bold rounded-full -top-3 -right-3">
                  {count}
                </span>
              )}
            </a>
    </>
  )
}

interface PropsLike{
    handleFav: ()=>void
    filled: string
    innerButton: string
}

export const FavButton:React.FC<PropsLike> = ({ handleFav, filled, innerButton }) => {
  return (
    <>
     <button onClick={handleFav} className="rounded-md flex flex-row p-2 gap-1 font-bold text-white">
              <Hearth filled={filled} />
              <span className="hidden lg:inline">
                {innerButton}
              </span>
            </button>
    </>
  )
}

export const ShareButton = () => {
    const [showButton, setShowButton] = useState(true)
    const [isCopied, setIsCopied] = useState(false)
    const pathname = window.location.pathname
    const link = `https://vanillaleak.com${pathname}`
    const shortLink = useTruncateTitle(link)
    return (
      <>
        {showButton ? <button onClick={()=>{showButton ? setShowButton(false): setShowButton(true)}} className="rounded-md flex flex-row p-2 gap-1 font-bold text-white">
                <Share />
                <span className="hidden lg:inline"> {/* Ocultar en dispositivos móviles y tabletas, mostrar en pantallas de escritorio */}
                  Share
                </span>
        </button> :
        <button className="flex flex-row" title="Copy link">
            {shortLink} <Copy/>
        </button>}
      </>
    )
  }




