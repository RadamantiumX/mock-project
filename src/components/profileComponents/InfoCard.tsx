import { useShowFields, useUpdateUserInfo } from "../../customsHooks/profileHooks"
import { AlertSignal } from "../commonComponents/AlertSignal"
import { InputForm } from "./InputForm"
import { FormattedMessage } from "react-intl"

interface Props {
  nickname: string | undefined
  email: string | undefined
}

export const InfoCard:React.FC<Props> = ({ nickname, email }) => {
   const { showFirst, setShowFirst, showSecond, setShowSecond } = useShowFields()
   const { setField, payload, setPayload, handleSubmit,error, setError } = useUpdateUserInfo()
  return (
    <div className='border rounded-md w-1/2 h-1/3'>
        <div className='flex flex-col gap-y-10 p-5'>
          {error.length > 0 && <AlertSignal setError={setError} message={error}/>}
        <h2 className='text-2xl font-semibold'><FormattedMessage id="profile.infocard.title" defaultMessage="Basic Information"/></h2> 
        <div className='flex flex-row gap-x-10'>
          <h3>
            {nickname}
          </h3>
         {!showFirst&& <button className='border rounded-md p-2' onClick={()=>{setShowFirst(true); setShowSecond(false); setPayload('');}}><FormattedMessage id="profile.infocard.button" defaultMessage="Change"/></button>}
          {showFirst && <InputForm type={"text"} handleSubmit={handleSubmit} payload={payload} setPayload={setPayload} setField={setField} field={'nickname'}/>}
        </div>  
        <div className='flex flex-row gap-x-10'>
         <h3>
            {email}
         </h3>
        {!showSecond&& <button className='border rounded-md p-2' onClick={()=>{setShowSecond(true); setShowFirst(false); setPayload('')}}><FormattedMessage id="profile.infocard.button" defaultMessage="Change"/></button>}
         {showSecond&& <InputForm type={"email"} handleSubmit={handleSubmit} payload={payload} setPayload={setPayload} setField={setField} field={'email'}/>}
         </div>
      </div>
    </div>
  )
}
