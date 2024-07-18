import  { useState } from "react";
import flagEsp from "../../assets/project/Spain_flags_flag_8858.png";
import flagUk from "../../assets/project/icon-uk.png";
import { useToggleFlag } from "../../customsHooks/customsHooks";
import { EyeOff } from "../icons/EyeOff";

export const Selection = () => {
  const { selectedFlag, toggleFlag } = useToggleFlag(flagEsp, flagUk);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectFlag = (flag: string) => {
    toggleFlag(flag);
    setIsOpen(false);
  };

  return (
    <div className="relative flex items-center">
      <select className="w-20" name="" id="">
        <option value="" >EN <EyeOff/></option>
        <option value="">ES<img src={flagUk} alt="" /></option>
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