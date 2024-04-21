/* eslint-disable @typescript-eslint/no-explicit-any */
import './videoSelected.scss'
import { Eye } from '../icons/Eye';
import { Hearth } from '../icons/Hearth';
import { Share } from '../icons/Share';
import { useStateContext } from '../../contexts/ContextProvider';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosClientAuth from '../../services/axios-client-auth';
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { getFavsSource } from '../../redux/favSources/favsSlice';
import { Frame } from './Frame';


interface Props {
    id?: string;
    title?: string,
    views?: number,
}

export const VideoSelected:React.FC<Props> = ({ id, title, views }) => {
 const fav:any = useAppSelector(state => state.favs.data)
 const { token, setNotification } = useStateContext()
 const [filled, setFilled] = useState("none") // To fill "Hearth" icon
 const [innerMessage, setInnerMessage] = useState('Add to Favorites')
 const navigate = useNavigate()

 const dispatch = useAppDispatch()
 

  const MAX_TITLE_WORDS = 10; 

  const handleToken = async () => {
     if(!token){
       navigate('/auth/portal/signin')
     }
    if(filled === "none"){
      setFilled('red')
      const payload = {
         token: token,
         videoId: id
      }
      // Adding to Favorites
      await axiosClientAuth.post('/social/fav',payload)
       .then(({data})=>{
         setNotification(data.message)
         setInnerMessage('Favorite')
       })
       .catch(err => {
        const response = err.response
        setNotification(response)
       })
    } 
    if(filled === "red") {
      setFilled('none')
      // Deleting from favorites
      await axiosClientAuth.post('/social/delfav',{videoId: id, token: token})
       .then(({data})=>{
         setNotification(data.message)
         setInnerMessage('Add to Favorites')
       })
       .catch(err => {
        const response = err.response
        setNotification(response)
       })
    }
  }

  const truncateTitle = () => {
    const words = title?.split(' ');
    if (words !== undefined) {
    if (words?.length > MAX_TITLE_WORDS || words !== undefined) {
      return words?.slice(0, MAX_TITLE_WORDS).join(' ') + '...';
    }
  }
    return title;
  }
  useEffect(()=>{
    if(token){
    const payload = {token: token, videoId: id}
    dispatch(getFavsSource({payload}))
    console.log(fav)
  }
  },[])

  return (
    <>
<section style={{marginTop:"4rem"}} className="mr-10">
  
  <div className="mt-7 mb-7 ml-10 h-full relative">
  <h2 style={{fontSize:"1.7rem"}} className="flex-1 text-xl md:text-2xl font-bold text-gray-100 mb-5 truncate-multiline font-title">
  {truncateTitle()}
  <span style={{verticalAlign: "middle"}} className="mt-1 shrink-0 ml-3 text-sm sm:text-lg inline-flex items-center gap-2">
   <Eye size={'w-6 h-6 '}/>
    <span style={{verticalAlign: "middle"}}>{views}</span>
  </span>
        </h2>
        <Frame id={id}/>{/* Video Embed */}
          <div className='flex flex-row gap-2'>
            <button onClick={handleToken} className="border rounded-md flex flex-row p-2 gap-1"><Hearth filled={filled}/>{innerMessage}</button>
          
            <button className="border rounded-md flex flex-row p-2 gap-1"><Share/>Share video</button>
          </div>
  </div>
</section>

</>
  )
}
