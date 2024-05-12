import { Notice } from "./Notice"

export const ContactForm = () => {
  return (
    <section>
        <div className= "h-screen flex flex-auto justify-center">

    <form id="#contact" className='flex flex-col gap-3 w-1/2 m-20'>
       <label htmlFor="name">Name</label>
       <input className='rounded-md p-1' type="text" name='name' id='name'placeholder='Jhon Smith'/>
       <label htmlFor="email">Email</label>
       <input className='rounded-md p-1' type="email" name='email' id='email'placeholder='user@example.com'/>
       <label htmlFor="message">Message</label>
       <textarea className='resize-none rounded-md p-1' name="message" id="message" rows={10}></textarea>  
       <button className='border rounded-md'>Send</button> 
       <Notice/>
    </form>
    
    </div>
    </section>
  )
}
