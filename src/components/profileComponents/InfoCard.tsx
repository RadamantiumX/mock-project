/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react"
import axiosClientAuth from "../../services/axios-client-auth"
import { useStateContext } from "../../contexts/ContextProvider"
import { useNavigate } from "react-router-dom"


interface Props {
  nickname: string | undefined
  email: string | undefined
}

export const InfoCard:React.FC<Props> = ({ nickname, email }) => {
   const [ showFirst, setShowFirst ] = useState(false)
   const [ showSecond, setShowSecond ] = useState(false)
   const [field, setField] = useState('')
   const [payload, setPayload] = useState('')
   const {token, setNotification, setToken, setNickname, setPath} = useStateContext()
   const navigate = useNavigate()

   const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()  
      console.log(field)
      console.log(payload)
      axiosClientAuth.post('/user/user-update',{payload, field, token})
       .then(({data})=>{
        console.log(data.message)
        setNotification(data.message)
        setPayload('')
        if(field === 'email'){
          setTimeout(()=>{
            // /auth/portal/signin
            localStorage.clear() // Clear full storage
        setToken(null) // Token too
        setNickname(null)
        setPath('/auth/portal/signin')
        navigate('/redirect')
          },1000)
        }
       })
       .catch(error=>{
        console.error(error)
       })
   }
  return (
    <div className='border rounded-md w-1/2 h-1/3'>
        <div className='flex flex-col gap-y-10 p-5'>
        <h2 className='text-2xl font-semibold'>Basic Info</h2> 
        <div className='flex flex-row gap-x-10'>
          <h3>
            {nickname}
          </h3>
         {!showFirst&& <button className='border rounded-md p-2' onClick={()=>{setShowFirst(true); setShowSecond(false); setPayload('');}}>Change</button>}

         {showFirst&& <div>
          <form onSubmit={handleSubmit}>
          <input type="text" value={payload} onChange={(e)=>{setPayload(e.target.value); setField('nickname')}}/>  
          <button className='border rounded-md p-2' type="submit">Update</button>
          </form>
          </div>}

        </div>  
        <div className='flex flex-row gap-x-10'>
         <h3>
            {email}
         </h3>
        {!showSecond&& <button className='border rounded-md p-2' onClick={()=>{setShowSecond(true); setShowFirst(false); setPayload('')}}>Change</button>}

         {showSecond&&<div>
          <form onSubmit={handleSubmit}> 
          <p>❗When click "Update" on the email field, we redirect you to the <span className="font-bold">Sign In</span> section</p>  
         <input type="email" value={payload} onChange={(e)=>{setPayload(e.target.value); setField('email')}}/>
         <button className='border rounded-md p-2' type="submit">Update</button>
         </form> 
         </div>}

         </div>
      </div>
    </div>
  )
}
