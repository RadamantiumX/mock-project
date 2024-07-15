import { useState } from "react"
import { useStateContext } from "../../contexts/ContextProvider"
import axiosClientAuth from "../../services/axios-client-auth"
export const PasswordCard = () => {
  const [oldPassword, setOldPassword] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const {token, setNotification} = useStateContext()

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    axiosClientAuth.post('/user/user-password', {oldPassword, password, confirmPassword, token})
      .then(({data})=>{
        console.log(data)
        setNotification(data.message)
        setOldPassword('')
        setPassword('')
        setConfirmPassword('')
      })
      .catch(error=>{
        console.error(error.message)
        console.error('Something went wrong!')
      })
  }

  return (
    <div className='border rounded-md w-1/2 h-1/3'>
        <div className='flex flex-col gap-y-10 p-5'>
        <h2 className='text-2xl font-semibold'>Password Update</h2> 
        <div className='flex flex-col gap-x-10'>
            <form className='flex flex-col gap-y-2' onSubmit={handleSubmit}>
                   <label htmlFor="old-password">Old password</label>  
                     <input name='old-password' id='old-password' type="password" value={oldPassword} onChange={(e)=>{setOldPassword(e.target.value)}}/>   
                   <label htmlFor="new-password">New password</label>  
                     <input name='new-password' id='new-password' type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                   <label htmlFor="retype">Retype new password</label>  
                     <input name='retype' id='retype' type="password" value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
                   <button className='border rounded-md p-2'>Update</button>
            </form>
         </div>
      </div>
    </div>
  )
}
