import { Link } from "react-router-dom"

export const Notice = () => {
  return (
    <div>
        <p className='text-gray-400'>By submitting this, I confirm that I have read and understood the Privacy Policy.</p>
        <p>By submitting this, I confirm that I have read and understood the <Link className="text-blue-700 hover:text-blue-800" to="/legal/privacy">Privacy Policy.</Link></p>
    </div>
  )
}
