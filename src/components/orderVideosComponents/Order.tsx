/* eslint-disable @typescript-eslint/no-explicit-any */
import { Videos } from "../displayComponents/Videos"

import { useParams } from "react-router-dom"
// import { LoadButton } from "../commonComponents/LoadButton"
import { useOrderVideos, useQuery, useRange } from "../../customsHooks/customsHooks"
import { Pagination } from "../commonComponents/Pagination"

type Params = {
  param: string | undefined
}

export const Order = () => {
 const { param } = useParams<Params>()
 const query = useQuery()
 const currentPage:any = query.get('page')
 const { orderVideos, totalPages  } = useOrderVideos(param, currentPage)
 const { rangePages } = useRange(1, Math.round(totalPages))

  return (
    <>
      {orderVideos?.length > 0 ?
        <div className="mt-8" id="order-videos">
          <Videos source={orderVideos} />
          {/*<LoadButton onClick={handleResults} title={'Load more videos...'} />*/}
          <Pagination itemsPage={rangePages} currentPage={currentPage === null ? 1: parseInt(currentPage)} optParam={null}/>
        </div>
        : <div className="flex flex-col items-center mt-10 mb-10">	<div className="w-12 h-12 rounded-full animate-spin
      border-8 border-solid border-pink-500 border-t-transparent shadow-md"></div></div>}
    </>
  )
}
