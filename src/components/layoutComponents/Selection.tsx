import flagEsp from "../../assets/project/Spain_flags_flag_8858.png";
import flagUk from "../../assets/project/icon-uk.png";
import { useToggleFlag } from "../../customsHooks/customsHooks";

export const Selection = () => {
  const {selectedFlag, toggleFlag} = useToggleFlag(flagEsp, flagUk)
  return (
    <div className="relative flex items-center" onClick={toggleFlag}>
    
      <img
        src={selectedFlag}
        alt={selectedFlag === flagEsp ? "Bandera de España" : "UK Flag"}
        className="inline-block w-8 h-8 cursor-pointer"
      />     
    </div>
  );
};
