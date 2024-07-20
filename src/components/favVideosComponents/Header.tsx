import { Hearth } from "../icons/Hearth"
import { FormattedMessage } from "react-intl"

export const Header = () => {
  return (
    <div className='flex items-center text-center mt-10 mr-10'>
    <h1 className='text-3xl font-bold textTitleVideo mr-1'><FormattedMessage id="fav.videos.title" defaultMessage="Favorites Videos"/></h1>
    <Hearth/>
  </div>
  
  )
}
