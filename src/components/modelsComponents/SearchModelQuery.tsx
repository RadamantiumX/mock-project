import './searchModel.scss'
import { QueryForm } from '../layoutComponents/QueryForm'
import { PageHeader } from '../commonComponents/PageHeader'

export const SearchModelQuery = () => {
  return (
    <>
 <div className="mx-4 mt-10 mb-5 md:mx-0 md:ml-4">
  
  <PageHeader title={'The Most Popular Pornstars and Models'}/>

  <div className="max-w-md mt-5 overflow-hidden rounded-lg md:max-w-xl">
    <div className="md:flex md:justify-start md:gap-x-2">
      <div className="relative w-full md:w-80">
        <QueryForm path={'model-search'} placeholder={'model'}/>
      </div>
    </div>
  </div>
</div>

    </>
  )
}
