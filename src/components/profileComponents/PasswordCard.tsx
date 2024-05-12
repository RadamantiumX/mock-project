export const PasswordCard = () => {
  return (
    <div className='border rounded-md w-1/2 h-1/3'>
        <div className='flex flex-col gap-y-10 p-5'>
        <h2 className='text-2xl font-semibold'>Password Update</h2> 
        <div className='flex flex-col gap-x-10'>
            <form className='flex flex-col gap-y-2'>
            <label htmlFor="old-password">Old password</label>  
            <input name='old-password' id='old-password' type="password" />   
            <label htmlFor="new-password">New password</label>  
            <input name='new-password' id='new-password' type="password" />
            <label htmlFor="retype">Retype new password</label>  
            <input name='retype' id='retype' type="password" />
            <button className='border rounded-md p-2'>Update</button>
            </form>
         </div>
      </div>
    </div>
  )
}
