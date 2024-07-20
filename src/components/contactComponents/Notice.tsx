import { Link } from "react-router-dom"
import { FormattedMessage } from "react-intl"

export const Notice = () => {
  return (
    <div>
        <p className='text-gray-400'><FormattedMessage id="contact.notice.p#1" defaultMessage="By submitting this, I confirm that I have read and understood the Privacy Policy."/></p>
        <p><FormattedMessage id="contact.notice.p#2" defaultMessage="By submitting this, I confirm that I have read and understood the "/> <Link className="text-blue-700 hover:text-blue-800" to="/legal/privacy"><FormattedMessage id="contact.notice.p#2.inner" defaultMessage="Privacy Policy"/></Link></p>
    </div>
  )
}
