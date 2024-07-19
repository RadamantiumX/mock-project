import  {  useState, useContext } from "react";
import flagEsp from "../../assets/project/Spain_flags_flag_8858.png";
import flagUk from "../../assets/project/icon-uk.png";
import { useToggleFlag } from "../../customsHooks/customsHooks";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider";
import { LangContext } from "../../contexts/LangContext";



export const Selection = () => {
  const { selectedFlag, toggleFlag } = useToggleFlag(flagEsp, flagUk);
  const [isOpen, setIsOpen] = useState(false);
  
  const selectedLang = useContext(LangContext)
  const {setLang,lang} = useStateContext()
  const navigate = useNavigate()

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectFlag = (flag: string) => {
    toggleFlag(flag);
    setIsOpen(false);
  };

 const handleSelect = (e) => {
    localStorage.removeItem('lang-selected')
    setLang(e.target.value)
    selectedLang.handleMessages(lang)
    navigate(0)
 }
  return (
    <div className="relative flex items-center">
      <select className="w-20" name="" id="" onChange={handleSelect} defaultValue={lang}>
        <option value="en">EN</option>
        <option value="es">ES </option>
      </select>
      {/*<div onClick={handleToggleDropdown}>
        <img
          src={selectedFlag}
          alt={selectedFlag === flagEsp ? "Bandera de España" : "UK Flag"}
          className="inline-block w-8 h-8 cursor-pointer"
          title="Select lang"
        />
      </div>
      {isOpen && (
        <div className="absolute z-10 w-32 mt-2 bg-gray-900 rounded shadow-lg top-full">
          <div onClick={() => handleSelectFlag(flagEsp)} className="flex items-center p-2 cursor-pointer hover:bg-gray-800" title="Seleccionar lenguaje español">
            <img src={flagEsp} alt="Bandera de España" className="w-6 h-6 mr-2" />
            <span>Esp</span>
          </div>
          <div onClick={() => handleSelectFlag(flagUk)} className="flex items-center p-2 cursor-pointer hover:bg-gray-800" title="Select english lang">
            <img src={flagUk} alt="UK Flag" className="w-6 h-6 mr-2" />
            <span>Eng</span>
          </div>
        </div>
      )}*/}
    </div>
  );
};