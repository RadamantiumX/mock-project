import  { useState } from "react";
import flagEsp from "../../assets/project/Spain_flags_flag_8858.png";
import flagUk from "../../assets/project/icon-uk.png";
import { useToggleFlag } from "../../customsHooks/customsHooks";

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
      <div onClick={handleToggleDropdown}>
        <img
          src={selectedFlag}
          alt={selectedFlag === flagEsp ? "Bandera de España" : "UK Flag"}
          className="inline-block w-8 h-8 cursor-pointer"
        />
      </div>
      {isOpen && (
        <div className="absolute z-10 w-32 mt-2 bg-gray-900 rounded shadow-lg top-full">
          <div onClick={() => handleSelectFlag(flagEsp)} className="flex items-center p-2 cursor-pointer hover:bg-gray-800">
            <img src={flagEsp} alt="Bandera de España" className="w-6 h-6 mr-2" />
            <span>España</span>
          </div>
          <div onClick={() => handleSelectFlag(flagUk)} className="flex items-center p-2 cursor-pointer hover:bg-gray-800">
            <img src={flagUk} alt="UK Flag" className="w-6 h-6 mr-2" />
            <span>UK</span>
          </div>
        </div>
      )}
    </div>
  );
};