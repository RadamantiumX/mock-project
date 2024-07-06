import { ORDER } from '../const/order';
import { Star } from '../icons/Star'
import { Link } from 'react-router-dom'
import { useActiveTab } from '../../customsHooks/orderVideosHooks';
import { useParams } from 'react-router-dom';

import "./buttonsSelectOrder.scss"

export const ButtonsSelectOrder = () => {
const { activeTab, handleTabClick } = useActiveTab()
const { param } = useParams()
   
  return (
      <div className="lg:flex lg:flex-col mt-3 -mb-5">
          <div className="flex justify-center lg:justify-start">
              <div className="lg:flex lg:flex-wrap lg:gap-1">
                  {ORDER.map((item, key) => (
                      <Link
                          to={`${item.param}`}
                          key={key}
                          className={`p-3 pt-2 pb-2 textTab rounded ${param === item.param ? 'bg-pink-500 text-white shadow-md' : 'bg-black border border-white text-white shadow-md'} mb-2 lg:mb-0 inline-block lg:inline`}
                          onClick={() => handleTabClick(key)}
                          aria-controls={item.param}
                          aria-selected={activeTab === key ? 'true' : 'false'}
                      >
                          <div className='flex '>
                              <Star />
                              <span className='textTab ml-4'> {item.title}</span>
                          </div>
                      </Link>
                  ))}
              </div>
          </div>
          <div className="lg:p-1 mt-1 lg:ml-3">
              {ORDER.map((item, key) => (
                  <div key={key} id={item.param} aria-labelledby={item.param} className={`tab-pane ${activeTab === key ? 'block' : 'hidden'}`}>
                  </div>
              ))}
          </div>
      </div>
  )
}
