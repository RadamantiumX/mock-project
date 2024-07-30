import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { StarModels } from "../icons/StarModels";

export const  SelectModels = () => {

    
  return (
    <>
          <div className="relative inline-block dropdown">
          <Link to="/models?page=1" className="inline-flex items-center rounded subnav">
          <div className="mr-1">
            <StarModels/>
            </div>
            <FormattedMessage id="nav.models" defaultMessage="Models"/>
          </Link>
        </div>
         </>
  )
}
