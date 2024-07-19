import { useLang } from "../../customsHooks/customsHooks";
import { FormattedMessage } from "react-intl";

export const Selection = () => {
  const {lang, handleSelect} = useLang()
  
  return (
    <div className="relative flex items-center flex-col">
      <h5><FormattedMessage  id="lang" defaultMessage="Language"/></h5>
      <select className="w-20" name="" id=""  onChange={handleSelect} defaultValue={lang}>
        <option value="en">EN</option>
        <option value="es">ES </option>
      </select>
      
    </div>
  );
};