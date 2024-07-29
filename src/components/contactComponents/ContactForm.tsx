import { FormattedMessage } from "react-intl"
import { useContactPost } from "../../customsHooks/contactHooks"

export const ContactForm = () => {
  const {name, setName, email, setEmail, message, setMessage, handleMessage} = useContactPost()
  return (

    <>   
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
    
    </>
   
  )
}
