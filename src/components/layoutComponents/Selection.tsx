/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAppDispatch } from "../../redux/hooks"
import { getEpornerSource } from "../../redux/epornerSources/sourceSlice"
import { useState, useEffect } from "react"

export const Selection = () => {
  const [select, setSelect] = useState<number>(1)
  const dispatch = useAppDispatch()
  const handleSelect = (e:any):void => {
      if (e.target.value !== "Hetero"){
        setSelect(1)
      }
      setSelect(0)
  }
useEffect(()=>{
  dispatch(getEpornerSource(select))
},[select])
  return (
    <div className="grid">
    <select onChange={handleSelect} className="row-start-1 col-start-1 bg-slate-50 dark:bg-slate-800 w-25 rounded-md p-1" name="user_selection" id="user_selection">
        <option value="Hetero">Hetero</option>
        <option value="Gay">Gay</option>
        <option value="Bisexual">Bisexual</option>  
    </select>
   
    </div>
  )
}


