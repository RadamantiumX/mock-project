import { useState } from "react"

interface Props {
  nickname: string | undefined
  email: string | undefined
}

export const InfoCard:React.FC<Props> = ({ nickname, email }) => {
   const [ showFirst, setShowFirst ] = useState(false)
   const [ showSecond, setShowSecond ] = useState(false)


  return (
    <div className='border rounded-md w-1/2 h-1/3'>
        <div className='flex flex-col gap-y-10 p-5'>
        <h2 className='text-2xl font-semibold'>Basic Info</h2> 
        <div className='flex flex-row gap-x-10'>
          <h3>
            {nickname}
          </h3>
         {!showFirst&& <button className='border rounded-md p-2' onClick={()=>setShowFirst(true)}>Change</button>}

         {showFirst&& <div>
          <form action="">
          <input type="text" />  
          <button className='border rounded-md p-2'>Save</button>
          </form>
          </div>}

        </div>  
        <div className='flex flex-row gap-x-10'>
         <h3>
            {email}
         </h3>
        {!showSecond&& <button className='border rounded-md p-2' onClick={()=>setShowSecond(true)}>Change</button>}

         {showSecond&&<div>
          <form action=""> 
         <input type="email" />
         <button className='border rounded-md p-2'>Save</button>
         </form> 
         </div>}

         </div>
      </div>
    </div>
  )
}
