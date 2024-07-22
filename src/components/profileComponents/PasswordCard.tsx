import { AlertSignal } from "../commonComponents/AlertSignal"
import { useUpdateUserPassword } from "../../customsHooks/profileHooks"
import { FormattedMessage } from "react-intl"

export const PasswordCard = () => {
  const { oldPassword, setOldPassword, password, setPassword, confirmPassword, setConfirmPassword, handleSubmit, error, setError } = useUpdateUserPassword()

  return (
    <div className='border rounded-md w-1/2 h-1/3'>
        <div className='flex flex-col gap-y-10 p-5'>
        <h2 className='text-2xl font-semibold'><FormattedMessage id="profile.passwordcard.title" defaultMessage="Update Password"/></h2> 
        <div className='flex flex-col gap-x-10'>
           {error.length !== 0 && <AlertSignal setError={setError} message={error}/> }
            <form className='flex flex-col gap-y-2' onSubmit={handleSubmit}>   
                   <label className="flex flex-row gap-x-2" htmlFor="old-password"><FormattedMessage id="profile.passwordcard.label#1" defaultMessage="Old Password"/> </label>  
                     <input name='old-password' id='old-password' type="password" value={oldPassword} onChange={(e)=>{setOldPassword(e.target.value)}}/>   
                   <label className="flex flex-row gap-x-2" htmlFor="old-password"><FormattedMessage id="profile.passwordcard.label#2" defaultMessage="New Password"/></label>    
                     <input name='new-password' id='new-password' type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                   <label className="flex flex-row gap-x-2" htmlFor="old-password"><FormattedMessage id="profile.passwordcard.label#3" defaultMessage="Retype new Password"/></label>  
                     <input name='retype' id='retype' type="password" value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
                   <button className='border rounded-md p-2'><FormattedMessage id="profile.passwordcard.button" defaultMessage="Update"/></button>
            </form>
         </div>
      </div>
    </div>
  )
}
