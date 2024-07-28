import { Notice } from "./Notice"
import Logo from "../../assets/project/logo.png"
import { FormattedMessage } from "react-intl"
import { useContactPost } from "../../customsHooks/contactHooks"

export const ContactForm = () => {
  const {name, setName, email, setEmail, message, setMessage, handleMessage} = useContactPost()
  return (

    <>  
    <div className="max-w-screen-xl mt-7 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto text-gray-900 rounded-lg shadow-lg mb-5">
  <div className="flex flex-col justify-star align-items-star">
    <img className="left-30 mb-8" style={{ width: "18rem", marginLeft: "-2.3rem" }} src={Logo} alt="Logo DirtyHub" aria-labelledby="Vanilla Leak Logo" />
    <h1 className="text-4xl text-white lg:text-5xl font-bold leading-tight"><FormattedMessage id="contact.title" defaultMessage="Fill out the form below we'll respond quickly!"/> </h1>
    <div className="text-gray-700 mt-8">
      <Notice />
    </div>
  </div>
  <form id="#contact" onSubmit={handleMessage}>
    <div>
      <span className="uppercase text-sm text-gray-300 font-bold"><FormattedMessage id="contact.name" defaultMessage="Full Name"/></span>
      <input className="w-full bg-gray-600 text-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
        type="text" placeholder="" value={name} onChange={(e)=>setName(e.target.value)}/>
    </div>
    <div className="mt-8">
      <span className="uppercase text-sm text-gray-300 font-bold"><FormattedMessage id="contact.email" defaultMessage="Email"/></span>
      <input className="w-full bg-gray-600 text-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
        type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    </div>
    <div className="mt-8">
      <span className="uppercase text-sm text-gray-300 font-bold"><FormattedMessage id="contact.message" defaultMessage="Message"/></span>
      <textarea
        className="w-full h-32 bg-gray-600 text-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
    </div>
    <div className="mt-8">
      <button
        className="text-white bg-[#dd2471] hover:bg-[#dd2471]/80 focus:ring-4 focus:ring-[#FF9119]/50 font-medium rounded-lg text-base px-3 py-2 inline-flex items-center dark:hover:bg-[#dd2471]/80 dark:focus:ring-[#dd2471]/40 mb-2" type="submit">
        <FormattedMessage id="contact.button" defaultMessage="Send Message"/>
      </button>
    </div>
  </form>
</div>



    
    
    
    
    
    
    
    
    
    </>
   
  )
}
