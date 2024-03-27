/**
 * This's NOT RESULTS (code: 200) component, is not the same as the NOT FOUND (code: 404) page
 */
import { Link } from "react-router-dom"
import Face from "../../assets/project/face.png"

export const NotResults = () => {
  return (
<section className="h-screen flex justify-center items-center -mt-20">
  <div className="text-center">
    <img src={Face} alt="Face" className="mx-auto" style={{ width: "10rem", opacity: "0.1" }} />
    <h2 style={{opacity:"0.1"}} className="text-5xl font-bold mt-3">Not Results founded</h2>
    <Link style={{opacity:"0.7"}} to="/home" className="block mt-4 font-bold mt-3"><i className="fa-solid fa-arrow-left mr-4"></i>Return to main page</Link>
  </div>
</section>


  
  )
}
