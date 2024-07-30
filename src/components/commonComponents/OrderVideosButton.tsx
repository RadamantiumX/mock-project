import { Video } from '../icons/Video'
import './mostViewed.scss'
import { Link } from 'react-router-dom'

export const OrderVideosButton = () => {

  return (
    
<Link className="inline-flex items-center subnav" to="/videos">
<div className='mr-1'>
  <Video />
</div>
  Los Mejores Videos
</Link>

  

  )
}
