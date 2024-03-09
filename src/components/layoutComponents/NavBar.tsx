import { Link } from "react-router-dom"
import Logo from "../../assets/project/dh-logo-preview.png"
import './navbar.scss'

export default function NavBar(){
  return (
<>
    <header className=" md:flex md:items-center md:justify-around p-4 pb-0  md:pb-4">
      <div className="flex items-center justify-between mb-4 md:mb-0">
        <Link style={{ width: "16rem" }} to="/"><img src={Logo} alt="Logo DirtyHub" /></Link>
        <a className="text-black hover:text-orange md:hidden" href="#">
          <i className="fa fa-2x fa-bars"></i>
        </a>
      </div>
<div className='mb-4 w-full md:mb-0 md:w-1/4'>
    <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
        <div className="grid place-items-center h-full w-12 text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>
        <input
        className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
        type="text"
        id="search"
        placeholder="Search something.." /> 
    </div>
</div>
      <nav>
      </nav>
    </header>
    <div className="flex mt-2 w-full justify-center md:justify-around">
  <nav>
    <ul className="flex flex-row gap-4 ">
      <li><a className="subnav" href="#">Categories</a></li>
      <li><a className="subnav" href="#">Stuff</a></li>
      <li><a className="subnav" href="#">Locates</a></li>
      <li><a className="subnav" href="#">About</a></li>
    </ul>
  </nav>
</div>


{/* 
//  <nav className="navdesk sm:block hidden top-0 z-50 h-auto w-full">
//       <div className="flex flex-col items-center">
          
//       <div className="flex flex-row gap-4 mt-3 bg-gray-800 w-full justify-center p-2">
//         <Link className="w-40 h-10" to="/"><img src={Logo} alt="Logo DirtyHub" /></Link>
//         <form className="flex gap-2" action="">
//           <input className="rounded-sm w-full p-1" type="text" placeholder="Search" />
//           <button className="border rounded-sm p-1">Search</button>
//         </form>
//         <button className="border rounded-sm bg-yellow-500 text-gray-700 p-1 w-20">Lang</button>
//       </div>

//       <div className="flex mt-2 w-full justify-center bg-gray-600">
//          <ul className="flex flex-row gap-4">
//           <li><a href="#">Categories</a></li>
//           <li><a href="#">Stuff</a> </li>
//           <li><a href="#">Locates</a></li>
//           <li><a href="#">About</a></li>
//          </ul>
//       </div>

//       </div>
//     </nav>  */}

</>
  )
}



