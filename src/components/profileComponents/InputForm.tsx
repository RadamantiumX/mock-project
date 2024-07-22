import { Dispatch, SetStateAction } from "react";
import { FormattedMessage } from "react-intl";

interface Props{
    type:string
    handleSubmit: (e:React.FormEvent<HTMLFormElement>)=>Promise<void>,
    payload: string
    setPayload: Dispatch<SetStateAction<string>>
    setField: Dispatch<SetStateAction<string>>
    field: string
}


export const InputForm:React.FC<Props> = ({type, handleSubmit, payload, setPayload, setField, field}) => {
  return (
    <div>
          <form onSubmit={handleSubmit}>
          <input type={type} value={payload} onChange={(e)=>{setPayload(e.target.value); setField(field)}}/>  
          <button className='border rounded-md p-2' type="submit"><FormattedMessage id="profile.inputform.button" defaultMessage="Update"/></button>
          </form>    
    </div>
  )
}
