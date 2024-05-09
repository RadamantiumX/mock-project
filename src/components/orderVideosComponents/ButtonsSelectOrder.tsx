import { ORDER } from '../const/categories'
import { Star } from '../icons/Star'
import { Link } from 'react-router-dom'

export const ButtonsSelectOrder = () => {
 
   
  return (
    <section className='h-3/4'>
        <div className='flex flex-row justify-center py-20 gap-3'>
           {ORDER.map((item, key)=>(<div key={key}><Link to={`${item.param}`} className='border rounded-md p-5 flex flex-row gap-2 focus:outline-none focus:ring focus:ring-violet-300'><Star/>{item.title}</Link></div>))}
        </div>
    </section>
  )
}
