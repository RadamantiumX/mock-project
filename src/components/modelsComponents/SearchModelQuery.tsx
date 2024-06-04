import './searchModel.scss'
import { QueryForm } from '../layoutComponents/QueryForm'

export const SearchModelQuery = () => {
  return (
    <>
  <div className="justify-items-start justify-start gap-y-20 gap-x-2 mt-10 mb-5 mx-4 md:mx-0 md:ml-4 ">
  <h2 className="font-subtitle">The Most Popular Pornstars and Models</h2>

  <div className="max-w-md rounded-lg overflow-hidden md:max-w-xl mt-5">
      <div className="md:flex">
          <div className="w-80  relative">
              <QueryForm path={'model-search'} placeholder={'model'}/>
          </div>
      </div>
  </div>
</div>
    </>
  )
}
