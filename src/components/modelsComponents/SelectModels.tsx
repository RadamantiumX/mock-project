import { Link } from "react-router-dom";

export default function SelectModels() {

    
  return (
    <>
          <div className="dropdown inline-block relative">
          <Link to="/models?page=1" className="subnav rounded inline-flex items-center">
            Models
          </Link>
        </div>
         </>
  )
}
