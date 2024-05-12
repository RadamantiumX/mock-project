/* eslint-disable @typescript-eslint/no-explicit-any */
import { Videos } from "../displayComponents/Videos"
import { useState, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { getEpornerOrderSource } from "../../redux/epornerSources/orderSlice"
import { useParams } from "react-router-dom"
import { LoadButton } from "../commonComponents/LoadButton"

type Params = {
  param: string
}

export const Order = () => {
  const [counter, setCounter] = useState<number>(12)
  const dispatch = useAppDispatch()
  const { param } = useParams<Params>()
  const eporner: any = useAppSelector(state => state.order.data)

  // Per page
  const handleResults = () => {
    setCounter(counter + 10)
  }

  // Args
  const payload = {
    qty: counter,
    order: param
  }

  useEffect(() => {

    dispatch(getEpornerOrderSource({ payload }))

  }, [counter, param])
  return (
    <>
      {eporner?.length > 0 ?
        <div className="mt-8" id="order-videos">
          <Videos source={eporner} />
          <LoadButton onClick={handleResults} title={'Load more videos...'} />
        </div>
        : <div className="flex flex-col items-center mt-10 mb-10">	<div className="w-12 h-12 rounded-full animate-spin
      border-8 border-solid border-pink-500 border-t-transparent shadow-md"></div></div>}
    </>
  )
}
