import { Link } from "react-router-dom"
import Logo from "../../assets/project/dh-logo-preview.png"

export default function NavBar(){
  return (
    <nav className="navdesk sm:block hidden top-0 z-50 h-auto w-full">
      <div className="flex flex-col items-center">
          
      <div className="flex flex-row gap-4 mt-3 bg-gray-800 w-full justify-center p-2">
        <Link className="w-40 h-10" to="/"><img src={Logo} alt="Logo DirtyHub" /></Link>
        <form className="flex gap-2" action="">
          <input className="rounded-sm w-full p-1" type="text" placeholder="Search" />
          <button className="border rounded-sm p-1">Search</button>
        </form>
        <button className="border rounded-sm bg-yellow-500 text-gray-700 p-1 w-20">Lang</button>
      </div>

      <div className="flex mt-2 w-full justify-center bg-gray-600">
         <ul className="flex flex-row gap-4">
          <li><a href="#">Categories</a></li>
          <li><a href="#">Stuff</a> </li>
          <li><a href="#">Locates</a></li>
          <li><a href="#">About</a></li>
         </ul>
      </div>

      </div>
    </nav>
  )
}



