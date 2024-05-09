import { useEffect, useState } from "react"
import { Videos } from "../components/displayComponents/Videos"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { getEpornerSource } from "../redux/epornerSources/sourceSlice"
import { LoadButton } from "../components/commonComponents/LoadButton"

export default function Home () {
  const [counter, setCounter] = useState<number>(12)
  const dispatch = useAppDispatch()
  const eporner = useAppSelector(state => state.source.data)
  
  const handleResults = () => {
    setCounter(counter + 10)
  }

  useEffect(() => {
    
    dispatch(getEpornerSource(counter))
   
  },[counter])
    return(
        <main>
          <Videos source={eporner}/>
         <LoadButton onClick={handleResults} title={'Load more Videos..'}/>
        </main>
    )
}