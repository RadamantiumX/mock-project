import { useEffect, useState } from "react"
import {Header} from "../components/homeComponents/Header"
import { Videos } from "../components/homeComponents/Videos"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { getSource } from "../redux/sourceSlice"
import { LoadButton } from "../components/commonComponents/LoadButton"

export default function Home () {
  const [counter, setCounter] = useState<number>(12)
  const dispatch = useAppDispatch()
  const source = useAppSelector(state => state.source.data)
  
  const handleResults = () => {
    setCounter(counter + 10)
  }

  useEffect(() => {
    
    dispatch(getSource(counter))
   
  },[counter])
    return(
        <main>
          <Header/>
          <Videos source={source}/>
         <LoadButton onClick={handleResults} title={'Load more Videos..'}/>
        </main>
    )
}