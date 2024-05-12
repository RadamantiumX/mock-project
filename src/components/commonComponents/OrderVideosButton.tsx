import './mostViewed.scss'
import { Play } from '../icons/Play'
import { Link } from 'react-router-dom'

export const OrderVideosButton = () => {

  return (
    
    <Link reloadDocument to="/videos" type="button" className="ml-4 text-white bg-[#dd2471] hover:bg-[#dd2471]/80 focus:ring-4 focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#dd2471]/80 dark:focus:ring-[#dd2471]/40 mr-2 mb-2">
      <Play/>
         Videos
    </Link>

  )
}
