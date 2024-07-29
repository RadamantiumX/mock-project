import { FormattedMessage } from "react-intl"
import { Notice } from "./Notice"
import { ContactForm } from "./ContactForm"
import Logo from "../../assets/project/logo.png"

export const ContactMain = () => {
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
        <ContactForm/>
     </div>
    </>
  )
}
