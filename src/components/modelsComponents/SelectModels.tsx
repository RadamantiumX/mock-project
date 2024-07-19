import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

export const  SelectModels = () => {

    
  return (
    <>
          <div className="dropdown inline-block relative">
          <Link to="/models?page=1" className="subnav rounded inline-flex items-center">
            <FormattedMessage id="nav.models" defaultMessage="Models"/>
          </Link>
        </div>
         </>
  )
}
