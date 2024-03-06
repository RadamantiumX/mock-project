import { Link } from "react-router-dom"

export const NavBar = () => {
  return (
    <nav className="navdesk sm:block hidden top-0 z-30 h-20 w-full">
      <div className="flex ">

      <div>
        <Link to="/">Logo</Link>
        <form action="">
          <input type="text" placeholder="Search" />
        </form>
        <button className="border rounded-sm bg-yellow-500 text-gray-700">Lang</button>
      </div>

      <div>
         <ul>
          <li>Categories</li>
          <li>Stuff</li>
          <li>Locates</li>
          <li>About</li>
         </ul>
      </div>

      </div>
    </nav>
  )
}



