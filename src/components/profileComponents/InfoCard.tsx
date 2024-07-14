import { useShowFields, useUpdateUserInfo } from "../../customsHooks/profileHooks"

interface Props {
  nickname: string | undefined
  email: string | undefined
}

export const InfoCard:React.FC<Props> = ({ nickname, email }) => {
   const { showFirst, setShowFirst, showSecond, setShowSecond } = useShowFields()
   const { setField, payload, setPayload, handleSubmit } = useUpdateUserInfo()
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
          <p>❗When click "Update" on the email field, we will dismiss your session...</p>  
         <input type="email" value={payload} onChange={(e)=>{setPayload(e.target.value); setField('email')}}/>
         <button className='border rounded-md p-2' type="submit">Update</button>
         </form> 
         </div>}

         </div>
      </div>
    </div>
  )
}
