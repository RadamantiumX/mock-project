import { useLang } from "../../customsHooks/customsHooks";
import { IconWorld } from "../icons/IconWorld";
import { useEffect } from "react";

export const Selection = () => {
  const { lang, handleSelect } = useLang();

  useEffect(() => {
    const options = document.querySelectorAll("#language option");
    options.forEach(option => {
      option.classList.add("bg-black", "text-white", "hover:border-gray-800");
    });
  }, []);

  return (
    <div className="relative flex flex-col justify-center h-full">
    
      <div className="relative w-20">
        <select
          className="block w-full pr-8 leading-tight bg-transparent shadow appearance-none hover:border-gray-500 focus:outline-none focus:shadow-outline cursor-pointer"
          name="language"
          id="language"
          onChange={handleSelect}
          defaultValue={lang}
          title="Language selection"
        >
          <option value="en">EN</option>
          <option value="es">ES</option>
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none px-7">
          <IconWorld />
        </div>
      </div>
    </div>
  );
};
