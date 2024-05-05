/* eslint-disable @typescript-eslint/no-explicit-any */
import './videoSelected.scss'
import { Eye } from '../icons/Eye';
import { Hearth } from '../icons/Hearth';
import { Share } from '../icons/Share';
import { LikeVideo } from './LikeVideo';
import { useStateContext } from '../../contexts/ContextProvider';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { getFavsSource } from '../../redux/favSources/favsSlice';
import { Frame } from './Frame';
import { useTruncateTitle, useFetchPost } from '../../customsHooks/customsHooks';

interface Props {
    id?: string;
    title?: string,
    views?: number,
}

export const VideoSelected:React.FC<Props> = ({ id, title, views }) => {
 const fav:any = useAppSelector(state => state.favs.data)
 const { token, setNotification, setToken, setNickname } = useStateContext()
 const [filled, setFilled] = useState("none") // To fill "Hearth" icon
 const [innerMessage, setInnerMessage] = useState('Add to Favorites')
 const navigate = useNavigate()
 const shortTitle = useTruncateTitle(title) // Use the custom Hook to truncate
 
 const dispatch = useAppDispatch()
 const payload = {
  token: token,
  videoId: id
}
const { postData }:any = useFetchPost()
  const handleFavs = async() => { 
     if(!token){
       navigate('/auth/portal/signin')
     }
    if(filled === "none"){   // Adding to Favorites   
     const favs = await postData('/social/fav',payload)
     if (favs.status === 200) {
        setFilled("red")
        setNotification('Adding to favorites')
        setInnerMessage('Favorite')
       } else {
          setNotification('Session expired')
          setToken(null)
          setNickname(null)
          setTimeout(()=>{
          navigate('/auth/portal/signin') // ---> Redirect
           },2000)
       }
    } 
    if(filled === "red") { // Deleting from favorites
      const delFavs = await postData('/social/delfav',payload)
      console.log(delFavs)
      if (delFavs.status === 200) {
        setFilled("none")
        setNotification('Delete from favorites')
        setInnerMessage('Add to Favorites')
       } else {
          setNotification('Session expired')
          setToken(null)
          setNickname(null)
          setTimeout(()=>{
          navigate('/auth/portal/signin') // ---> Redirect
           },2000)
       }      
    }
  }

  // Obtain the state of "Favorite" videos for current user
  useEffect(()=>{
    
    if(token){
    const payload = {token: token, videoId: id}
    dispatch(getFavsSource({payload}))
    if(fav === 200) {
       setFilled("red")
       setInnerMessage("Favorite")
    }else{
      setFilled("none")
       setInnerMessage("Add to Favorites")
    }
  }
  },[payload])

  return (
    <>
<section style={{marginTop:"4rem"}} className="mr-10">
  
  <div className="mt-7 mb-7 ml-10 h-full relative">
  <h2 style={{fontSize:"1.7rem"}} className="flex-1 text-xl md:text-2xl font-bold text-gray-100 mb-5 truncate-multiline font-title">
  {shortTitle}
  <span style={{verticalAlign: "middle"}} className="mt-1 shrink-0 ml-3 text-sm sm:text-lg inline-flex items-center gap-2">
   <Eye size={'w-6 h-6 '}/>
    <span style={{verticalAlign: "middle"}}>{views}</span>
  </span>
        </h2>
        <Frame id={id}/>{/* Video Embed */}
          <div className='flex flex-row gap-2'>
            <button onClick={handleFavs} className="border rounded-md flex flex-row p-2 gap-1"><Hearth filled={filled}/>{innerMessage}</button>
          
            <button className="border rounded-md flex flex-row p-2 gap-1"><Share/>Share video</button>
            <LikeVideo videoId={id}/>
          </div>
  </div>
</section>

</>
  )
}
