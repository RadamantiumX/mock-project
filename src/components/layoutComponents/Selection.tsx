import  { useState } from "react";
import flagEsp from "../../assets/project/Spain_flags_flag_8858.png";
import flagUk from "../../assets/project/icon-uk.png";

export const Selection = () => {
  const [selectedFlag, setSelectedFlag] = useState(flagEsp);

  const toggleFlag = () => {
    setSelectedFlag(selectedFlag === flagEsp ? flagUk : flagEsp);
  };

  return (
    <div className="relative flex items-center" onClick={toggleFlag}>
      <p className="text-lenguaje">Lang:</p>
      <img
        src={selectedFlag}
        alt={selectedFlag === flagEsp ? "Bandera de España" : "UK Flag"}
        className="inline-block w-8 h-8 cursor-pointer"
      />     
    </div>
  );
};
