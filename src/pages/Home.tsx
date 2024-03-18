import { useEffect } from "react"
import {Header} from "../components/homeComponents/Header"
import { Videos } from "../components/homeComponents/Videos"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { getSource } from "../redux/sourceSlice"


export default function Home () {

  const dispatch = useAppDispatch()
  const source = useAppSelector(state => state.source.data)
  
  useEffect(() => {
    dispatch(getSource(null))
   
  },[])
    return(
        <main>
          <Header/>
          <Videos source={source}/>
        </main>
    )
}